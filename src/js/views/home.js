import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import TheRow from "../component/cardRow./theRows";
import useStore from "../views/fetch";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      {store.people.length > 0 && (
        <TheRow title='People' data={store.people} />
      )}
       {store.planets.length > 0 && (
      <TheRow title='Planets' data={store.planets} />
       )}
      {store.vehicles.length > 0 && (
      <TheRow title='Vehicles' data={store.vehicles} />
      )}
    </div>
  );
};
