/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
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
import {AuthProvider, useAuth} from './src/store/context/AuthContext';
import GuestStack from './src/screens/GuestStack';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './src/components/Home';
function App(): React.JSX.Element {
  const loggedInUser = useAuth();
  const [showMainScreen, setShowMainScreen] = useState(false);
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

  function AuthStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    );
  }

  const getData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      console.log('valuee', value);
      if (value !== null) {
        // if(value === loggedInUser)
        setShowMainScreen(true);
        console.log('Data retrieved successfully:', value);
      }
      return value;
    } catch (error) {
      console.error('Error retrieving data', error);
    }
  };

  // Usage
  getData('userId');

  function AppNavigator() {
    const {loggedInUser} = useAuth();
    console.log('loggedInUser', loggedInUser);
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {showMainScreen ? (
          <Stack.Screen name="ExpenseOverView" component={ExpenseOverView} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    );
  }

  return (
    <GlobalStateProvider>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
              headerTintColor: 'white',
              headerTitleAlign: 'center',
            }}
            // initialRouteName="TestScreen"
          >
            <Stack.Screen
              name="AppNavigator"
              component={AppNavigator}
              options={{headerShown: false}}
            />

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
            {/* <Stack.Screen name="Home" component={Home} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </GlobalStateProvider>
  );
}

export default App;
