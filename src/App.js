import React, { useState, useEffect } from 'react';
//not a fun project.
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  const [reload, setReload] = useState(false)
  const { state } = store.getState()
  useEffect(() => {
    // have to force update on
    // adding or deleting feature becuase
    // component won't rerender like it normally should
    // when redux state changes
    // hypothesis is redux state is not normalized and that is why
  }, [reload])

  return (
    <Provider store={store}>
      <div className="boxes">
        <div className="box">
          <Header car={state.car} />
          <AddedFeatures reload={reload} setReload={setReload} car={state.car} />
        </div>
        <div className="box">
          <AdditionalFeatures setReload={setReload} reload={reload} additionalFeatures={state.additionalFeatures} />
          <Total car={state.car} additionalPrice={state.additionalPrice} />
        </div>
      </div>
    </Provider>
  );
};

export default App;
