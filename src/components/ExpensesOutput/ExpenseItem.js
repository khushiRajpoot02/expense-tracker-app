import {View, Text, StyleSheet, Pressable} from 'react-native';
import {GlobalStyles} from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import { getFormatedDate } from '../../utils/data';
function ExpenseItem({id, description, amount, date}) {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('ManageExpense', {EditedexpenseId : id})  }>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={[styles.description]}>{description}</Text>
          <Text style={styles.time}>{getFormatedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={[styles.amount]}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: {width: 1, height: 1},

    backgroundColor: GlobalStyles.colors.primary500,

    marginHorizontal: 20,
    marginVertical: 10,
  },
  innerContainer: {
    flexDirection: 'column',
    margin: 10,
    color: 'white',
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'white',
  },
  time: {
    fontSize: 14,
    marginBottom: 4,
    color: 'white',
  },
  amountContainer: {
    paddingHorizontal: 14,
    paddingVertical: 4,
    backgroundColor: 'white',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
