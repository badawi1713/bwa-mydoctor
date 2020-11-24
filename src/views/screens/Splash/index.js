import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {ICLogo} from '../../../assets';
import {colors} from '../../../utils';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, []);
  // useEffect dengan array kosong berfungsi supaya useEffect hanya te-render sekali.
  return (
    <SafeAreaView style={styles.container}>
      <ICLogo />
      <Text style={styles.title}>My Doctor</Text>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  title: {
    marginTop: 20,
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 20,
    lineHeight: 27,
    color: colors.text.primary,
  },
});
