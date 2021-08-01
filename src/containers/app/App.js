import React from 'react';
import MapComponent from '../../components/map/index';
import MarkerList from '../../components/markerList';
import './App.css';
import { initialState } from '../../data/data';


function App() {

  const [state, setState] = React.useState(initialState);

  React.useEffect(() => {
    console.log('state is changed')
  },[state])

  return (
    <div className="App">
      <MapComponent state={state} setState={setState}/>
      <MarkerList state={state} setState={setState}/>
    </div>
  );
}

export default App;
