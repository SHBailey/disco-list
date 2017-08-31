import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'


export class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home Disco List!',
    showIcon: true,
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
         Hi Morty!
        </Text>
        <Text style={styles.instructions}>
          Welcome to Disco list!
        </Text>
        <Text style={styles.instructions}>
          (it's a working title)
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('Profile')}
          title="Go to the profile screen!"
        />
      </View>
    )
  }
}

export class ProfileScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./discoball.png')}
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
})

const App = TabNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
})

AppRegistry.registerComponent('discoList', () => App)
