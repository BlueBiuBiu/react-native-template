import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import React from 'react';

import {
  createBottomTabNavigator,
  BottomTabBarProps,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';

import Home from './Home/Home';
import Mine from './Mine/Mine';
import Logo from '../../assets/img/logo.png';

const Tab = createBottomTabNavigator();

// 自定义tabbar
const MyTabBar = ({state, descriptors}: BottomTabBarProps) => {
  const useNavigate = useNavigation<BottomTabNavigationProp<any>>();

  return (
    <View style={styles.tabBarLayout}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={route.key}
            style={styles.item}
            onPress={() => {
              useNavigate.navigate(route.name);
            }}>
            <View style={styles.tabbar}>
              <Image
                style={[
                  styles.icon,
                  isFocused ? styles.imgFocus : styles.imgNormal,
                ]}
                source={Logo}
              />
              <Text style={isFocused ? styles.txtFocus : styles.normal}>
                {options.title}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Tabbar = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '首页',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Mine"
        component={Mine}
        options={{title: '我的', headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Tabbar;

const styles = StyleSheet.create({
  tabBarLayout: {
    width: '100%',
    height: 52,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabbar: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  txtFocus: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#076bb0',
  },
  normal: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#333',
  },
  icon: {
    width: 20,
    height: 20,
  },
  imgFocus: {
    backgroundColor: '#076bb0',
  },
  imgNormal: {
    backgroundColor: '#333',
  },
});
