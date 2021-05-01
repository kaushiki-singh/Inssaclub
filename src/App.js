import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import Error from './components/Error';
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const handleName = (fname, lname, mail) => {
    setFirstName(fname);
    setLastName(lname);
    setEmail(mail);
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path = "/" render={() => <Login  handleName={handleName}/>} />
        <Route exact path="/profile" render={() => <Profile firstName={firstName} lastName={lastName} email={email} />}/>
        <Route exact path="/error" component={Error}/>
        
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
