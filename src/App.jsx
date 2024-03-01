import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage";
import Employee from "./Components/Employee/Employee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
