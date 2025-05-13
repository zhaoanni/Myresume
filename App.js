
import './App.css';
import ConnectInfo from './connectInfo';
import Content from './content/maincontent';
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from 'react';
import axiosInstance from './axiosInstance';
function App() {
  const [data, setData] = useState('');
  useEffect(() => {
    axiosInstance.get('/')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      {/* <h1>{data}</h1> */}
      <div className="App-header">
        <ConnectInfo />
      </div>
      <main>
        <Content />


      </main>
    </div>
  );
}

export default App;
