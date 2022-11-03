import './App.css';
import SuccessInfo from './components/successInfo';
import ShowCities from './components/city';
import UserQuerys from './components/userQuerys';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <SuccessInfo />
        <ShowCities />
        <UserQuerys />
      </header>
    </div>
  );
}

export default App;
