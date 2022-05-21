import { useContext } from 'react';
import './App.css';
import AppContext from './contexts/AppContext';
import Home from './pages/Home';
import Savings from './pages/Savings';
function App() {
  const { currentScreen } = useContext(AppContext);

  return (
    <div className="App">
      <h1>Welcome to ẹgbẹ ifowopamọ!</h1>
      {currentScreen ? <Savings /> : <Home />}
    </div>
  );
}

export default App;
