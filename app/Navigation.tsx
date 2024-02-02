import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavIcons} from './icons';
import {COLORS} from './RootStyles';
import Details from './screens/Details';
import {TRootStackParamList} from './types';
import CartContext from './context/CartContext';
import Payment from './screens/Payment';

const Stack = createNativeStackNavigator<TRootStackParamList>();
const Bottom = createBottomTabNavigator();

export function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Stack" component={BottomNavigation} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerShown: true,
          headerTitleStyle: {
            color: COLORS.white,
          },
          headerStyle: {
            backgroundColor: COLORS.home,
          },
          headerTintColor: COLORS.white,
        }}
      />
    </Stack.Navigator>
  );
}

export function BottomNavigation() {
  const {cart} = React.useContext(CartContext);
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.home,
          borderTopWidth: 0,
          paddingVertical: 10,
          height: 70,
        },
        tabBarActiveTintColor: COLORS.brown,
        tabBarInactiveTintColor: COLORS.gray600,
      }}>
      {NavIcons.map((item, index) => {
        return (
          <Bottom.Screen
            key={index}
            name={item.name}
            component={item.screen}
            options={{
              tabBarIcon: ({color}) => item.icon({color}),
              tabBarBadge:
                cart.length > 0 && item.name === 'Cart'
                  ? cart.length
                  : undefined,
            }}
          />
        );
      })}
    </Bottom.Navigator>
  );
}
