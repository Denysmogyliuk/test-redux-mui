import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, News, Profile, Layout, ScrollToTop } from "./components";

const App: FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Main />} />
          <Route path="news" element={<News />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;