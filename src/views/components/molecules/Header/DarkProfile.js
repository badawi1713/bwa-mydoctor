import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ICBackArrowLight, ILNullPhoto} from '../../../../assets';
import {colors, fonts} from '../../../../utils';
import {Button} from '../../atoms';

const DarkProfile = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" onPress={onPress} icon={<ICBackArrowLight />} />
      <View style={styles.wrapper}>
        <Text style={styles.name}>dr. John Doe</Text>
        <Text style={styles.category}>Dokter Anak</Text>
      </View>
      <Image source={ILNullPhoto} style={styles.avatarImage} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
  },
  avatarImage: {
    width: 46,
    height: 46,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  category: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    marginTop: 6,
    color: colors.text.subtitle,
    textAlign: 'center',
  },
});
