import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';
import List from '../../components/molecules/List';

const Message = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <ScrollView>
          <List
            onPress={() => navigation.navigate('Chat')}
            name="dr. Carlos Doe"
            desc="Ofcourse dude anytime..."
          />
          <List
            onPress={() => navigation.navigate('Chat')}
            name="dr. John Reed"
            desc="Nah it's fine"
          />
          <List
            onPress={() => navigation.navigate('Chat')}
            name="dr. Nina Cooper"
            desc="Tomorrow right?"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Message;

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
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
