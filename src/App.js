import { useContext, useEffect } from "react";
import "./App.css"
import { AppContext } from "./Context/AppContext";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import CategoryPage from "./Pages/CategoryPage";
import TagPage from "./Pages/TagPage";
import BlogPage from "./Pages/BlogPage";

export default function App() {

  const { fetchData } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    
    const page  = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replace("-", " ");
      console.log("calling from the tag url")
      fetchData(Number(page),tag);
    }else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replace("-", " ")
      console.log("calling from the category url")
      fetchData(Number(page), null, category);
    }else{
      fetchData(Number(page));
    }

  }, [location.pathname, location.search])

  return (
    <div>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/tags/:tag' element={<TagPage/>} />
        <Route path='/categories/:category' element={<CategoryPage/>} />
        <Route path='/blog/:blogId' element={<BlogPage/>} />

      </Routes>
    </div>
  );
}
