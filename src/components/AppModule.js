import React, { useState } from 'react';
import AddStep from '../containers/AddStep'
import ActualProof from '../containers/ActualProof'
import ActualLanguage from '../containers/ActualLanguage'
import UndoRedo from '../containers/UndoRedo'
import ImportExport from '../containers/ImportExport'
import Help from '../components/Help'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers'

function AppModule() {
  const store = useState(createStore(reducer))[0];
  return (
    <Provider store={store}>
      <ActualLanguage />
      <ActualProof />
      <AddStep />
      <Help />
    </Provider>
  )
}

export default AppModule
