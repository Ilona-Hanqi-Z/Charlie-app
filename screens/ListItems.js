import React,{Component} from 'react';
import {Card, CardItem, Thumbnail,Body,Left, Right, Button, Icon} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Text, StyleSheet,Image, Alert} from 'react-native';


class ListItems extends Component{

        constructor(props) {
            super(props);
            this.data = props.data;
            this.state = {
                isLiked:false,
                likes: this.data.runtime,
                retweets: this.data.id,
                retweet:false
            }
        }
        LikedFunction =()=> {
            this.setState({
                isLiked: !this.state.isLiked
               
            });
           
        }
        RetweetedFunction = () => {
            this.setState({

                retweet: !this.state.retweet
            });
        }
        
        render() {
            return(
             <Card>
                <CardItem>
                <Left>
                     <Thumbnail source={{uri: this.data.small_cover_image != null ?
                     this.data.small_cover_image : "https://yts.mx/assets/images/movies/el_topo_1970/small-cover.jpg"}}/>{/*user image*/}
                    <Body>
                    
                         <Text>{this.data.title_english}</Text>
                         <Text note>{this.data.year}</Text>
                        
                    </Body>
                   
                </Left>
              </CardItem>
              <CardItem>
                  <Image source={{uri: this.data.medium_cover_image != null ?
                  this.data.medium_cover_image : "https://yts.mx/assets/images/movies/el_topo_1970/small-cover.jpg"}} 
                  style={{height:200,width:null,flex:1}}/>
              </CardItem>
              <CardItem>
                  <Body>
                      <Text>
                      {this.data.summary}
                      </Text>
                  </Body>
              </CardItem>
              <CardItem style={{height:45}}>
                <Left>
                    <Button transparent onPress ={this.LikedFunction}>
                        <FontAwesome name= {this.state.isLiked ? "heart": "heart-o"}/>
<<<<<<< HEAD
                  <Text>{this.state.isLiked ? (this.state.likes+1) : this.state.likes }</Text>
                    </Button>
                    <Button transparent onPress ={this.RetweetedFunction}>
                        <FontAwesome name="retweet"/>
                        <Text>{this.state.retweet ? (this.state.retweets+1) : this.state.retweets }</Text>
                    </Button>
                    <Button transparent>
                        <FontAwesome name="share"/>
                    </Button>
=======
                        <Text> {this.state.isLiked ? (this.state.likes+1) : this.state.likes }</Text>
                    </Button>

                    <Button transparent onPress ={this.RetweetedFunction}>
                        <FontAwesome name="retweet"/>
                        <Text> {this.state.retweet ? (this.state.retweets+1) : this.state.retweets }</Text>
                    </Button>

                    <Button transparent>
                        <FontAwesome name="share"/>
                    </Button>

>>>>>>> 0ea5128beacb67ac1ff8829e34c818d9a7542a03
                    <Right>
                        <Button style={styles.readMore}>
                            <Text style ={{color:"blue"}}>READ MORE</Text>
                        </Button>
                    </Right>
                </Left>
              </CardItem>
              </Card>
   
            );
        }
       



}
export default ListItems;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    readMore : {
      backgroundColor:'white'  
    }
});