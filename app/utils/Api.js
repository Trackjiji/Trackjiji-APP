import React, {Component} from 'react';
import { View, Text, TouchableHighlight, Alert } from 'react-native';

let api = {
  getListings() {
    return fetch('http://trackjiji.herokuapp.com/listings')
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default api;
