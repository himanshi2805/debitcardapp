import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {fontSize14, Colors} from '@app/core-ui';
import {height, moderateScale, width} from '@app/helpers';
import {NavigationHeader, CardComponent, BalanceView} from '@app/components';
import {ListOptions} from './ListOptions';

export const DebitCard = () => {
  const {userCard, availableBalance} = useSelector(state => state.user);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationHeader title={'Debit card'} />
      <Text style={styles.label}>Available balance</Text>
      <BalanceView exStyle={styles.balanceView} amount={availableBalance} />
      <View style={styles.container} />
      <View style={styles.bottomView}>
        <CardComponent cardData={userCard} />
        <ListOptions />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
  },
  text: {
    fontSize: 24,
  },
  bottomView: {
    height: height - moderateScale(290),
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: width,
  },
  label: {
    ...fontSize14,
    color: Colors.white,
    paddingHorizontal: 20,
  },
  balanceView: {
    paddingHorizontal: 20,
  },
});
