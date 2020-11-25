import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICBackArrow} from '../../../../assets/icons';
import {colors, fonts} from '../../../../utils';
import {Button, Gap} from '../../atoms';

const Header = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" onPress={onPress} icon={<ICBackArrow />} />

      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
  },
});
