import { useState } from "react";
import AppContext from "./AppContext";

function ProviderApp({ children }) {
    const [loading, setLoading] = useState(true);
    const [strepperNumber, setStrepperNumber] = useState(1);

    const values = {
        loading,
        setLoading,
        strepperNumber,
        setStrepperNumber
    
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )

}

export default ProviderApp