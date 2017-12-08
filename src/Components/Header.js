import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class Header extends Component{
    render(){
        return(
        <View style={{height : 60,backgroundColor : '#1C57E1',alignItems : 'center',justifyContent : 'center',alignSelf : 'stretch'}}>
            <Text style={{color : '#fff',fontSize : 20}}>{this.props.text}</Text>
        </View>
        )
    }
}