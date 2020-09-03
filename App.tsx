import * as React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from 'styled-components';
import {light} from './src/theme';
import SplashScreen from './src/screens/SplashScreen';
import SignInScreen from './src/screens/SignInScreen';

function HomeScreen() {
  return (
    <View>
      <Text>Signed in!</Text>
    </View>
  );
}

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Sign In"
      component={SignInScreen}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);

export default function App() {
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(!isLoading);
    }, 750);
  }, []);
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        {isLoading ? <SplashScreen /> : <AuthStackScreen />}
      </ThemeProvider>
    </NavigationContainer>
  );
}
