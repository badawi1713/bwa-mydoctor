import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../../utils';

const ProfileItem = ({label, value, noBorder}) => {
  return (
    <View style={styles.container(noBorder)}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: (noBorder) => ({
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: noBorder ? 0 : 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  wrapper: {
    flex: 1,
  },
  avatarImage: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  value: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    marginTop: 6,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
