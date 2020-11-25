import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {ICLogo} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button, Gap, Input, Link} from '../../components/atoms';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ICLogo />
      <Text style={styles.title}>Masuk dan Mulai Berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forgot Password" fontSize={12} />
      <Gap height={40} />
      <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
      <Gap height={30} />
      <Link
        title="Create New Account"
        textAlign="center"
        fontSize={16}
        onPress={() => navigation.navigate('Register')}
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginVertical: 40,
    maxWidth: 153,
  },
});
