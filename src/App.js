import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import News from "./components/News";
import Profile from "./components/Profile";
import Layout from "./components/Layout";
import { authenticate, checkAuthStatus, logout } from "./api/auth";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Main />} />
          <Route path="news" element={<News></News>} />
          <Route path="profile" element={<Profile></Profile>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
