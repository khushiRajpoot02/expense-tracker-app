import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useAuth} from '../store/context/AuthContext';
import {authentication} from '../firebase/config';
import {signOut} from 'firebase/auth';

function HomeScreen({navigation}) {
  // console.log("navigation", navigation);
  const {loggedInUser, setLoggedInUser} = useAuth();
  // console.log('loggedInUser', loggedInUser);

  const removeData = async key => {
    try {
      await AsyncStorage.removeItem(key);
      console.log('Data removed successfully');
    } catch (error) {
      console.error('Error removing data', error);
    }
  };

  // Usage

  const signOutUser = () => {
    signOut(authentication)
      .then(res => {
        console.log(res);
        setLoggedInUser(null);
        removeData('userId');
        navigation.replace('AuthStack');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>You have successfully learned Firebase Login.</Text>
      <TouchableOpacity onPress={signOutUser} style={styles.button}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default HomeScreen;
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#302298',
    borderRadius: 20,
    padding: 10,
    margin: 14,
    width: '78%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  signOutText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    alignSelf: 'center',
  },
});

//   const HomeScreen = () => {
//   return(
//     <Home/>
//   )
//   };

//   export default HomeScreen;
