import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
  const { 
    error,
    loading,
    syncronized, 
    item,
  } = state;

  //ACTION CREATORS
  const onError = (error) => dispatch({ type: actionTypes.error, payload: error });
  const onSuccess = (item) => dispatch({ type: actionTypes.success, payload: item });
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });
  const onSync = () => dispatch({ type: actionTypes.syncronize });

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
        
        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 1000)
  }, [syncronized]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
    
  };

  const syncronize = () => {
    onSync()
  }

  return {
    item, 
    saveItem,
    loading,
    error,
    syncronize,
  };
}

export { useLocalStorage };

// REDUCER STUFF
const actionTypes = {
  error: 'ERROR', 
  success: 'SUCCESS',
  save: 'SAVE',
  syncronize: 'SYNCRONIZE',
};

const initialState = ({ initialValue }) => ({
  error: false,
  loading: false,
  syncronized: true,  
  item: initialValue,
});

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    syncronized: true,
    item: payload,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    syncronized: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.syncronize]: {
    ...state,
    loading: true,
    syncronized: false,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};
