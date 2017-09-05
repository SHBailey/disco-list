import React, { Component } from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import NewUserScreen from './app/containers/newUserLogin.js'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native'


export class HomeScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./discoball.png')}
        style={ [ styles.icon, { tintColor } ] }
      />
    )
  }
  render() {
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
          title="Go to the profile screen!"
        />
        <Button
          onPress={() => navigate('NewUserLogin')}
        title="go to the new user screen!"
        />
      </View>
    )
  }
}

export class ProfileScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./discoball.png')}
        style={ [ styles.icon, { tintColor } ] }
      />
    )
  }
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is the profile screen!
        </Text>
        <Text style={styles.instructions}>
          This will list ALL OF THE DISCOS
        </Text>
        <Text style={styles.instructions}>
          (it's a working title)
        </Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  icon: {
    height: 20,
    width: 20
  }
})

const MainScreen = TabNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
}, {
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    iconStyle: { height: 20, width: 20 },
    style: { backgroundColor: '#8d47bc'}
  }
})

const App = StackNavigator({
  Home: { screen: MainScreen },
  NewUserLogin: { screen: NewUserScreen }
})


AppRegistry.registerComponent('discoList', () => App)
