import React from 'react';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Item from './Item';

import{
 BrowserRouter as Router,
 Switch,
 Route,
 Link,
} from 'react-router-dom';

class App extends React.Component{

   constructor(){
    super();
   }

   render(){
    return (
      
  <Router>
       <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/item/1">First item</Link>
          </li>
          <li>
            <Link to="/item/2">Second item</Link>
          </li>
          <li>
            <Link to="/item/3">Third item</Link>
          </li>
        </ul>
       </div>
     
    <Switch>
      <Route exact path="/">
         <Home />
       </Route>
       <Route path="/about">
         <About />
       </Route>
       <Route path="/contact">
         <Contact />
       </Route>
      <Route path="/item/:id">
        <Item/>
      </Route>
    </Switch>
  </Router>
    );
  } 
}  

export default App;