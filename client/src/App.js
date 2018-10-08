import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'; 

import SignInForm from './components/Signup_Form';
import Chat_Interface from './components/Chat_Interface';

import './socket_io/socket.js';


class App extends Component {
  showWhatContent = () => {
    const not_authenticated = this.props.username === null; 

    if (not_authenticated) {
      return <SignInForm />
    } else {
      return <Chat_Interface />
    }
  }


  render() {
    return (
      <AppWrapper>
        { this.showWhatContent() }
      </AppWrapper>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      username: state.username
    }
}
export default connect(mapStateToProps, null)(App)



// styles
const AppWrapper = styled.div`
  display: flex; 
  height: 100vh;
  width: 100vw;
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0f2027, #203a43, #2c5364); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  justify-content: center; 
  align-items: center; 
`;