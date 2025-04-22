import { useState } from "react";
import AppContext from "./AppContext";

function ProviderApp({ children }) {
    const [loading, setLoading] = useState(true);

    const values = {
        loading,
        setLoading,

    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )

}

export default ProviderApp