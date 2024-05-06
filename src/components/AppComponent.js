import React, { useCallback, useMemo } from 'react';
import AddStep from '../containers/AddStep'
import ActualProof from '../containers/ActualProof'
import DisplayActualLanguage from '../containers/DisplayActualLanguage';
import UndoRedo from '../containers/UndoRedo'
import ImportExport from '../containers/ImportExport'
import Help from '../components/Help'
import ActualLanguage from '../containers/ActualLanguage';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import reducer, { exportState, importState, freshState } from '../reducers';
import { updateAxioms, updateTheorems, updateNewTheorem, UPDATE_PROOF, CHANGE_CONST, CHANGE_FUN, CHANGE_PRED } from '../actions';
import LogicContext from './LogicContext'

import '../static/css/bootstrap.min.iso.css';
import '../static/css/style.iso.css';

function filterAction(action) {
  switch(action.type) {
    case UPDATE_PROOF:
      return true;
    case CHANGE_CONST:
    case CHANGE_PRED:
    case CHANGE_FUN:
      if (action.ignore === true) {
        return true;
      }
      return false;
    default:
      return false;
  }
}

function prepare(initialState) {
  const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: 'resolution-editor'
    }) : compose;
  
  const stateMonitor = store => next => action => {
    let notifyWorkbook = !filterAction(action);
    if (instance.handleStoreChange) {
      instance.handleStoreChange(notifyWorkbook);
    }
    return next(action)
  }

  const enhancer = composeEnhancers(
    applyMiddleware(stateMonitor),
  );

  const preloadedState = initialState === null ? importState(freshState) : importState(initialState)
  const instance = {
    store: createStore(
      reducer,
      preloadedState,
      enhancer
    )
  };
  const getState = (instance) => exportState(instance.store.getState());

  return {
    instance,
    getState
  };
}

function AppComponent({ instance, isEdited, onStateChange, context, proof, updateProofVerdict }) {
  const store = instance.store

  instance.handleStoreChange = useCallback((notifyWorkbook) => {
    if (notifyWorkbook === true) {
      onStateChange();
    }
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
      <div className={`is-${isEdited ? '' : 'not-'}edited`}>
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
    </div>
  );
}

export default {
  prepare,
  AppComponent,
}