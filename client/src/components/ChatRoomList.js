import React, { Component, Fragment } from 'react'; 
import styled from 'styled-components';
import { connect } from 'react-redux';

import { update_current_chatroom } from '../redux/actions/index';


class ChatRoomList extends Component {

  updateChatroomSelection = (id) => {
    this.props.update_current_chatroom(id)
  }

  renderChatRooms = () => {
    const { chatroomslist } = this.props; 
    return chatroomslist.map((item, index) => {
      return (
        <li onClick={() => { this.updateChatroomSelection(item) }} key={index}>
          <div className="room_name">{item.name}</div>
          <div className="participants">
            <span>{item.participants}</span>
            <span>Participants</span>
          </div>
        </li>
      ); 
    }); 
  }




  render() {
    return (
      <Wrapper>
        <h3>Chat Room List</h3>
        <ul>
          { this.renderChatRooms() }
        </ul>
      </Wrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    chatroomslist: state.chatroomslist
  }
}

export default connect(mapStateToProps, { update_current_chatroom })(ChatRoomList)


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

    ul {
      flex: 1 1 auto;
      list-style: none; 
      overflow-y: auto; 
      display: block; 
      height: 100%; 

      li {
        list-style: none; 
        display: flex;
        flex-flow: row nowrap; 
        height: 80px; 
        border-bottom: 1px solid rgba(255,255,255,0.1);
        align-items: center;
        box-sizing: border-box; 
        padding: 0 20px;
        cursor: pointer; 
        transition: background-color 0.15s ease-in-out;
        
        &:hover {
          background-color: rgba(255,255,255,0.15)
        }
        
        .room_name {
          flex: 0 0 80%;
          color: rgba(255,255,255,0.8);
          font-size: 22px;
        }

        .participants {
          flex: 0 0 20%; 
          display: flex; 
          flex-flow: column nowrap; 

          span {
            display: block; 
            text-align: center; 
            color: rgba(255,255,255,0.6)
          }

        }


      }
    }
`;