import React, {Component} from 'react';
import { View, Text, TouchableHighlight, Alert , Image} from 'react-native';

export default class Listing extends Component {
  render(){
    return(
    <View>
      <Text>{this.props.title}</Text>
      <Text>{this.props.arunislying}</Text>
      <Text>{this.props.image}</Text>
      <Text>{this.props.link}</Text>
      <Text>{this.props.price}</Text>
    </View>
    );
  }
}
