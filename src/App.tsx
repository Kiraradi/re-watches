import Form from './components/form/form';
import './App.css';
import { WatchInfo } from './components/form/form';
import { useState } from 'react';
import Watches from './components/watches/watches';


const initWatchList: WatchInfo[] = []; 

function App() {
  const [watchList, setWatchList] = useState(initWatchList);

  function removeWatch(id: string) {
    const indexWatch = watchList.findIndex( watch => watch.id === id );
    const newWatchList = [...watchList];
    
    if (indexWatch >=0) {
      newWatchList.splice(indexWatch, 1);
      setWatchList(newWatchList);
    }
  }

  const onAddWatchInfo = (watch: WatchInfo) => {
    const data: WatchInfo[] = [ ...watchList];
    data.push(watch);
    setWatchList(data);
  }

  return (
    <div className="App">
      <Form onAddWatchInfo={onAddWatchInfo}></Form>
      <Watches watches={watchList} removeWatch={removeWatch}></Watches>
    </div>
  );
}

export default App;
