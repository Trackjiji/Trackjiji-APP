import React, { Component } from 'react';
import {AppRegistry,Text, Button, Alert, Navigator, View, TouchableHighlight} from 'react-native';
import Listings from './components/Listings';
import Settings from './components/Settings';
import Root from './components/Root';

class App extends Component {
  render(){
    return(
        <Navigator
          initialRoute={{name: 'root'}}
          renderScene={(route, navigator) => {
            if(route.name=='root'){
              return <Root navigator={navigator}/>
            }
            if(route.name=='listings'){
              return <Listings navigator = {navigator} />
            }
            if(route.name=='settings'){
              return <Settings navigator = {navigator} />
            }
          }}
        />
    );
  }
}



export default App;
