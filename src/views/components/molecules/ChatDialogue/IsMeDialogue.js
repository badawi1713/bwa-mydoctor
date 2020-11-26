import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../../utils';

const IsMeDialogue = () => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContent}>
        <Text style={styles.text}>
          Ibu dokter, apakah memakan jeruk setiap hari itu buruk?
        </Text>
      </View>
      <Text style={styles.date}>4:29 AM</Text>
    </View>
  );
};

export default IsMeDialogue;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  messageContent: {
    backgroundColor: colors.cardLight,
    padding: 12,
    paddingRight: 18,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    maxWidth: '70%',
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 6,
  },
});
