

// import './App.css';

// import logo from './logo.svg';
// import './App.css';
import Login from './Components/Shilajit/Log/Login';
import Registration from './Components/Shilajit/Reg/Registration';
import Register from './Components/Shilajit/Reg/Registration';

import AllRoutes from './Pages/AllRoutes';

function App() {
  return (
    <div className="App">

<AllRoutes/>


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
   

      {/* <AllRoutes/> */}
      {/* <Login/> */}
      <Registration/>

    

    </div>
  );
}

export default App;
