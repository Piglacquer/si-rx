import React from 'react';
import AppRouter from './Navigation/Router';
import NavBar from './Navigation/NavBar';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
}

// export default App;
export default App;