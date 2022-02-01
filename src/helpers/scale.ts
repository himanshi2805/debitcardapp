import DeviceInfo from 'react-native-device-info';
import {s, ms, vs, mvs} from 'react-native-size-matters';

/**
 * Override react-native-size-matter's scale function
 * @param size number
 * @returns the unmodified argument if not on a table view
 * else the scaled value of the argument
 */

export const scale = (size: number): number =>
  DeviceInfo.isTablet() ? ms(size, 0.3) : s(size);

export const moderateScale = (size: number, factor: number = 0.5): number =>
  DeviceInfo.isTablet() ? ms(size, 0.3) : ms(size, factor);

export const verticalScale = (size: number): number =>
  DeviceInfo.isTablet() ? mvs(size, 0.3) : vs(size);
