/* This file contains the home page. */
import React,{ Component} from 'react';
import { StyleSheet} from 'react-native';
import PostScreen from './PostScreen';




export async function getPosts() {
    try{
      let posts =  await fetch('https://yts.mx/api/v2/list_movies.json?quality=3D');
      let result = await posts.json();
      posts = null;

      return result.data.movies;
    }
    catch(err) {
      throw err;
    }
    
      

      
}



export default class HomeScreen extends Component{

  
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