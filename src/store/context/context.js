import {createContext, useReducer, useContext} from 'react';

const DUMMY_EXPENSE = [
  {
    id: 'e200',
    description: 'Pair of shoes',
    amount: 59.99,
    date: new Date('2024-5-21'),
  },
  {
    id: 'e112',
    description: 'New Expense within 7 days',
    amount: 25.99,
    date: new Date('2024-10-08'),
  },
  {
    id: 'e11255',
    description: 'New Expense within 7 days',
    amount: 25.99,
    date: new Date('2024-10-10'), 
  },
  {
    id: 'e201',
    description: 'Pair of Slipper',
    amount: 59.99,
    date: new Date('2024-5-22'),
  },
  {
    id: 'e8',
    description: 'Pair of mcn',
    amount: 59.99,
    date: new Date('2024-5-21'),
  },
  {
    id: 'e2',
    description: 'SUn glases',
    amount: 78.99,
    date: new Date('2024-7-22'),
  },
  {
    id: 'e3',
    description: 'Slipper',
    amount: 60.0,
    date: new Date('2024-8-24'),
  },
  {
    id: 'e4',
    description: 'Shirts',
    amount: 100.99,
    date: new Date('2024-9-23'),
  },
  {
    id: 'e9',
    description: 'Coffee',
    amount: 4.99,
    date: new Date('2024-9-22'),
  },
  {
    id: 'e10',
    description: 'Movie ticket',
    amount: 12.0,
    date: new Date('2024-9-21'),
  },
  {
    id: 'e5',
    description: 'Groceries',
    amount: 45.5,
    date: new Date('2024-9-25'),
  },
];

export const GlobalStateContext = createContext({
  expenses: [],
  addExpenses: ({description, amount, date}) => {},
  deleteExpense: id => {},
  editExpense: (id, {description, amount, date}) => {},
});

// // custom hook
// export const useGlobalState = () => {
//   // created global hook for updating data globally

//   useContext(GlobalStateContext);
// };
// initial state

// const expenseState = {
//   expenses: [],
//   addExpenses: ({description, amount, date}) => {},
//   deleteExpense: d => {},
//   editExpense: (id, {description, amount, date}) => {},
// };

// it will return the updated state
const globalStateReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [...state, {...action.payload, id: id}];

    case 'DELETE':
      console.log('delete', action.payload.expenseItemId);
      return state.filter(
        expense => expense.id !== action.payload.expenseItemId,
      );

    case 'EDIT':
      console.log('action.payload.expenseItemId', action.payload.id);
      const updatableExpenseIndex = state.findIndex(
        expense => expense.id === action.payload.id,
      );

      // array asign kiaa index se associated
      const updatableExpanse = state[updatableExpenseIndex];
      console.log('updatableExpanse', updatableExpanse);
      // updateItem object bnaya , jisme data dia
      const updatebleItem = {
        updatableExpanse,
        ...action.payload.data,
      };

      const updatedexpenses = [...state];

      updatedexpenses[updatableExpenseIndex] = updatebleItem;
      // update expense
      // how to do this?
      // logic = find the expense which has to be find, then update the data of that expense
      console.log('updatedexpenses', updatedexpenses);
      return updatedexpenses;

    default:
      return state;
  }
};

// creating provider component

export const GlobalStateProvider = ({children}) => {
  const [expenseState, dispatch] = useReducer(
    globalStateReducer,
    DUMMY_EXPENSE,
  );

  function addExpenses(expenseData) {
    dispatch({type: 'ADD', payload: expenseData});
  }

  function deleteExpense(id) {
    dispatch({type: 'DELETE', payload: id});
  }
  function editExpense(id, expenseData) {
    dispatch({type: 'EDIT', payload: {data: expenseData, id: id}});
    // console.log("payload", payload);
  }

  const value = {
    expenses: expenseState,
    addExpenses: addExpenses,
    deleteExpense: deleteExpense,
    editExpense: editExpense,
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};



