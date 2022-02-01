import React, {FC} from 'react';
import {Image} from 'react-native';
import {TabBarIconProps} from '@app/components';

export const TabBarIcon: FC<TabBarIconProps> = ({icon, size, color}) => {
  return (
    <Image
      resizeMode={'contain'}
      source={icon}
      style={{
        height: size,
        width: size,
        tintColor: color,
      }}
    />
  );
};
