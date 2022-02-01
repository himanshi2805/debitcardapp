import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {
  fontSize14,
  fontSize13,
  fontWeight500,
  Colors,
  Images,
} from '@app/core-ui';
import {moderateScale} from '@app/helpers';
import {CARD_LIMIT} from '@app/constants';

enum CARD_ROW {
  TopAccount = 'TopAccount',
  WeeklyLimit = 'WeeklyLimit',
  FreezeCard = 'FreezeCard',
  GetNewCard = 'GetNewCard',
  DeactivatedCard = 'DeactivatedCard',
}

const listData = [
  {
    id: CARD_ROW.TopAccount,
    icon: Images.insight,
    title: 'Top-up account',
    detail: 'Deposit money to your account to use with card',
  },
  {
    id: CARD_ROW.WeeklyLimit,
    icon: Images.transfer2,
    title: 'Weekly spending limit',
    detail: 'Your weekly spending limit is S$ 5,000',
    hasSwitch: true,
  },
  {
    id: CARD_ROW.FreezeCard,
    icon: Images.transfer3,
    title: 'Freeze card',
    detail: 'Freeze card information',
  },
  {
    id: CARD_ROW.GetNewCard,
    icon: Images.transfer1,
    title: 'Get a new card',
    detail: 'This deactivates your current debit card',
  },
  {
    id: CARD_ROW.DeactivatedCard,
    icon: Images.transfer,
    title: 'Deactivated cards',
    detail: 'Your previously deactivated cards',
  },
];

export const ListOptions = () => {
  const navigation = useNavigation();
  const {weeklyLimit} = useSelector(state => state.user);

  const onRowPress = (item: any) => {
    // Based on item type need to perform an action
    if (item?.id === CARD_ROW.WeeklyLimit) {
      navigation.navigate(CARD_LIMIT);
    }
  };

  const getValue = (id: CARD_ROW) => {
    if (id === CARD_ROW.WeeklyLimit) {
      return (weeklyLimit && true) || false;
    }
  };

  const renderItem = ({item}: {item: any}) => {
    const {id, icon, title, detail, hasSwitch = false} = item;
    return (
      <TouchableOpacity onPress={() => onRowPress(item)}>
        <View style={styles.row}>
          <Image source={icon} style={styles.rowIcon} resizeMode={'contain'} />
          <View style={styles.detailContainer}>
            <Text style={styles.rowTitle}>{title}</Text>
            <Text style={styles.detailText}>{detail}</Text>
          </View>
          {(hasSwitch && <Switch value={getValue(id)} />) || null}
        </View>
      </TouchableOpacity>
    );
  };

  const keyExtractor = (item: any) => item.id;

  return (
    <FlatList
      data={listData}
      renderItem={renderItem}
      style={styles.container}
      keyExtractor={keyExtractor}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  detailContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  rowIcon: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
  rowTitle: {
    ...fontSize14,
    ...fontWeight500,
    color: Colors.black,
  },
  detailText: {
    ...fontSize13,
    color: Colors.black2,
    opacity: 0.4,
  },
});
