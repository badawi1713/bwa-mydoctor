import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICHelp, ICLanguage, ICStarOutline, ICUser} from '../../../assets';
import {colors} from '../../../utils';
import {Gap, Header, List, Profile} from '../../components';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile name="Dzaky Badawi" jobDescription="Web Developer" />

      <Gap height={14} />
      <List
        name="Edit Profile"
        type="next"
        desc="Last Updated Yesterday"
        icon={<ICUser />}
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Language"
        type="next"
        desc="Last Updated Yesterday"
        icon={<ICLanguage />}
      />
      <List
        name="Rate Us"
        type="next"
        desc="Last Updated Yesterday"
        icon={<ICStarOutline />}
      />
      <List
        name="Help"
        type="next"
        desc="Last Updated Yesterday"
        icon={<ICHelp />}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
