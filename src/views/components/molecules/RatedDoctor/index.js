import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ICStar, ILNullPhoto} from '../../../../assets';
import {colors, fonts} from '../../../../utils';

const RatedDoctor = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatarImage} source={ILNullPhoto} />
      <View>
        <Text style={styles.name}>dr. Frida Kahlo</Text>
        <Text style={styles.category}>Dokter Anak</Text>
      </View>
      <View style={styles.ratingGroup}>
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
      </View>
    </View>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarImage: {
    width: 50,
    height: 50,
    marginRight: 12,
    borderRadius: 50 / 2,
  },
  ratingGroup: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 2,
  },
});
