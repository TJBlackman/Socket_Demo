import React, { Component } from 'react'; 
import styled from 'styled-components';
import { connect } from 'react-redux';

import Chatroom_Input from './chatroom_input';
import Message_History from './message_history';
import { record_own_message } from '../../redux/actions/index';

class ChatRoom extends Component {
  

  render() {
    const { current_chat, record_own_message } = this.props; 

    return (
      <Wrapper>
        <h3>{current_chat.name}</h3>
        <Message_History />
        <Chatroom_Input record_own_message={record_own_message} />
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    current_chat: state.current_chat
  }
}

export default connect(mapStateToProps, { record_own_message })(ChatRoom);


const Wrapper = styled.div`
    display: flex; 
    flex-flow: column nowrap;
    height: 66vh;
    width: 100%; 

    h3 {
      flex: 0 0 40px;
      color: rgba(255,255,255,0.8);
      text-align: center; 
      height: 40px; 
      line-height: 40px; 
      font-size: 24px; 
      padding: 10px 0; 
      text-shadow: 1px 1px 2px rgba(0,0,0,0.6);
      border-bottom: 2px solid rgba(255,255,255,0.25);
    }

    div {
      flex: 1 0 calc(100% - 93px);
    }

    form {
      flex: 0 0 30px;
    }

`;