import React, {FC} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Images, fontSize24, fontWeightBold, Colors} from '@app/core-ui';
import {moderateScale} from '@app/helpers';
import {NavigationHeaderProps} from 'components';

export const NavigationHeader: FC<NavigationHeaderProps> = ({
  hasBack = false,
  title = '',
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {(hasBack && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={Images.back}
            style={styles.leftIcon}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      )) ||
        null}
      {(title && <Text style={styles.title}>{title}</Text>) || null}
      <Image
        source={Images.logo}
        style={styles.rightIcon}
        resizeMode={'contain'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  title: {
    ...fontSize24,
    ...fontWeightBold,
    color: Colors.white,
  },
  rightIcon: {
    width: moderateScale(25),
    height: moderateScale(25),
  },
  leftIcon: {
    width: moderateScale(18),
    height: moderateScale(18),
    tintColor: Colors.grey,
    padding: 5,
  },
});
