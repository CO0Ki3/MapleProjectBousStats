import React, { useContext, useEffect, useState } from "react";

export const StoreContext = React.createContext(null);

const initialStore = {
  first: "",
  list: "",
  sort: "",
  box: [],
};

export const StoreProvider = (props) => {
  const [store, setStore] = useState(initialStore);

  // console.log(store);

  return (
    <StoreContext.Provider value={[store, setStore]}>
      {props.children}
    </StoreContext.Provider>
  );
};

export const useStore = (key = undefined) => {
  const [store, setStore] = useContext(StoreContext);
  const [value, setValue] = useState();

  useEffect(() => {
    if (typeof key !== undefined) {
      setValue(store[key]);
    } else {
      setValue(store);
    }
  }, [key, store]);

  const setFoo = (v) => {
    if (typeof key !== undefined) {
      setStore({ ...store, [key]: v });
    } else {
      setStore(v);
    }
  };

  // console.log(value);

  return [value, setFoo];
};
