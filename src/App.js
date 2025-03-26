import logo from './logo.svg';
import './App.scss';
import MyComponent from './views/Example/MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World My friend! This is a React App running on.
        </p>
        
        <MyComponent/>
      </header>

    
    </div>
  );
}

export default App;
