import {StyleSheet, TextStyle} from 'react-native';
import {moderateScale, isIOS} from '@app/helpers';

export const Fonts = {
  AvenirNextBold: (isIOS && 'Avenir Next Bold') || 'AvenirNext-Bold',
  AvenirNextRegular: (isIOS && 'Avenir Next Regular') || 'AvenirNext-Regular',
  AvenirNextMedium: (isIOS && 'Avenir Next Medium') || 'AvenirNext-Medium',
  SFProRegular: (isIOS && 'SFProText-Regular') || 'SFPro-Regular',
  SFProSemibold: (isIOS && 'SFProDisplay-Semibold') || 'SFPro-Semibold',
};

export const fontSize24: TextStyle = {
  fontSize: moderateScale(24, 0.3),
  fontFamily: Fonts.AvenirNextRegular,
};

export const fontSize18: TextStyle = {
  fontSize: moderateScale(18, 0.3),
  fontFamily: Fonts.AvenirNextRegular,
};

export const fontSize16: TextStyle = {
  fontSize: moderateScale(16, 0.3),
  fontFamily: Fonts.AvenirNextRegular,
};

export const fontSize14: TextStyle = {
  fontSize: moderateScale(14, 0.3),
  fontFamily: Fonts.AvenirNextRegular,
};

export const fontSize13: TextStyle = {
  fontSize: moderateScale(13, 0.3),
  fontFamily: Fonts.AvenirNextRegular,
};

export const fontSize12: TextStyle = {
  fontSize: moderateScale(12, 0.3),
  fontFamily: Fonts.AvenirNextRegular,
};

export const fontSize11: TextStyle = {
  fontSize: moderateScale(11, 0.3),
  fontFamily: Fonts.AvenirNextRegular,
};

export const fontSize10: TextStyle = {
  fontSize: moderateScale(10, 0.3),
  fontFamily: Fonts.AvenirNextRegular,
};

export const fontSize9: TextStyle = {
  fontSize: moderateScale(9, 0.3),
  fontFamily: Fonts.AvenirNextRegular,
};

export const fontSize8: TextStyle = {
  fontSize: moderateScale(8, 0.3),
  fontFamily: Fonts.AvenirNextRegular,
};

export const fontWeightMedium: TextStyle = {
  fontFamily: Fonts.AvenirNextMedium,
};

export const fontWeightRegular: TextStyle = {
  fontFamily: Fonts.AvenirNextRegular,
};

export const fontWeight500: TextStyle = {
  fontWeight: '500',
};

export const fontWeight600: TextStyle = {
  fontWeight: '600',
};

export const fontWeightBold: TextStyle = {
  fontFamily: Fonts.AvenirNextBold,
};

export const fontSFProRegular: TextStyle = {
  fontFamily: Fonts.SFProRegular,
};

export const fontSFProSemibold: TextStyle = {
  fontFamily: Fonts.SFProSemibold,
};

export const underline: TextStyle = {
  textDecorationLine: 'underline',
};

export const transformToUppercase: TextStyle = {
  textTransform: 'uppercase',
};

export const TextStyles = StyleSheet.create({
  fontSize10,
  fontSize11,
  fontSize13,
  fontSize12,
  fontSize14,
  fontSize16,
  fontSize18,
  fontSize24,
  fontSize8,
  fontSize9,
  fontWeightBold,
  transformToUppercase,
  underline,
  fontSFProRegular,
  fontSFProSemibold,
  fontWeight500,
  fontWeight600,
});
