import React from 'react';
import styled from 'styled-components';

export default (props) => {
  const { message, username, timestamp, user } = props;
  const my_message = user === username; 
  return (
    <Wrapper title={new Date(timestamp).toLocaleString()} my_message={my_message}>
      <div className="content">{message}</div>
      <div className="username">{username}</div>
    </Wrapper>
  )
};

const Wrapper = styled.li`
  display: flex; 
  flex-flow: column nowrap; 
  padding: 8px 5px;
  border-bottom: 1px solid rgba(255,255,255,0.1);

  .content {
    flex: 0 0 80%; 
    color: rgba(255,255,255,0.8);
    text-align: ${props => props.my_message ? 'right' : 'left'};

  }
  .username {
    text-align: ${props => props.my_message ? 'left' : 'right'};
    font-size: 12px; 
    color: rgba(255,255,255,0.6);
  }

`;
