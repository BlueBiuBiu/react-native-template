/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';

import {Provider} from 'react-redux';
import store from './src/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {ThemeProvider, createTheme} from '@rneui/themed';

import Login from './src/views/Login/Login';
import Tabbar from './src/views/Tabbar/Tabbar';

// 定制主题
const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'light',
});

enableScreens();
const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <SafeAreaProvider style={styles.root}>
          <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Login"
              screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
              }}>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Tabbar"
                component={Tabbar}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
});

export default App;
