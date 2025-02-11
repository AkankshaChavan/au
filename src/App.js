import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/footer";
import Header from "./component/header";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          {/* <Header /> */}

          <div className="h-[100vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>

          {/* <Footer /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
