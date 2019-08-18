import React from 'react';
import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import useForm from '../formContainer/useForm'

const Form = () => {

  const register = e => {
    console.log(values);
  }

  //array destructuring
  const [values, handleChange, handleSubmit] = useForm(register);


    return (
      <>
       <section className="section is-paddingless-horizontal">
          <div className="container grid is-large">
              <div className="firstsection">
                  <div className="content" id="todoForm">
                    <form id="todo-form"
                      onSubmit={handleSubmit}>
                      <div className="columns">
                          <div className="column is-four-fifths">
                            <div className="field">
                              <div className="control">
                                <input className="input is-large" type="text"
                                  name="title"
                                  placeholder="Add Bulletin Title"
                                  value={values.title}
                                  onChange={handleChange}  />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="column is-four-fifths">
                            <div className="field">
                              <div className="control">
                                <input className="input is-large" type="text"
                                  name="date"
                                  placeholder="Date Held"
                                  value={values.date}
                                  onChange={handleChange}  />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="column is-four-fifths">
                            <div className="field">
                              <div className="control">
                                <textarea className="textarea is-large" type="text"
                                  name="content"
                                  placeholder="Contents"
                                  value={values.content}
                                  onChange={handleChange} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="column is-four-fifths">
                            <div className="field">
                              <div className="control">
                                <button className="button is-large is-info is-fullwidth"
                                  type="submit"
                                  value="Submit">Add Bulletin</button>
                              </div>
                            </div>
                          </div>
                        </div>
                    </form>
                  </div>
                  <div className="content">
                    <p className="subtitle is-6 has-text-center has-text-grey has-text-weight-semibold is-uppercase">Don't Miss Out </p>
                  </div>
               </div>
          </div>
        </section>
      </>
    );
}


export default Form;
