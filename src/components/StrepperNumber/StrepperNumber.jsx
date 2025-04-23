import React, { useContext, useEffect, useState } from 'react'
import { Container, MinusBtn, PlusBtn } from "./StrepperNumberStyle"
import AppContext from '../../context/AppContext';

const StrepperNumber = ({ saveStrepper, id }) => {
    const [strepperNumber, setStrepperNumber] = useState(1);
    const { allDataLocalStorage, setAllDataLocalStorage } = useContext(AppContext);
    const indice = allDataLocalStorage.findIndex((e) => e.id == id)


    function handleStrepperNumber(type) {
        if (type == "increment") {
            setStrepperNumber((prev) => prev + 1)
            allDataLocalStorage[indice].quantity += 1
            setAllDataLocalStorage(allDataLocalStorage)
            localStorage.setItem("cart", JSON.stringify(allDataLocalStorage))
        } else {
            setStrepperNumber((prev) => prev - 1)
            allDataLocalStorage[indice].quantity -= 1
            setAllDataLocalStorage(allDataLocalStorage)
            localStorage.setItem("cart", JSON.stringify(allDataLocalStorage))
        }

        // value == "increment" ? setStrepperNumber((prev) => prev + 1) : setStrepperNumber((prev) => prev - 1)
    }

    useEffect(() => {
        saveStrepper(strepperNumber)
    }, [strepperNumber])

    return (
        <Container>
            <MinusBtn
                onClick={() => handleStrepperNumber("decrement")}
                disabled={allDataLocalStorage[indice].quantity == 1 ? true : false}>
                -
            </MinusBtn>
            <p>{allDataLocalStorage[indice].quantity}</p>
            <PlusBtn
                onClick={() => handleStrepperNumber("increment")}>
                +
            </PlusBtn>
        </Container>
    )
}

export default StrepperNumber