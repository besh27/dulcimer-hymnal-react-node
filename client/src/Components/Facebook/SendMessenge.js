import React, { Component} from 'react';
import { FacebookProvider, SendToMessenger } from 'react-facebook';
 
export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <SendToMessenger messengerAppId="123456789" pageId="123456789"/>
      </FacebookProvider>    
    );
  }
}