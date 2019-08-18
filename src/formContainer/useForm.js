import React, {useState} from 'react';
import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

const useForm = () => {

  // const [title, setTitle] = useState("");
  // const [date, setDate] = useState("");
  // const [content, setContent] = useState("");
  // const [comment, setComment] = useState("");


  const [state, setState] = useState({});

  const handleChange = e => {
    e.persist();
    setState(state => ({ ...state, [e.target.name]: e.target.value }));
  }

  return [state, handleChange];
}

export default useForm;
