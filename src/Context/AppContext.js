import { createContext, useState } from "react";
import { baseUrl } from '../baseUrl'
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

export default function AppContextProvider({ children }) {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();


    const fetchData = async (page = 1, tag = null, category) => {
        setLoading(true);

        let url = `${baseUrl}?page=${page}`
        if (tag) {
            url += `&tag=${tag}`
        }
        if (category) {
            url += `&category=${category}`
        }
        try {
            console.log(url);
            const response = await fetch(url);
            const result = await response.json();
            if(!result.posts || result.posts.length === 0){
                throw new Error("Something went wrong")
            }
            setPosts(result.posts);
            setPage(result.page);
            setTotalPages(result.totalPages)
            console.log(result);
        } catch (error) {
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);

    }

    const handlePagination = (page) => {
        navigate( { search: `?page=${page}`});
        setPage(page);
      };


    const values = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        handlePagination,
        fetchData
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )

}