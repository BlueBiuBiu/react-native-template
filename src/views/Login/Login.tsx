import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useAppDispatch} from '../../store';

import {fetchUserInfo} from '../../store/modules/userInfo';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigation<StackNavigationProp<any>>();

  return (
    <View>
      <Text>Login</Text>
      <Button
        title="登录"
        onPress={() => {
          dispatch(
            fetchUserInfo({
              phone: '123456',
              password: 'skyblue',
            }),
          );
          navigate.push('Tabbar');
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
