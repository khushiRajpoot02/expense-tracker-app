import {View, StyleSheet} from 'react-native';
import {useContext, useLayoutEffect} from 'react';
import {GlobalStyles} from '../constants/Colors';
import DynamicIcon from '../components/DynamicIcon';
import {GlobalStateContext} from '../store/context/context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import {storeExpense, updateData, deleteData} from '../utils/http';
import Home from '../components/Home';
function ManageExpense({route, navigation}) {
  const expenseCtx = useContext(GlobalStateContext);
  const expenseItemId = route.params?.EditedexpenseId;
  const editedExpensedata = expenseCtx.expenses.find(
    expense => expense.id === expenseItemId,
  );

  const isEdited = !!expenseItemId; // true or false
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdited ? 'Edit Expense' : 'Manage Expense',
    });
  }, [navigation, isEdited]);

  async function deleteExpense() {
    const deletdata = await deleteData(expenseItemId);
    // console.log('deletdata', JSON.stringify(deletdata));
    expenseCtx.deleteExpense(expenseItemId);
    navigation.goBack();
  }

  function cancel() {
    navigation.goBack();
  }
  async function confirmHandler(expensedata) {
    if (isEdited) {
      expenseCtx.editExpense(expenseItemId, expensedata);
      await updateData(expenseItemId, expensedata);
      // console.log("res", res)
    } else {
      const id = await storeExpense(expensedata);
      expenseCtx.addExpenses({...expensedata, id});
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancel}
        expenseItemId={expenseItemId}
        onsubmit={confirmHandler}
        defaultvalue={editedExpensedata}
      />
      {isEdited && (
        <View style={styles.editButtonContainer}>
          <DynamicIcon
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={32}
            onPress={deleteExpense}
          />
        </View>
      )}

      <Home />
    </View>
  );
}
export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
    padding: 24,
  },
  editButtonContainer: {
    marginTop: 16,
    paddingTop: 10,
    borderTopColor: GlobalStyles.colors.primary50,
    borderTopWidth: 2,
    alignItems: 'center',
  },
});
