import axios from 'axios';

const url = 'https://bachat-khata-b91bf-default-rtdb.firebaseio.com';

export async function storeExpense(expenseData) {
  const responese = await axios.post(url + '/expenses.json', expenseData);
  const id = responese.data.name;
  return id;
}

export async function fetchExpense(CREDENTIAL) {
  console.log("CREDENTIAL", CREDENTIAL)
  const response = await axios.get(url + "/expenses.json",
    {
      params : {
         orderBy: '"userId"',
    equalTo: `"${CREDENTIAL}"`
      }
    }
    
    ).then((expenses)=>{
    // console.log("hsvdcvhdjsvcdvcdhchdvhc",expenses.data);
    return expenses
  }).catch((err)=>console.log("error", err));
  // console.log("responseData from firebas", JSON.stringify(response));
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
  // console.log('response', response);
  return expenses;
}
export function updateData(id, expenseData) {
  return axios.put(url + `/expenses/${id}.json`, expenseData);
}

export function deleteData(id) {
  const response = axios.delete(url + `/expenses/${id}.json`);
  // console.log("response",response)
  return response
}
