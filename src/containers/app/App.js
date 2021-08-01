import React from 'react';
import MapComponent from '../../components/map/index';
import MarkerList from '../../components/markerList';
import './App.css';
import { initialState } from '../../data/data';
import ResetMapButton from '../../components/resetMapButton/index';


function App() {

  
  const [state, setState] = React.useState(initialState);
  
  React.useEffect(() => {
    const local = JSON.parse(localStorage['markers_map']);
      const init = state.map(item => {
      if (!local.length) return item;
      local.map(i => {
        if (Number(Object.keys(i)[0]) === item.id) {
          item.obtained = i[Object.keys(i)[0]];
        }
      })
      return item;
     })
     setState(init)
  },[])

  React.useEffect(() => {
    const storage = state.filter(item => item.obtained)
    .map(item => {
    const obj = {}  
      obj[`${item.id}`] = item.obtained;
    return obj;
    });
    localStorage['markers_map'] = JSON.stringify(storage);
  },[state])

  return (
    <div className="App">
      <MapComponent state={state} setState={setState}/>
      <ResetMapButton state={state} setState={setState}/>
      <MarkerList state={state} setState={setState}/>
    </div>
  );
}

export default App;
