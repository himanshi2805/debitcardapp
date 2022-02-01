import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  Colors,
  fontSize24,
  fontWeightBold,
  Images,
  fontSize12,
  fontWeight600,
} from '@app/core-ui';
import {height, moderateScale, width} from '@app/helpers';
import {updateWeeklyLimit} from '@app/redux';
import {NavigationHeader, BalanceView, Button} from '@app/components';

const LIMIT_AMOUNT: string[] = ['5,000', '10,000', '20,000'];

export const WeeklyLimit = () => {
  const dispatch = useDispatch();
  const {weeklyLimit} = useSelector(state => state.user);
  const [selectedAmount, setSelectedAmount] = useState<string>(
    weeklyLimit || '',
  );

  const onSave = () => {
    dispatch(updateWeeklyLimit(selectedAmount));
  };

  const renderCardLimit = () => {
    return (
      <View style={styles.row}>
        <Image
          source={Images.pickupCar}
          style={styles.icon}
          resizeMode={'contain'}
        />
        <Text style={styles.label}>Set a weekly debit card spending limit</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavigationHeader hasBack />
      <Text style={styles.title}>Spending limit</Text>
      <View style={styles.container} />
      <View style={styles.bottomView}>
        {renderCardLimit()}
        <BalanceView color={Colors.black} amount={selectedAmount} />
        <Text style={styles.infoText}>
          Here weekly means the last 7 days - not the calendar week
        </Text>
        <View style={styles.outerView}>
          {LIMIT_AMOUNT.map((obj: string) => {
            return (
              <TouchableOpacity
                key={obj}
                style={styles.amountBox}
                onPress={() => setSelectedAmount(obj)}>
                <Text style={styles.amountText}>{`S$ ${obj}`}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        {(selectedAmount && <Button title={'Save'} onPress={onSave} />) || null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
  },
  title: {
    ...fontSize24,
    ...fontWeightBold,
    color: Colors.white,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    color: Colors.black,
    flex: 1,
    marginLeft: 10,
    ...fontSize12,
  },
  bottomView: {
    height: height - moderateScale(250),
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: width,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  icon: {
    width: moderateScale(18),
    height: moderateScale(18),
    padding: 5,
    tintColor: Colors.blue,
  },
  infoText: {
    color: Colors.black2,
    ...fontSize12,
    opacity: 0.5,
    marginTop: 20,
    marginBottom: 30,
  },
  amountText: {
    color: Colors.green,
    ...fontSize12,
    ...fontWeight600,
  },
  amountBox: {
    padding: 20,
  },
  outerView: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-evenly',
    flex: 1,
  },
});
