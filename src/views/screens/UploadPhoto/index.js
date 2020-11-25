import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ICAddButton} from '../../../assets/icons';
import {ILNullPhoto} from '../../../assets/illustrations';
import {colors, fonts} from '../../../utils';

import {Button, Gap, Header, Link} from '../../components';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarBorder}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <ICAddButton style={styles.addButtonIcon} />
          </View>
          <Text style={styles.name}>Dzaky Badawi</Text>
          <Text style={styles.jobDescription}>Web Developer</Text>
        </View>
        <View>
          <Button title="Upload and Continue" />
          <Gap height={30} />
          <Link title="Skip for this" textAlign="center" fontSize={16} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 64,
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
  },
  avatarBorder: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonIcon: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary[600],
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  jobDescription: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    textAlign: 'center',
  },
});
