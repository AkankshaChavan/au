import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/footer";
import Header from "./component/header";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Admin from "./component/admin";
import ChUser from "./component/chUser";
import ChangePin from "./component/ChangePin";
import EditProfile from "./component/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <div className="min-h-screen relative">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/ch-user" element={<ChUser />} />
              <Route path="/change-pin" element={<ChangePin />} />
              <Route path="/edit-profile" element={<EditProfile />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
