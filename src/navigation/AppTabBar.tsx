import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Images, Colors} from '@app/core-ui';
import {OtherTabs} from '@app/screens';
import {HOME, DEBIT_CARD_STACK, PAYMENT, CREDIT, PROFILE} from '@app/constants';
import {DebitCardStack} from './DebitCardStack';
const Tab = createBottomTabNavigator();

// App Tabs
const TABS = [
  {
    title: HOME,
    icon: Images.home,
    screen: OtherTabs,
  },
  {
    title: DEBIT_CARD_STACK,
    icon: Images.card,
    screen: DebitCardStack,
  },
  {
    title: PAYMENT,
    icon: Images.payments,
    screen: OtherTabs,
  },
  {
    title: CREDIT,
    icon: Images.credit,
    screen: OtherTabs,
  },
  {
    title: PROFILE,
    icon: Images.account,
    screen: OtherTabs,
  },
];

export const AppTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={DEBIT_CARD_STACK}
      screenOptions={{
        headerShown: false,
      }}>
      {TABS.map(tab => {
        return (
          <Tab.Screen
            key={tab.title}
            name={tab.title}
            component={tab.screen}
            options={{
              tabBarLabelStyle: {
                fontSize: 9,
              },
              tabBarActiveTintColor: Colors.green,
              tabBarInactiveTintColor: Colors.grey,
              tabBarIcon: ({color, size}) => (
                <Image
                  resizeMode={'contain'}
                  source={tab.icon}
                  style={{
                    height: size,
                    width: size,
                    tintColor: color,
                  }}
                />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};
