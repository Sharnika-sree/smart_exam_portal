import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Admin from "./pages/Admin";
import Student from "./pages/Student";
import Examiner from "./pages/Examiner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/student" element={<Student />} />
      <Route path="/examiner" element={<Examiner />} />
    </Routes>
  );
}

export default App;
