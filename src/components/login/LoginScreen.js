import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Container, Header, Content, Tab, Tabs, TabHeading} from 'native-base';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
import {connect} from 'react-redux';

import { withNavigation } from 'react-navigation';
class LoginScreen extends Component {
  render() {
    if (!this.props.auth.isAuthenticated){
      return (
        <Login />
      )
    }
    else {
      return (
        <Profile />
      )
    }
    // }
    // return (
    //   <>
    //     <Container>
    //       <Tabs>
    //         <Tab
    //           heading={
    //             <TabHeading style={styles.tab}>
    //               <Text style={styles.text}>Login</Text>
    //             </TabHeading>
    //           }>
    //           <Login />
    //         </Tab>
    //         <Tab
    //           heading={
    //             <TabHeading style={styles.tab}>
    //               <Text style={styles.text}>Register</Text>
    //             </TabHeading>
    //           }>
    //           <Register navigate={this.props}/>
    //         </Tab>
    //       </Tabs>
    //     </Container>
    //   </>
    // );
  }
}
const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#a5a6a8',
  },
  text: {
    color: 'white'
  }
});

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default withNavigation(connect(mapStateToProps)(LoginScreen)) ;
