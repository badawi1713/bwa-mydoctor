import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';
import {Button, Gap, Header, Input, Profile} from '../../components';

const UpdateProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Update Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile />
          <Gap height={26} />

          <Input label="Full Name" />
          <Gap height={24} />
          <Input label="Job" />
          <Gap height={24} />
          <Input label="Email" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={40} />
          <Button title="Save Profile" />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
