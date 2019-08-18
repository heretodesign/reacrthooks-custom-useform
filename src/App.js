import React from 'react';
import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import './App.scss';
import Form from './components/Form';

const App = () => {
  return (
    <div className="App">
      <div class="container">
        <h1 className="is-3"> Custom Forms using React Hooks </h1>
        <div className="notification">
          <h1 className="is-3"> Bulletin Form</h1>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
