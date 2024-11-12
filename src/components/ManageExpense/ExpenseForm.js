import {View, Text, StyleSheet, Alert} from 'react-native';
import Input from './Input';
import {useState} from 'react';
import Buttons from '../Butotns';

function ExpenseForm({onCancel, expenseItemId, onsubmit, defaultvalue}) {
  const isEdited = !!expenseItemId; // true or false
  // console.log("defaultValue in Expense Form", defaultvalue.forEach((item)=>console.log(item)));
  const [inputValues, setInputValues] = useState({
    amount: defaultvalue ? defaultvalue.amount.toString() : '',
    date: defaultvalue ? defaultvalue?.date.toISOString().slice(0, 10) : '',
    description: defaultvalue ? defaultvalue?.description : '',
  });

  function inputchange(inputIdentifier, enteredValue) {
    //
    setInputValues(currentValue => {
      return {
        ...currentValue,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function submitHandler() {
    expensedata = {
      description: inputValues.description,
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
    };
    const isValidAmount = !isNaN(expensedata.amount) && expensedata.amount > 0;
    const isValiddate = expensedata.date.toString() !== 'Invalid Date';
    const isValidDescription = expensedata.description.trim().length > 0;
    console.log('isValidDescription', expensedata.description);
    if (!isValidAmount || !isValiddate || !isValidDescription) {
      Alert.alert('Invalid Input', 'Please check your input value');
      return;
    }

    onsubmit(expensedata);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.inputRowInput}
          label="Date"
          textInputConfig={{
            onChangeText: inputchange.bind(this, 'date'),
            value: inputValues.date,
            placeholder: 'YYY-MM-DD',
          }}
        />

        <Input
          style={styles.inputRowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputchange.bind(this, 'amount'),
            value: inputValues.amount,
          }}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          onChangeText: () => {},
          multiLine: true,
          //autoComplete:
          // autoCapitalize
          onChangeText: inputchange.bind(this, 'description'),
          value: inputValues.description,
        }}
      />

      <View style={styles.buttons}>
        <Buttons style={styles.buttonStyle} mode="flat" onPress={onCancel}>
          Cancel
        </Buttons>
        <Buttons style={styles.buttonStyle} onPress={submitHandler}>
          {isEdited ? 'Update' : 'Add'}
        </Buttons>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputContainer: {},

  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputRowInput: {
    flex: 1,
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
