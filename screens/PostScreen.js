import React ,{Component } from 'react';
import { View,StyleSheet,ActivityIndicator,Text} from 'react-native';
import {getPosts} from './HomeScreen';
import ListItems from './ListItems';
import {Container,Content,List} from 'native-base';


export default class PostScreen extends Component   {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            data: null
        }
    }

    componentDidMount() {

        getPosts().then(data => {
            this.setState({
                isLoading:false,
                data : data
            });
        }, error => {
            console.log(error);
        }
        )
    }
    render(){
    
    let view = this.state.isLoading ? (
        <View>
            <ActivityIndicator animating={this.state.isLoading}/>
            <Text style={{marginTop: 10}}>Pleast Wait..</Text>
        </View>
    ) : (
        <List 
        dataArray={this.state.data}
        renderRow= {(item) => {
            return <ListItems data={item} />
        }}
        />
    )
    return (
        <Container>
            <Content>
               {view}
            </Content>
        </Container>
    );
    }
}



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