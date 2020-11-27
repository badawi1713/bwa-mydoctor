import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILNullPhoto} from '../../../../assets';
import {fonts, colors} from '../../../../utils';

const HomeProfile = ({onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={styles.container}>
      <Image source={ILNullPhoto} style={styles.avatarImage} />
      <View>
        <Text style={styles.name}>Dzaky Badawi</Text>
        <Text style={styles.jobDescription}>Web Developer</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImage: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
  jobDescription: {
    fontSize: 12,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
  },
});
