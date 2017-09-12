import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native'

export default class HomeScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./discoball.png')}
        style={[ styles.icon, { tintColor } ]}
      />
    )
  }
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hi Morty!
        </Text>
        <Text style={styles.instructions}>
          Welcome to Disco list!
        </Text>
        <Text style={styles.instructions}>
          (it's a working title)
        </Text>
        <Button
          onPress={() => navigate('Profile')}
          title='Go to the profile screen!'
        />
        <Button
          onPress={() => navigate('NewUserLogin')}
          title='go to the new user screen!'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  icon: {
    height: 20,
    width: 20
  }
})
