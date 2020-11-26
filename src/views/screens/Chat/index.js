import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {ChatDialogue, ChatInput, Header} from '../../components';

const Chat = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        type="dark-profile"
        title="dr. John Doe"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Senin, 30 November 2020</Text>
        <ChatDialogue isMe />
        <ChatDialogue />
        <ChatDialogue isMe />
      </View>
      <ChatInput />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  chatDate: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
