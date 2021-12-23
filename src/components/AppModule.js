import React, { useState } from 'react';
import AddStep from '../containers/AddStep'
import ActualProof from '../containers/ActualProof'
import ActualLanguage from '../containers/ActualLanguage'
import UndoRedo from '../containers/UndoRedo'
import ImportExport from '../containers/ImportExport'
import Help from '../components/Help'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer, { exportState, importState } from '../reducers'

function prepare(initialState) {
  const preloadedState = initialState === null ? undefined : importState(initialState)
  const instance = {
    store: createStore(reducer, preloadedState)
  };
  const getState = (instance) => exportState(instance.store.getState());
  return {
    instance,
    getState
  };
}

function AppComponent(props) {
  const store = props.instance.store
  store.subscribe(() => {
    props.onStateChange();
  });
  return (
    <Provider store={store}>
      <ActualLanguage />
      <ActualProof />
      <AddStep />
      <Help />
    </Provider>
  );
}

export {
  prepare,
  AppComponent,
}
