import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { HomePage } from "./routes/HomePage";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>}>
         
          </Route>
          <Route path="/hotel-details/:id" element={ <>details</>}>
         
          </Route>
          <Route path="/confirmation" element={<>confirmation</>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}