import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILHospitalBackground} from '../../../assets';
import {fonts, colors} from '../../../utils';
import {ListHospital} from '../../components/molecules';

const Hospital = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={ILHospitalBackground}
        style={styles.imageBackground}>
        <Text style={styles.title}>Nearby Hospital</Text>
        <Text style={styles.hospitalCount}>3</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital />
        <ListHospital />
        <ListHospital />
      </View>
    </View>
  );
};

export default Hospital;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
  imageBackground: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  hospitalCount: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
});
