import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../../../utils';
import {ICSend, ICSendDisabled} from '../../../../assets/icons';

const SendButtonIcon = ({onPress, disabled}) => {
  return (
    <TouchableOpacity style={styles.container(disabled)} onPress={onPress}>
      {disabled ? <ICSendDisabled /> : <ICSend />}
    </TouchableOpacity>
  );
};

export default SendButtonIcon;

const styles = StyleSheet.create({
  container: (disabled) => ({
    backgroundColor: disabled ? colors.disabled : colors.tertiary,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  }),
});
