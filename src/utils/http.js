import axios from 'axios';

const url = 'https://bachat-khata-b91bf-default-rtdb.firebaseio.com';

export async function storeExpense(expenseData) {
   const responese =  await  axios.post(url + '/expenses.json', expenseData);

   const id = responese.data.name;
   return id;
}

export async function fetchExpense() {
  const response = await axios.get(url + '/expenses.json');
  const expenses = [];

  for (const key in response) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  console.log('response', response);

  return expenses;

}
