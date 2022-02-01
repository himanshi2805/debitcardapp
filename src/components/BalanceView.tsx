import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fontWeightBold, Colors, fontSize11, fontSize24} from '@app/core-ui';
import {BalanceViewProps} from '@app/components';

export const BalanceView: FC<BalanceViewProps> = ({
  amount = '',
  color,
  exStyle,
}) => {
  return (
    <>
      <View style={[styles.container, exStyle && exStyle]}>
        <View style={styles.boxContainer}>
          <Text style={styles.currencyText}>S$</Text>
        </View>
        <Text style={[styles.amountText, {color: color || Colors.white}]}>
          {amount}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxContainer: {
    paddingHorizontal: 10,
    backgroundColor: Colors.green,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amountText: {
    ...fontSize24,
    ...fontWeightBold,
  },
  currencyText: {
    ...fontSize11,
    color: Colors.white,
    ...fontWeightBold,
  },
});
