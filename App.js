import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

class Index extends React.Component {
  render(){
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

class SplashScreen extends React.Component {
  render() {

    this.state = {isVisible: true};

    let pic = {
      uri: 'http://aksia.com/images/logo.png'
    };

    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 216, height: 52}}/>
        <Text style={{color:'#fff', fontSize: 16, marginTop: 20}}>Latest Activities</Text>
        <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Proceed"
        />
        </View>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {

    return (
      <SplashScreen/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#394865',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 2,
    backgroundColor: '#fff'
  }
});
