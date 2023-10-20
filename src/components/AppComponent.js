import React, { useCallback, useMemo } from 'react';
import AddStep from '../containers/AddStep'
import ActualProof from '../containers/ActualProof'
import DisplayActualLanguage from '../containers/DisplayActualLanguage';
import UndoRedo from '../containers/UndoRedo'
import ImportExport from '../containers/ImportExport'
import Help from '../components/Help'
import ActualLanguage from '../containers/ActualLanguage';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer, { exportState, importState, freshState } from '../reducers';
import { updateAxioms, updateTheorems, updateNewTheorem } from '../actions';

import '../static/css/bootstrap.min.iso.css';
import '../static/css/style.iso.css';

function prepare(initialState) {
  const preloadedState = initialState === null ? importState(freshState) : importState(initialState)
  const instance = {
    store: createStore(
      reducer,
      preloadedState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ name: 'resolution-editor' })
    )
  };
  const getState = (instance) => exportState(instance.store.getState());

  instance.store.subscribe(() => {
    if (instance.handleStoreChange) {
      instance.handleStoreChange();
    }
  });

  return {
    instance,
    getState
  };
}

export const LogicContext = React.createContext(undefined);

function AppComponent({ instance, isEdited, onStateChange, context, proof, updateProofVerdict }) {
  const store = instance.store

  instance.handleStoreChange = useCallback(() => {
    onStateChange();
    updateProofVerdict && updateProofVerdict(instance.store.getState().present.steps.verdict);
  }, [onStateChange,updateProofVerdict]);

  useMemo(() => {
    if (proof) {
      store.dispatch(updateAxioms(
        // reduce to array of clauses
        Object.values(proof.axiomsConv)
          .reduce((p, v) => p.concat(v), []),
        proof.extendedContext
      ));
    }
  }, [proof?.axiomsConv]);
  useMemo(() => {
    if (proof) {
      store.dispatch(updateTheorems(
        // reduce to array of prooved clauses
        Object.values(proof.theoremsConv)
          .filter(t => t.prooved)
          .map(t => t.clauses)
          .reduce((p, v) => p.concat(v), []),
        proof.extendedContext
      ));
    }
  }, [proof?.theoremsConv]);
  useMemo(() => {
    if (proof) {
      store.dispatch(updateNewTheorem(
        // reduce to array of clauses
        Object.values(proof.newTheoremConv)
          .reduce((p, v) => p.concat(v), []),
        proof.extendedContext
      ));
    }
  }, [proof?.newTheoremConv]);

  return (
    <div className="resolution-editor-4YK5awDfvr">
      <Provider store={store}>
        <LogicContext.Provider value={proof === undefined ? context : proof.extendedContext}>
          {isEdited && <UndoRedo />}
          {isEdited && <ImportExport />}
          {context === undefined ? <ActualLanguage /> : <DisplayActualLanguage />}
          <ActualProof />
          {isEdited && <AddStep />}
          {isEdited && <Help />}
        </LogicContext.Provider>
      </Provider>
    </div>
  );
}

export default {
  prepare,
  AppComponent,
}