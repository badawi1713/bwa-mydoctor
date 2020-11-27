import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';
import {Header, List} from '../../components';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <List
        name="dr. Pico DeGayo"
        desc="Male"
        onPress={() => navigation.navigate('Chat')}
        type="next"
      />
      <List
        name="dr. Eliza Salt"
        desc="Female"
        onPress={() => navigation.navigate('Chat')}
        type="next"
      />
      <List
        name="dr. John  Doe"
        desc="Male"
        onPress={() => navigation.navigate('Chat')}
        type="next"
      />
      <List
        name="dr. Erica Matthews"
        desc="Female"
        onPress={() => navigation.navigate('Chat')}
        type="next"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
