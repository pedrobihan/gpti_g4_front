import './App.css';
import SuccessInfo from './components/successInfo';
import ShowCities from './components/city';
import Querys from './components/querys';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>UVoice</h1>
        <SuccessInfo />
        <ShowCities />
        <Querys />
      </header>
    </div>
  );
}

export default App;
