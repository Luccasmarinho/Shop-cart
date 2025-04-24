import React, { useContext, useEffect } from 'react';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { ButtonRemove } from "./ButtonRemoveCartStyle"
import AppContext from '../../context/AppContext';

const ButtonRemoveCart = ({ id }) => {
    const { allDataLocalStorage, setAllDataLocalStorage } = useContext(AppContext);

    function handleDelete(id) {
        const filterId = allDataLocalStorage.filter((e) => e.id != id)
        localStorage.setItem("cart", JSON.stringify(filterId))
        setAllDataLocalStorage(filterId)
    }

    // function handleDelete(id) {
    //     const indice = allDataLocalStorage.findIndex((e) => e.id == id)
    //     allDataLocalStorage.splice(indice, 1)
    //     setAllDataLocalStorage(allDataLocalStorage)
    //     localStorage.setItem("cart", JSON.stringify(allDataLocalStorage))
    // }

    return (
            <ButtonRemove onClick={() => handleDelete(id)}>
                <RemoveShoppingCartIcon />
            </ButtonRemove>
    )
}

export default ButtonRemoveCart