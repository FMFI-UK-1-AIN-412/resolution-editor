import React from 'react';
import AddStep from '../containers/AddStep'
import ActualProof from '../containers/ActualProof'
import ActualLanguage from '../containers/ActualLanguage'
import UndoRedo from '../containers/UndoRedo'
import ImportExport from '../containers/ImportExport'
import Help from '../components/Help'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer, { exportState, importState, freshState } from '../reducers'
import { LogicContext } from '../logicContext';

import '../static/css/bootstrap.min.iso.css';
import '../static/css/style.iso.css';

function prepare(initialState) {
  const preloadedState = initialState === null ? importState(freshState) : importState(initialState)
  const instance = {
    store: createStore(reducer, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
      name: 'resolution-editor'
    }))
  };
  const getState = (instance) => exportState(instance.store.getState());
  return {
    instance,
    getState
  };
}

function AppComponent({ instance, isEdited, onStateChange, context, proof }) {
  const store = instance.store
  store.subscribe(() => {
    onStateChange();
  });
  return (
    <div className="resolution-editor-4YK5awDfvr">
      <Provider store={store}>
        <LogicContext.Provider value={context}>
          {isEdited && <UndoRedo />}
          {isEdited && <ImportExport />}
          <ActualLanguage />
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