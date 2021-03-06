import React from 'react';
import './App.css';
import { Switch ,Route } from 'react-router';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
// const HatsPage = () => (
//   <div>
//     <h1>Hats</h1>
//   </div>
// )

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
