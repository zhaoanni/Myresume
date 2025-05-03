
import './App.css';
import ConnectInfo from './connectInfo';
import Content from './content/maincontent';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
