import React from "react";
import Tour from "./tour";
const Tours = ({ tours, removeTour, color }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours [{tours.length}]</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          //always when use map method we most use return
          return (
            <Tour
              key={tour.id}
              {...tour}
              removeTour={removeTour}
              color={color}
            ></Tour>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
