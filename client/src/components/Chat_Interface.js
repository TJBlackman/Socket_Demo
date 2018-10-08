import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import ChatRoom from './chatroom/Complete_Chatroom';
import ChatRoomList from './ChatRoomList';

class Chat_Interface extends Component {

    showChatRoom = () => {
        const { current_chat } = this.props; 
        if (current_chat){
            return <ChatRoom />
        }
    }

    render(){
        return (
            <Wrapper>
                <ChatRoomList />
                { this.showChatRoom() }
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        current_chat: state.current_chat
    }
}

export default connect(mapStateToProps, null)(Chat_Interface)

const Wrapper = styled.div`
    display: flex; 
    flex-flow: row nowrap; 
    justify-content: space-around; 
    align-items: center; 
    width: 100vw; 
    height: 100vh;

    > div {
        flex: 0 0 45%; 
    }
`;
