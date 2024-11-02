import {View, Text} from 'react-native';
import ExpenseOutput from '../components/ExpensesOutput/ExpenseOutput';
import {GlobalStateContext} from '../store/context/context';
import {useContext} from 'react';
import {getDateMinusDays} from '../utils/data';
function RecentExpense() {
  const expenseCtx = useContext(GlobalStateContext);

  const recentExpenses = expenseCtx.expenses.filter(expense => {
    const toDay = new Date();
    const date7DaysAgo = getDateMinusDays(toDay, 7);
    const expenseDate = new Date(expense.date); // Convert to Date object if necessary

    return expenseDate > date7DaysAgo;
  });
  return (
    <View>
      <ExpenseOutput expense={recentExpenses} expensePeriod="Last 7 days" />
    </View>
  );
}
export default RecentExpense;
