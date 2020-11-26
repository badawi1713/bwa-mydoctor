import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICBackArrow, ICBackArrowLight} from '../../../../assets/icons';
import {colors, fonts} from '../../../../utils';
import {Button, Gap} from '../../atoms';
import DarkProfile from './DarkProfile';

const Header = ({title, onPress, type}) => {
  if (type === 'dark-profile') {
    return <DarkProfile onPress={onPress} />;
  }
  return (
    <View style={styles.container(type)}>
      {type === 'dark' ? (
        <Button
          type="icon-only"
          onPress={onPress}
          icon={<ICBackArrowLight />}
        />
      ) : (
        <Button type="icon-only" onPress={onPress} icon={<ICBackArrow />} />
      )}
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: (type) => ({
    paddingVertical: 30,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  text: (type) => ({
    textAlign: 'center',
    flex: 1,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: type === 'dark' ? colors.white : colors.text.primary,
  }),
});
