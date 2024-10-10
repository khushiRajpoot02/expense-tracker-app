import {View, Text, FlatList} from 'react-native';
import ExpenseItem from './ExpenseItem';
function ExpenseList({expense}) {
  function renderExpenseItem(itemData) {
    return <ExpenseItem {...itemData.item}/>
  }

  return (
    <FlatList
      data={expense}
      keyExtractor={item => item.id}
      renderItem={renderExpenseItem}
    />
  );
}

export default ExpenseList;
