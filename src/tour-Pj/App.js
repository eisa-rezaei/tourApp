import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Tours from "./tours";
import "./index.css";
import Loadnig from "./loading";
import Bio from "./bio/bio";
import Home from "./home/home";
import AddTour from "./addtour/AddTour";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log("error in loading url");
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
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
      <main>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/tours">
          <Tours tours={tours} removeTour={removeTour} />
        </Route>
        <Route path="/Bio">
          <Bio />
        </Route>

        <Route path="/addtour">
          <AddTour />
        </Route>
      </main>
    </Router>
  );
}

export default App;
