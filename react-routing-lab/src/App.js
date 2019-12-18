import React from 'react';
import {Link, Route, Switch} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Dog from './Components/Dog'
// import Cat from './Components/Cat'


function App() {
  return (
    <div className="App">
      {/* <h1> Dog and Cat Images</h1> */}
      
    <nav>
      <Link to ="/dog/random">Dog</Link>{" "}
      <Link to ="/dog/random/:num">Dog by Numbers</Link>{" "}
      <Link to ="/dog/:breed">Dog by Breed</Link>{" "}


      {/* <Link to="/cat">Cat</Link> */}
    </nav>

    <Switch>
     <Route path="/dog/random" component={Dog}/>
     <Route path="dog/random/:num" component={Dog}/>
     {/* <Route path="/dog/:breed" component={breedOfDog}/> */}
     {/* <Route path="/cat/random" component={Cat}/>
     <Route path="/cat/random/:num" component={Cat}/> */}
    </Switch>
    </div>
  );
}

export default App;
                                                                 