import React, { Component } from 'react';
import {Text, Alert, View, TouchableHighlight} from 'react-native';

const onButtonPress = () =>{
  Alert.alert('clicked');
}

class Root extends Component {
  render(){
    return(
      <View>
        <TouchableHighlight onPress={() => {
          this.props.navigator.push({
            name: 'listings'
          })
        }}>
          <Text>Listings</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
          this.props.navigator.push({
            name: 'settings'
          })
        }}>
          <Text>Settings</Text>
        </TouchableHighlight>
     </View>
    );
  }
}

export default Root;
