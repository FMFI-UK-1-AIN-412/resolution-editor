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

import '../static/css/bootstrap.min.iso.css';
import '../static/css/style.iso.css';

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
    <div className="resolution-editor-4YK5awDfvr">
      <Provider store={store}>
        {props.isEdited && <UndoRedo />}
        {props.isEdited && <ImportExport />}
        <ActualLanguage />
        <ActualProof />
        {props.isEdited && <AddStep />}
        {props.isEdited && <Help />}
      </Provider>
    </div>
  );
}

export default {
  prepare,
  AppComponent,
}
