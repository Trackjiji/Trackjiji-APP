/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TextInput
} from 'react-native';

import Listings from './app/components/Listings';
import App from './app';

class House extends Component {
  render() {
    return (
      <View>
        <Image source={{uri: this.props.img}} style={{width: 400, height: 400}}></Image>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

//test state
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    //Toggle the state every second
    setInterval(()=>{
      this.setState({showText: !this.state.showText});
    },1000);
  }

  render(){
    let display = this.state.showText ? this.props.text : ' ';
    return(
      <Text>{display}</Text>
    );
  }
}

class BlinkApp extends Component {
  render(){
    return (
      <View>
        <Blink text = "test"></Blink>
        <Blink text = "test"></Blink>
        <Blink text = "test"></Blink>
        <Blink text = "test"></Blink>
      </View>
    );
  }
} //end testing state


//test styles
class Styles extends Component {
  render(){
    return (
      <View>
        <Text style={styles.bigBlue}>Just Blue</Text>
        <Text style={styles.red}>Just Red</Text>
        <Text style={[styles.bigBlue, styles.red]}>Blue and Red</Text>
        <Text style={[styles.red, styles.bigBlue]}>Red and Blue</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight:'bold',
    fontSize:30
  },
  red: {
    color: 'red',
  }
});

//learn flex view
class FixedDimentionsBasics extends Component {
  render(){
    return (
      <View style = {{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'

      }}>
        <View style= {{width:50, height:50, backgroundColor: 'powderblue'}}></View>
        <View style= {{width:50, height:50, backgroundColor: 'skyblue'}}></View>
        <View style= {{width:50, height:50, backgroundColor: 'steelblue'}}></View>
      </View>
    );
  }
}

//learn handling text input
class PizzaTranslator extends Component {
  constructor(props){
    super(props);
    this.state = {text: ''};
  }

  render(){
    return(
      <View style={{padding:10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Enter text Here"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}
function getDataFromApi() {
  return fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((responseJson) => {
      // console.log(responseJson.results[0].picture.large);
      return responseJson.results[0].picture.large;
    })
    .catch((error) => {
      console.error(error);
    });
}

// class Listings extends Component {
//   render(){
//     return(
//       <ScrollView>
//         <House img='https://randomuser.me/api/portraits/men/95.jpg' text='test'/>
//         <House img='https://randomuser.me/api/portraits/men/95.jpg' text='jshkjdah'/>
//         <House img='https://randomuser.me/api/portraits/men/95.jpg' text='jddhzz'/>
//       </ScrollView>
//     );
//   }
// }

AppRegistry.registerComponent('ReactApp', () => App);
