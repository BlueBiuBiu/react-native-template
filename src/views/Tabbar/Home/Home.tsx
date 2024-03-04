import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {useAppSelector, shallowEqualApp} from '../../../store';

const Home = () => {
  const {userInfo} = useAppSelector(
    state => ({
      userInfo: state.userInfo.userInfo,
    }),
    shallowEqualApp,
  );

  return (
    <View>
      <Text>{userInfo.phone}</Text>
      <Text>{userInfo.password}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
