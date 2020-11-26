import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILHospital1} from '../../../../assets';
import {colors, fonts} from '../../../../utils';

const ListHospital = ({type, name, address}) => {
  return (
    <View style={styles.container}>
      <Image source={ILHospital1} style={styles.hospitalImage} />
      <View>
        <Text style={styles.name}>{type}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
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
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 6,
  },
});
