import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export const OtherTabs = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Other Tabs</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 24,
  },
});
