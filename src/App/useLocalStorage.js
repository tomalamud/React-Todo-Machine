import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  const [syncronized, setSyncronized] = React.useState(true);

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
        setError(error);
      }
    }, 1000)
  }, [syncronized]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
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

export { useLocalStorage };