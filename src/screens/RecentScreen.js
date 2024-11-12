import {View, Text} from 'react-native';
import ExpenseOutput from '../components/ExpensesOutput/ExpenseOutput';
import {GlobalStateContext} from '../store/context/context';
import {useContext, useEffect} from 'react';
import {getDateMinusDays} from '../utils/data';
import {fetchExpense} from '../utils/http';
function RecentExpense() {
  const expenseCtx = useContext(GlobalStateContext);
  useEffect(() => {
    async function getExpense() {
      const expense = await fetchExpense();
      expenseCtx.setExpense(expense);
    }
    getExpense();
  }, []);
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

// here I have to work for setExpenses
// let's work on it
// how to do this?
// I can use fetch data from firebase, but i have used stak navigation so here fetching data inside firebase will not work
// so after adding data from frontend I will use that data only from globalContext
// let's work on it
// jldi se ispe kaam kr le and start practicing DSA and react native code + theory
// meditate everyday
// do not waste time at any cost
