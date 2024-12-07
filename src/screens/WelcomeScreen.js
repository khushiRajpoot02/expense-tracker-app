import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {Icon} from 'react-native-vector-icons/Icon';

function handlecartpress() {
  console.log('pressed');
}
// counter set krna hai, jisse show krna hai on top of cart
const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity style={styles.cart} onPress={handlecartpress}>
        <Text style={styles.cartText}>This is cart</Text>
      </TouchableOpacity> */}

      <Text style={styles.title}>Welcome to Firebase : )</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  cart: {
    padding: 20,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 20,
    backgroundColor: '#cccc',
  },
  cartText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    width: '90%',
    paddingVertical: 15,
    marginHorizontal: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
