import {View, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/Colors';

import ExpenseList from '../ExpensesOutput/ExpenseList';
import ExpenseSummary from '../ExpensesOutput/ExpenseSummary';

function ExpenseOutput({expense, expensePeriod}) {
  return (
    <View style={styles.container}>
    <ExpenseSummary expense={expense} expensePeriod={expensePeriod}/>
    <ExpenseList expense={expense}/>
    </View>
  );
}

export default ExpenseOutput;

const styles = StyleSheet.create({
  container: {
    // flex : 1,
    padding : 24,
    height : '100%',
    backgroundColor: GlobalStyles.colors.primary700,
  
  },
  expenseSmry: {
 
  },
});
