/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllExpense from './src/screens/AllExpenseScreen';
import RecentExpense from './src/screens/RecentScreen';
import DynamicIcon from './src/components/DynamicIcon';
import ManageExpense from './src/screens/ManageExpenseScreen';
import {GlobalStyles} from './src/constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GlobalStateProvider} from './src/store/context/context';
function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function ExpenseOverView() {
    // @ts-ignore

    return (
      <Tab.Navigator
        screenOptions={({navigation}) => ({
          headerStyle: {backgroundColor: GlobalStyles.colors.primary500},

          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: GlobalStyles.colors.accent500,
          headerTintColor: 'white',
          tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
          headerRight: () => {
            return (
              <DynamicIcon
                icon="plus"
                color="white"
                size={24}
                onPress={() => navigation.navigate('ManageExpense')}
              />
            );
          },
          headerTitleAlign: 'center',
        })}>
        <Tab.Screen
          name="All Expense"
          component={AllExpense}
          options={{
            tabBarLabel: 'All Expense',
            title: 'All Expense',

            tabBarIcon: ({focused, color, size}) => {
              let Iconname;

              Iconname = focused ? 'star' : 'star-o';

              return <Icon name={Iconname} color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Recent Expense"
          component={RecentExpense}
          options={{
            tabBarLabel: 'Recent Expense',
            title: 'Recent Expense',

            tabBarIcon: ({focused, color, size}) => {
              let Iconname;

              Iconname = focused ? 'hourglass' : 'hourglass-o';

              return <Icon name={Iconname} color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <GlobalStateProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="ExpenseOverView"
            component={ExpenseOverView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{
              presentation: 'modal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalStateProvider>
  );
}

export default App;


// practice coding questions in react-native so that if they tell me to do any program, I should be able to do this(Mainly focus on js part for coding using
// let's practice these also


// map, reducer, filter, indexOf, FlstList 
// redux
// Navigation
// Hooks (useState, useMemo, Dynamic form, useeffect and so on)
// I have 3 days left 
// make everyday worthit so that I will not be having regrets
// Jai mata Di 
// let's work on thissssss


// itnaa sara aaj kr leti hu to accha khasa practice ho jayegii
// ok? yes let's learn and work for this
