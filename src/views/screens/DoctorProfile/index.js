import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../utils';
import {Button, Gap, Header, Profile} from '../../components';
import ProfileItem from '../../components/molecules/ProfileItem';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile
        name="dr. Otto Wyle"
        jobDescription="dokter gigi"
        gender="male"
        type="doctor"
      />
      <Gap height={26} />
      <ProfileItem label="Alumnus" value="Universitas Indonesia, 2020" />
      <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum Bandung" />
      <ProfileItem label="No. STR" value="97452612001112020" noBorder />
      <Gap height={23} />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate('Chat')}
          title="Start Consultation"
        />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  buttonContainer: {
    padding: 40,
    paddingTop: 0,
  },
});
