import {
  TabNavigator,
  StackNavigator
} from 'react-navigation'
import NewUserScreen from './app/containers/newUserLogin.js'
import ProfileScreen from './app/containers/ProfileScreen.js'
import HomeScreen from './app/containers/HomeScreen.js'
import { AppRegistry } from 'react-native'

const MainScreen = TabNavigator({
  Home: {
    screen: HomeScreen
  },
  Profile: {
    screen: ProfileScreen
  }
}, {
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    iconStyle: {
      height: 20,
      width: 20
    },
    style: {
      backgroundColor: '#8d47bc'
    }
  }
})

const App = StackNavigator({
  Home: {
    screen: MainScreen
  },
  NewUserLogin: {
    screen: NewUserScreen
  }
})

AppRegistry.registerComponent('discoList', () => App)
