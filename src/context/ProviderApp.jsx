import { useState } from "react";
import AppContext from "./AppContext";

function ProviderApp({ children }) {
    const [loading, setLoading] = useState(true);
    const [inputSearch, setInputSearch] = useState("");
    const [allDataLocalStorage, setAllDataLocalStorage] = useState(() => {
        return JSON.parse(localStorage.getItem("cart")) || []
    });

    const values = {
        loading,
        setLoading,
        allDataLocalStorage,
        setAllDataLocalStorage,
        inputSearch,
        setInputSearch
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )

}

export default ProviderApp