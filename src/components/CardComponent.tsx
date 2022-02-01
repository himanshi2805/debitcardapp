import React, {FC, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  Images,
  fontSize18,
  fontWeightBold,
  Colors,
  fontSize14,
  fontWeight600,
  fontSize12,
} from '@app/core-ui';
import {formateCardNumber, moderateScale} from '@app/helpers';
import {CardComponentProps} from '@app/components';

export const CardComponent: FC<CardComponentProps> = ({cardData}) => {
  const [detailVisible, setDetailVisible] = useState(false);
  const {cardNumber, cvv, expDate} = cardData;
  const onToggle = () => {
    setDetailVisible(!detailVisible);
  };

  const renderToggleDetail = () => {
    return (
      <TouchableOpacity
        style={styles.toggleContainer}
        onPress={onToggle}
        activeOpacity={0.9}>
        <Image
          source={Images.eye}
          style={styles.eyeIcon}
          resizeMode={'contain'}
        />
        <Text style={styles.showLabel}>
          {(detailVisible && 'Hide card number') || 'Show card number'}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {renderToggleDetail()}
      <View style={styles.container}>
        <Image
          source={Images.aspireLogo}
          style={styles.logo}
          resizeMode={'contain'}
        />
        <Text style={styles.nameText}>Mark Henry</Text>
        <Text style={styles.cardNumber}>
          {formateCardNumber(cardNumber, detailVisible)}
        </Text>
        <View style={styles.innerContainer}>
          <Text style={styles.detailText}>`Thru: ${expDate}`</Text>
          <Text style={[styles.detailText, styles.space]}>{`CVV: ${
            (detailVisible && cvv) || '***'
          }`}</Text>
        </View>
        <Image
          source={Images.visa}
          style={styles.visaIcon}
          resizeMode={'contain'}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    top: -25,
    padding: 20,
  },
  detailText: {
    ...fontSize12,
    color: Colors.white,
    ...fontWeight600,
  },
  cardNumber: {
    letterSpacing: 3,
    ...fontSize14,
    color: Colors.white,
    ...fontWeight600,
  },
  toggleContainer: {
    position: 'absolute',
    right: 20,
    top: -55,
    height: 70,
    backgroundColor: Colors.white,
    borderRadius: 5,
    flexDirection: 'row',
    paddingTop: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  eyeIcon: {
    width: moderateScale(20),
    height: moderateScale(17),
  },
  showLabel: {
    ...fontSize12,
    color: Colors.green,
    ...fontWeight600,
    marginLeft: 3,
  },
  logo: {
    width: moderateScale(60),
    height: moderateScale(35),
    alignSelf: 'flex-end',
  },
  nameText: {
    ...fontSize18,
    ...fontWeightBold,
    color: Colors.white,
    marginVertical: moderateScale(12),
  },
  innerContainer: {
    flexDirection: 'row',
    marginTop: moderateScale(12),
  },
  visaIcon: {
    width: moderateScale(50),
    height: moderateScale(25),
    alignSelf: 'flex-end',
  },
  space: {
    marginLeft: 30,
  },
});
