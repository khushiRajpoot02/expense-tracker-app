import axios from 'axios';

const url = 'https://bachat-khata-b91bf-default-rtdb.firebaseio.com';

export async function storeExpense(expenseData) {
  const responese = await axios.post(url + '/expenses.json', expenseData);
  const id = responese.data.name;
  return id;
}

export async function fetchExpense() {
  const response = await axios.get(url + '/expenses.json');
  console.log("responseData from firebas", JSON.stringify(response));
  const expenses = [];

  for (const key in response.data) {
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
export function updateData(id, expenseData) {
  return axios.put(url + `/expenses/${id}.json`, expenseData);
}

export function deleteData(id) {
  return axios.delete(url + `/expenses/${id}.json`);
}

// create plan for react and react native which are the things we generally do in any organization
// so basically I have to prepare that things only and rest will be handdled
// Also I have to prepare coding (DSA)
// let's work on this
// jai mata Di please help me to do this
// iss project ko intersting bnaa and also gain confidence by doing things my own
