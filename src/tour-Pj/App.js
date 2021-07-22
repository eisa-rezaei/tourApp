import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Tours from "./tours";
import Header from "./Header";
import "./index.css";
import Loadnig from "./loading";
import Bio from "./bio/bio";
import Home from "./home/home";
import AddTour from "./addtour/AddTour";
const url = "https://course-api.com/react-tours-project";

function App() {
  //constant part
  const [loading, setLoading] = useState(true); //loading is true
  const [tours, setTours] = useState([]); //set empty array for tpurs for default
  const [color, setColor] = useState(false);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true); //because we getting data we most do this
    try {
      //we do try and catch for fetching data to change in settings
      const response = await fetch(url); //catching url from "url" and add it in response
      const tours = await response.json(); // take data from response and add it to j.son file
      setLoading(false); //loading is completed
      setTours(tours); //we replace what we get from url and invoke it with setTour
    } catch (error) {
      setLoading(false);
      console.log("error in loading url");
    }
  };
  useEffect(() => {
    fetchTours(); //when page load first we get the data from url
  }, []); //   []  mean useEffect only one time rerender page

  //jsx part

  if (loading) {
    /*is true */ return (
      <main>
        <Loadnig tours={tours} />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no more tours left</h2>
          <div className="underline"></div>
          <button className="btn" onClick={fetchTours}>
            Reveiw
          </button>
        </div>
      </main>
    );
  }
  return (
    <Router>
      <main className={color ? `dark` : ``}>
        <Header color={() => setColor(!color)} />
        <Route path="/tours">
          <Tours tours={tours} removeTour={removeTour} color={color} />
        </Route>

        <Route path="/Bio">
          <Bio />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/addtour">
          <AddTour />
        </Route>
      </main>
    </Router>
  );
}

export default App;
