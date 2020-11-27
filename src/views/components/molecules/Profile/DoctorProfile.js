import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  ICFemale,
  ICMale,
  ICRemoveButton,
  ILNullPhoto,
} from '../../../../assets';
import {colors, fonts} from '../../../../utils';

const DoctorProfile = ({name, jobDescription, gender}) => {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={ILNullPhoto} style={styles.avatarImage} />
        {gender === 'male' ? (
          <ICMale style={styles.removeIcon} />
        ) : (
          <ICFemale style={styles.removeIcon} />
        )}
      </View>
      {name && (
        <>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.jobDescription}>{jobDescription}</Text>
        </>
      )}
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  borderProfile: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderRadius: 130 / 2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarImage: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginBottom: 2,
  },
  jobDescription: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
  removeIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
