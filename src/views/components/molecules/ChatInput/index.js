import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../../utils';
import {Button} from '../../atoms';

const ChatInput = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.chatInput}
        placeholder="Tulis pesan untuk dr. John Doe"
      />
      <Button type="btn-icon-send" title="send" />
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chatInput: {
    backgroundColor: colors.disabled,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    maxHeight: 45,
    fontSize: 14,
    fontFamily: fonts.normal,
  },
});
