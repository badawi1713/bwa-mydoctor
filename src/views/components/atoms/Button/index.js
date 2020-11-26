import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../../utils';
import SendButtonIcon from './SendButtonIcon';

const Button = ({title, type, onPress, icon, disabled}) => {
  if (type === 'icon-only') {
    return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
  }
  if (type === 'btn-icon-send') {
    return <SendButtonIcon disabled={disabled} />;
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    width: '100%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
  }),

  title: (type) => ({
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
  }),
});
