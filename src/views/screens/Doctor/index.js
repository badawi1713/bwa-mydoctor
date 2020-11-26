import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {JSONCategoryDoctor} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
const Doctor = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <View style={styles.wrapperSection}>
          <Gap height={30} />
          <HomeProfile />
          <Text style={styles.welcomeText}>
            Mau konsultasi dengan siapa hari ini?
          </Text>

          <View style={styles.scrollContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={16} />
                {JSONCategoryDoctor.data.map((item, index) => (
                  <DoctorCategory
                    key={index}
                    category={item.category}
                    onPress={() => navigation.navigate('ChooseDoctor')}
                  />
                ))}
                <Gap width={6} />
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.wrapperSection}>
          <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
          <RatedDoctor />
          <RatedDoctor />
          <RatedDoctor />
          <Text style={styles.sectionLabel}>Good News</Text>
        </View>

        <NewsItem />
        <NewsItem />
        <NewsItem />
        <Gap height={30} />
      </ScrollView>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: 210,
    marginTop: 30,
    marginBottom: 16,
  },
  scrollContainer: {
    marginHorizontal: -16,
  },
  category: {
    flexDirection: 'row',
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
