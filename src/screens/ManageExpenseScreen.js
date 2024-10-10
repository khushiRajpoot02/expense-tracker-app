import {View, Text, StyleSheet} from 'react-native';
import {useContext, useLayoutEffect} from 'react';
import {GlobalStyles} from '../constants/Colors';
import DynamicIcon from '../components/DynamicIcon';
import Buttons from '../components/Butotns';
import { GlobalStateContext } from '../store/context/context';


function ManageExpense({route, navigation}) {

const expenseCtx = useContext(GlobalStateContext);

  const expenseItemId = route.params?.EditedexpenseId;
  const isEdited = !!expenseItemId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdited ? 'Edit Expense' : 'Manage Expense',
    });
  }, [navigation, isEdited]);

  function deleteExpense() {
    expenseCtx.deleteExpense({
      expenseItemId
    })

    navigation.goBack();
  }
  function cancel() {

    navigation.goBack();
  }
  function confirm() {
if(isEdited){
  console.log("expenseItemId", expenseItemId)
  expenseCtx.editExpense(expenseItemId, {
    description: 'updated datatatatatatat',
    amount: 59.99,
    date: new Date('2024-5-23'),
  
})
}
else{
  expenseCtx.addExpenses({
    description: 'Some new data is being added',
    amount: 59.99,
    date: new Date('2024-5-23'),
  
})
}
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Buttons style={styles.buttonStyle} mode="flat" onPress={cancel}>
          Cancel
        </Buttons>
        <Buttons style={styles.buttonStyle} onPress={confirm}>
          {isEdited ? 'Update' : 'Add'}
        </Buttons>
      </View>

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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 100,
  },

  buttonStyle: {
    minWidth: 102,
    margin: 8,
  },
});
