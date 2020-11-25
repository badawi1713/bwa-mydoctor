import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {colors} from '../../../utils';
import {Header} from '../../components';
import {Button, Gap, Input} from '../../components/atoms';
const Register = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        onPress={() => navigation.navigate('GetStarted')}
        title="Daftar Akun"
      />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingTop: 0,
    padding: 40,
  },
});
