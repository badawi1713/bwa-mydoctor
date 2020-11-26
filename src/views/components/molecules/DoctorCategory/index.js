import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ICDokterAnak,
  ICDokterUmum,
  ICFarmasi,
  ICPsikiater,
} from '../../../../assets';
import {fonts} from '../../../../utils';
import {colors} from '../../../../utils/colors';

const DoctorCategory = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'dokter umum') {
      return <ICDokterUmum style={styles.icon} />;
    }
    if (category === 'psikiater') {
      return <ICPsikiater style={styles.icon} />;
    }
    if (category === 'dokter anak') {
      return <ICDokterAnak style={styles.icon} />;
    }
    if (category === 'farmasi') {
      return <ICFarmasi style={styles.icon} />;
    }
    return <ICDokterUmum style={styles.icon} />;
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon />
      <Text style={styles.label}>Saya Butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  icon: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
