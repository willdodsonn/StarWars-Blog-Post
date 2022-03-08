import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { GenericCard } from "../component/theCard.jsx";
import useStore from "../views/fetch";

export const Home = () => {
  const store = useStore();
  let people = store.people.map((person) => {
    return (
      <GenericCard
        imgSrc={
          "https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=800&q=80"
        }
        cardTitle={person.name}
        cardText={[
          <li>Gender: {person.gender}</li>,
          <li>Hair color: {person.hair_color}</li>,
          <li>Eye color: {person.eye_color}</li>,
        ]}
        cardHREF={store.convertURL(person.url)}
      />
    );
  });

  return (
    <div>
      <h1>Characters</h1>
      <section className="py-4 py-lg-5 container horizontal-scrollable">
        <div className="row">
          <div className="text-center mt-5">
            <div className="card-group">{people}</div>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
