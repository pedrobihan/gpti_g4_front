import './App.css';
import SuccessInfo from './components/successInfo';
import ShowCities from './components/city';
import UserQuerys from './components/userQuerys';
import User from './components/users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <SuccessInfo />
        <ShowCities />
        <UserQuerys />
        <User />
      </header>
    </div>
  );
}

export default App;
