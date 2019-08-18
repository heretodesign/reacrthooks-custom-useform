import React, {useState} from 'react';
import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

const useForm = submitCallback => {


  const [state, setState] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    submitCallback();
  }

  const handleChange = e => {
    e.persist();
    setState(state => ({ ...state, [e.target.name]: e.target.value }));
  }

  return [state, handleChange, handleSubmit];
}

export default useForm;
