import {View, StyleSheet} from 'react-native';
import {useContext, useLayoutEffect} from 'react';
import {GlobalStyles} from '../constants/Colors';
import DynamicIcon from '../components/DynamicIcon';
import {GlobalStateContext} from '../store/context/context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';

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

  function deleteExpense() {
    expenseCtx.deleteExpense({
      expenseItemId,
    });
    navigation.goBack();
  }
  function cancel() {
    navigation.goBack();
  }
  function confirmHandler(expensedata) {
    if (isEdited) {
      expenseCtx.editExpense(expenseItemId, expensedata);
    } else {
      expenseCtx.addExpenses(expensedata);
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

// with focus kaam karte jaaa, ho jayegaaa
// vibe aa rhi hai ki ho jayegaaa
// do your best , and then will see kyaa hotaa hai
// do not waste your time and energy
// let's crack this interview and get 65k to 70k inhand salary
// form submission
//aaj mai itani baate nahi krungi will publish my app today so that It can be published till monday or tuesday
// mata rani please help karnaa
// muje job isse aachi mil jaaye

// data persist karnaa sikho
// so I have to cover all these points and work for that
// let's do this
// after completing react native course I have to make expense app as my major project and practice everyday concepts and DSa
// Involve in community and and showcase your skills
// let's build this
// Jai Mata Di

// I have to publish this app today itself
// before going to bed
// complete this ftaa faaatt
// yeaaaaaaaahhhhhh
