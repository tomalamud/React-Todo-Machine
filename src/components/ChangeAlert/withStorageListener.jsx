import React from "react";

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);
    React.useEffect(()=> {
      const onChange = (change) => {
        if (change.key === 'TODOS_V1') {
          console.log('Cambios en ' + change.key);
          setStorageChange(true);
        }
      }
      window.addEventListener('storage', onChange);
    }, [storageChange])

    const toggleShow = () => {
      props.syncronize()
      setStorageChange(false);
    }

    return (
      <WrappedComponent 
        show={storageChange}
        toggleShow={toggleShow}
      />
    )
  }
}

export { withStorageListener };