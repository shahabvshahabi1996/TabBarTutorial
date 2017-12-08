/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ViewPagerAndroid
} from 'react-native';


import Header from './src/Components/Header';

const TabBarItems = [
  {
    name : 'Tab1',
  },{
    name : 'Tab2',
  },{
    name : 'Tab3',
  }
]

export default class App extends Component {
  state = {
    active : 0
  }
  render() {
    return (
      <View style={{flexDirection : 'column',justifyContent : 'flex-start',flex : 1,alignSelf : 'stretch'}}>
        <Header  text={"Tab bar"} />
        <View style={{flexDirection : 'row',justifyContent : 'center',backgroundColor : '#1C57E1',height : 40}}>
            {TabBarItems.map((tab,index)=>{
              if(this.state.active == index)
                return(
                  <View key={index} style={styles.TabBarActive}>
                        <Text style={{color : '#fff',fontSize : 16}}>{tab.name}</Text>
                  </View>
                )
              else
                return(
                  <View key={index} style={styles.TabBarDisActive}>
                    <Text style={{color : '#fff',fontSize : 16}}>{tab.name}</Text>
                  </View>
                )  
            })}
        </View>
        <ViewPagerAndroid
          style={styles.viewPager}
          onPageSelected={(event)=>{this.setState({active : event.nativeEvent.position})}}
          initialPage={0}>
            <View style={styles.pageStyle} key="1">
              <Text>Tab 1</Text>
            </View>
            <View style={styles.pageStyle} key="2">
              <Text>Tab 2</Text>
            </View>
            <View style={styles.pageStyle} key="3">
              <Text>Tab 3</Text>
            </View>
        </ViewPagerAndroid>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TabBarActive : {
    margin : 5, marginBottom : 1.5 ,
    flex : 1,
    alignItems : 'center',
    alignItems : 'center',
    borderBottomColor : '#FFEB3B',
    borderBottomWidth : 3,
  },
  TabBarDisActive : {
    margin : 5 , 
    flex : 1,
    alignItems : 'center',
    alignItems : 'center'
  },
  viewPager: {
    flex: 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  pageStyle: {
    alignItems: 'center',
    justifyContent : 'center',
    padding: 20,
  }
});
