import React, { Component } from 'react';
import { FacebookProvider, Group } from 'react-facebook';
 
export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <Group
          href="https://www.facebook.com/groups/375934682909754"
          width="300"
          showSocialContext={true}
          showMetaData={true}
          skin="light"
        />
      </FacebookProvider>    
    );
  }
}