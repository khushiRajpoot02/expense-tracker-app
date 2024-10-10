import {View, Text} from 'react-native';
import ExpenseOutput from '../components/ExpensesOutput/ExpenseOutput';
import { useContext } from 'react';
import { GlobalStateContext } from '../store/context/context';
function AllExpense() {
  console.log('all expense');




const expensesCtx = useContext(GlobalStateContext);



  return (
    <View>
      <ExpenseOutput   expense={expensesCtx.expenses} expensePeriod="Total" />
    </View>
  );
}

export default AllExpense;
