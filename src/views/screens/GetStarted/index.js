import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ICLogo} from '../../../assets/icons';
import {ILGetStarted} from '../../../assets/illustrations';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../components/atoms';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.container}>
      <View>
        <ICLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>

      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.primary[600],
    marginTop: 90,
    color: colors.white,
  },
});
