import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICRightArrow, ILNullPhoto} from '../../../../assets';
import {colors, fonts} from '../../../../utils';

const List = ({name, type, onPress, desc, icon}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon ? icon : <Image source={ILNullPhoto} style={styles.avatarImage} />}
      <View style={styles.wrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.messageText}>{desc}</Text>
      </View>
      {type === 'next' && <ICRightArrow />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper: {
    flex: 1,
    marginLeft: 16,
  },
  avatarImage: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
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
