import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Message from './Message';

class Message_History extends Component {

    constructor(props){
        super(props); 

        this.myRef = React.createRef();
    }

    componentDidUpdate(){
        const height = this.myRef.current.scrollHeight; 
        this.myRef.current.scrollTop = height;
    }

  render() {
    const { messages, username } = this.props; 
    return (
      <Wrapper innerRef={this.myRef}> 
            <ul>
                {messages.map((item, index) => {
                    const message_props = {
                        ...item,
                        user: username,
                        key: index
                    }; 
                    return ( <Message {...message_props} />);
                })}
            </ul>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
    return { 
        messages: state.current_chat.messages,
        username: state.username
    }
}

export default connect(mapStateToProps, null )(Message_History); 

const Wrapper = styled.div`
    height: 100%; 
    overflow-y: auto;

`;