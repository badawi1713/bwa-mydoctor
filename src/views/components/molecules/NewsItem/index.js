import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {ILNewsItem1} from '../../../../assets';
import {colors, fonts} from '../../../../utils';

const NewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Is it safe to stay at home during corona virus?
        </Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <Image style={styles.image} source={ILNewsItem1} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: '90%',
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 4,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 10,
  },
});
