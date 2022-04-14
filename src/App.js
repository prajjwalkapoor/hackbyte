import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/landing";
import About from "./components/pages/about";
import Blog from "./components/pages/blog";
import Post from "./components/pages/post";
import PageNotFound from "./components/pages/pageNotFound";
// import firebase from "./config/firebase";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Landing />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:post" element={<Post />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
