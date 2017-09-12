import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native'
export class ProfileScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./discoball.png')}
        style={[ styles.icon, { tintColor } ]}
      />
    )
  }
  render () {
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
          title='Go back home'
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
