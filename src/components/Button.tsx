import React, {FC} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {fontWeightBold, Colors, fontSize16} from '@app/core-ui';
import {ButtonProps} from '@app/components';
import {noop} from '@app/helpers';

export const Button: FC<ButtonProps> = ({title = '', onPress = noop}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.green,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 50,
  },
  buttonTitle: {
    color: Colors.white,
    ...fontSize16,
    ...fontWeightBold,
  },
});
