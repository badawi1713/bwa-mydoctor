import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../../utils';

const Link = ({title, fontSize, textAlign, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link(fontSize, textAlign)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  link: (fontSize, textAlign) => ({
    fontSize: fontSize,
    color: colors.text.secondary,
    fontFamily: 'NunitoSans-Regular',
    textDecorationLine: 'underline',
    textAlign: textAlign,
  }),
});
