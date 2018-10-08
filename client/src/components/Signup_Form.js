import React, { Component } from 'react'; 
import styled from 'styled-components';
import { connect } from 'react-redux';

import { update_username } from '../redux/actions';

class signin_form extends Component {
    constructor(props){
        super(props); 

        this.state = {
            username: ''
        }; 
    }

    updateInput = (e) => {
        if (e.target.value.length <= 15){
            this.setState({ username: e.target.value });
        }
    }

    register = (e) => {
        e.preventDefault(); 
        const { username } = this.state; 

        if (username.length > 0){
            this.props.update_username(username); 
        }
    }

  render() {
    const update = this.updateInput; 
    const login  = this.register; 
    const { username } = this.state; 

    return (
      <Form onSubmit={login}>
        <h1>Choose a User Name</h1>
        <input type="text" placeholder="Username" onChange={update} value={username} autoFocus={true}/>
        <button>Go!</button>
      </Form>
    )
  }
}

export default connect(null, { update_username })(signin_form);


const Form = styled.form`
    display: block; 
    margin-top: calc(-0.2 * 100vh);
    text-align: center; 
    max-width: 95%; 

    h1 {
        color: rgba(255,255,255,0.8); 
        text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        margin: 30px 0; 
    }

    input {
        border: none; 
        background-color: transparent; 
        outline: 0; 
        color: rgba(255,255,255,0.8); ;
        border-bottom: 1px solid rgba(255,255,255,0.2); 
        display: block; 
        height: 40px; 
        line-height: 40px; 
        padding: 0 5px; 
        margin: 0 0 30px 0; 
        display: block; 
        width: 100%; 
        font-size: 32px; 

        ::placeholder {
            color: rgba(255,255,255,0.3)
        }
    }

    button {
        border: 1px solid white; 
        color: white; 
        background-color: transparent; 
        text-align: center; 
        line-height: 40px; 
        height: 40px; 
        width: 60px; 
        border-radius: 2px; 
        font-size: 16px;
        float: right; 
        cursor: pointer; 
        outline: 0; 
    }

`; 