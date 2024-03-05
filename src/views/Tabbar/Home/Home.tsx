import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {useAppSelector, shallowEqualApp} from '../../../store';
import {Button, Icon, SpeedDial} from '@rneui/themed';

const Home = () => {
  const [open, setOpen] = React.useState(false);

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
      <Button title="Solid" />
      <Button title="Outline" type="outline" />
      <Button title="Clear" type="clear" />
      <Icon name="rowing" />
      <SpeedDial
        isOpen={open}
        icon={{name: 'edit', color: '#fff'}}
        openIcon={{name: 'close', color: '#fff'}}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}>
        <SpeedDial.Action
          icon={{name: 'add', color: '#fff'}}
          title="Add"
          onPress={() => console.log('Add Something')}
        />
        <SpeedDial.Action
          icon={{name: 'delete', color: '#fff'}}
          title="Delete"
          onPress={() => console.log('Delete Something')}
        />
      </SpeedDial>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
