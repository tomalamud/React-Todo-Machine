import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, setState] = React.useReducer(reducer, initialState);
  const { 
    error,
    loading,
    syncronized, 
    item,
  } = state;
  // const [error, setError] = React.useState(false);
  // const [loading, setLoading] = React.useState(true);
  // const [item, setItem] = React.useState(initialValue);
  // const [syncronized, setSyncronized] = React.useState(true);

  //ACTION CREATORS
  const onError = (error) => dispatch({ type: actionTypes.error, payload: error });

  React.useEffect(()=>{
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem)
        setLoading(false);
        setSyncronized(true);
      } catch (error) {
        onError(error);
      }
    }, 1000)
  }, [syncronized]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      onError(error);
    }
    
  };

  const syncronize = () => {
    setLoading(true);
    setSyncronized(false);
  }

  return {
    item, 
    saveItem,
    loading,
    error,
    syncronize,
  };
}

const initialState = ({ initialValue }) => ({
  error: false,
  loading: false,
  syncronized,  
  item,
});

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
});

const actionTypes = {
  error: 'ERROR',
};

const reducer = (state, action) => {
  reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };