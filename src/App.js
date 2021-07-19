import HomeContainer from './Containers/HomeContainer'
import './App.css';
import User from './User'
function App() {
  return (
    <div className="App">
      {/* <h1>App component</h1> */}
      <User data={{ name: 'Ojhal Patwa', age: 24 }} />
      <HomeContainer />
    </div>
  );
}

export default App;
