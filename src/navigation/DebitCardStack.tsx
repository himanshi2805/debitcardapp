import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DebitCard, WeeklyLimit} from '@app/screens';
import {DEBIT_CARD, CARD_LIMIT} from '@app/constants';

const Stack = createStackNavigator();

export const DebitCardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen
        name={DEBIT_CARD}
        component={DebitCard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={CARD_LIMIT}
        component={WeeklyLimit}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
