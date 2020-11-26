import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';
import {Header, ListDoctor} from '../../components';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <ListDoctor onPress={() => navigation.navigate('Chat')} type="next" />
      <ListDoctor onPress={() => navigation.navigate('Chat')} type="next" />
      <ListDoctor onPress={() => navigation.navigate('Chat')} type="next" />
      <ListDoctor onPress={() => navigation.navigate('Chat')} type="next" />
      <ListDoctor onPress={() => navigation.navigate('Chat')} type="next" />
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
