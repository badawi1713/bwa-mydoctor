import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILNullPhoto} from '../../../../assets';
import {colors, fonts} from '../../../../utils';

const ListDoctor = () => {
  return (
    <View style={styles.container}>
      <Image source={ILNullPhoto} style={styles.avatarImage} />
      <View>
        <Text style={styles.name}>dr. John Doe</Text>
        <Text style={styles.messageText}>
          Yes you can call me on Saturday night...
        </Text>
      </View>
    </View>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  avatarImage: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  messageText: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
