import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILHospital1, ILNullPhoto} from '../../../../assets';
import {colors, fonts} from '../../../../utils';

const ListHospital = () => {
  return (
    <View style={styles.container}>
      <Image source={ILHospital1} style={styles.hospitalImage} />
      <View>
        <Text style={styles.name}>Rumah Sakit</Text>
        <Text style={styles.name}>Restu Ibu</Text>
        <Text style={styles.address}>
          Jl. Sukun No. 2A, Banguntapan, Bantul
        </Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  hospitalImage: {
    width: 80,
    height: 60,
    borderRadius: 10,
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    width: '90%',
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 6,
  },
});
