import {createContext, useReducer, useContext} from 'react';

export const GlobalStateContext = createContext({
  expenses: [],
  addExpenses: ({description, amount, date}) => {},
  setExpense: expenses => {},
  deleteExpense: id => {},
  editExpense: (id, {description, amount, date}) => {},
});

// it will return the updated state
const globalStateReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      // const id = new Date().toString() + Math.random().toString();
      return [action.payload, ...state];
    case 'SET':
      const revert = action.payload.reverse();
      return revert;
    case 'DELETE':
      console.log('deleteknklnlnlnl', action.payload);
      return state.filter(expense => expense.id !== action.payload);

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
  const [expenseState, dispatch] = useReducer(globalStateReducer, []);

  function addExpenses(expenseData) {
    dispatch({type: 'ADD', payload: expenseData});
  }
  function setExpense(expenses) {
    dispatch({type: 'SET', payload: expenses});
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
    setExpense: setExpense,
    deleteExpense: deleteExpense,
    editExpense: editExpense,
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// frame mail for react.js and react native experinece
// use AI extension to cold email and ask for refral from today itself
// Complete this project ASAP
