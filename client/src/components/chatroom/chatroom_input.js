import React, { Component } from 'react'; 
import styled from'styled-components';

import send_message_to_server from '../../socket_io/send_message';


export default class chatroom_input extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: ''
    };

  }

  update_value = (e) => {
    const { value } = e.target; 

    if (value.length < 200){
      this.setState({ input: value });
    }
  }

  send_message = (e) => {
    e.preventDefault();
    const { input } = this.state; 
    const { record_own_message } = this.props; 

    send_message_to_server(input); 
    record_own_message(input); 
    
    this.setState({ input: '' })
  }
  
  render() {
    const { input } = this.state; 
    const change = this.update_value; 
    const submit = this.send_message;
    const can_submit = input.length > 0; 

    return (
      <Wrapper onSubmit={submit} can_submit={can_submit}>
        <input type="text" value={input} onChange={change} placeholder='New Message' />
        <button disabled={!can_submit}>Go!</button>
      </Wrapper>
    )
  }
}

const Wrapper = styled.form`
  display: flex;
  flex-flow: horizontal nowrap; 
  width: 100%; 
  height: 30px; 
  border-top: 1px solid rgba(255,255,255,0.2);

  input {
    background-color: rgba(255,255,255,0.9); 
    color: rgba(0,0,0,0.9);
    font-size: 16px; 
    padding-left: 5px;
    flex: 1 0 auto;
    border: none;
    outline: 0;  
  }

  button {
    border: none; 
    flex: 0 0 40px; 
    width: 40px; 
    text-align: center; 
    border-left: 1px solid rgba(0,0,0,0.6); 
    font-size: 16px; 
    opacity: ${props => props.can_submit ? '1' : '0.5'};
    cursor: ${props => props.can_submit ? 'pointer' : 'not-allowed'};
    outline: 0; 
    color: rgba(0,0,0,0.8);
  }
`;