import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ICDoctor,
  ICDoctorActive,
  ICHospital,
  ICHospitalActive,
  ICMessage,
  ICMessageActive,
} from '../../../../assets/icons';
import {colors, fonts} from '../../../../utils';
const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <ICDoctorActive /> : <ICDoctor />;
    }

    if (title === 'Messages') {
      return active ? <ICMessageActive /> : <ICMessage />;
    }

    if (title === 'Hospitals') {
      return active ? <ICHospitalActive /> : <ICHospital />;
    }

    return <ICDoctor />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (active) => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
