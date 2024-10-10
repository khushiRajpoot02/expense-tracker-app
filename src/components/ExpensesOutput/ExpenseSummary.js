import {View, Text, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/Colors';
function ExpenseSummary({expense, expensePeriod}) {
  const totalSum = expense.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{expensePeriod}</Text>
      <Text style={styles.totalExpense}>${totalSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpenseSummary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary50,
    padding: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius : 6,
    alignItems : 'center',
  },
  period: {
    fontSize: 20,
    color: GlobalStyles.colors.primary500,
  },
  totalExpense: {
    fontSize: 20,
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
});
