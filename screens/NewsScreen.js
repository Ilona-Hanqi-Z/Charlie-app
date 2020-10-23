/* This file contains the gallery page. */

import React,{ Component} from 'react';
import { StyleSheet} from 'react-native';
import PostScreen from './PostScreen';

export default class NewsScreen extends Component{
    render(){
      return (
        <PostScreen/>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex :1,
  }
});