import React, {Component} from 'react';
import { View, Text, ListView , Image} from 'react-native';
import api from './../../utils/Api.js';
import Listing from './Listing';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class Listings extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {},
      loaded: false,
    }
  }

  componentDidMount(){
    api.getListings()
    .then((res) => {
        console.log(ds);
        this.setState({
          data: ds.cloneWithRows(res.listings),
          loaded:true,
        });
    })
    .catch((error) => {
      console.error(error);
    })
    .done();
  }

  render(){
    if(!this.state.loaded){
      return <Text>Loading items.....</Text>
    }
    return(
      <ListView
        dataSource={this.state.data}
        renderRow={this.renderListing}
      />
    );
  }

  renderListing(listing){
    return(
      <View style={{flex: 1, backgroundColor:brown}}>
        <Text>{listing.title}</Text>
        <Image source={{uri: listing.image}}
          style={{height:100, width:100}} />
        <Text>{listing.link}</Text>
        <Text> Price: {listing.price}</Text>
      </View>
    )
  }
}
