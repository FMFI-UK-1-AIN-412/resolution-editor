import React from 'react';
import AddStep from '../containers/AddStep'
import ActualProof from '../containers/ActualProof'
import DisplayActualLanguage from '../containers/DisplayActualLanguage';
import UndoRedo from '../containers/UndoRedo'
import ImportExport from '../containers/ImportExport'
import Help from '../components/Help'
import ActualLanguage from '../containers/ActualLanguage';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer, { exportState, importState, freshState } from '../reducers'

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
  return {
    instance,
    getState
  };
}

export const LogicContext = React.createContext(undefined);

function AppComponent({ instance, isEdited, onStateChange, context }) {
  const store = instance.store
  store.subscribe(() => {
    onStateChange();
  });
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