import React, { useContext, useState } from 'react'
import { Container, MinusBtn, PlusBtn } from "./StrepperNumberStyle"

const StrepperNumber = () => {
    const [strepperNumber, setStrepperNumber] = useState(1);


    function handleStrepperNumber(value) {
        value == "increment" ? setStrepperNumber((prev) => prev + 1) : setStrepperNumber((prev) => prev - 1)
    }

    return (
        <Container>
            <MinusBtn
                onClick={() => handleStrepperNumber("decrement")}
                disabled={strepperNumber == 1 ? true : false}>
                -
            </MinusBtn>
            <p>{strepperNumber}</p>
            <PlusBtn
                onClick={() => handleStrepperNumber("increment")}>
                +
            </PlusBtn>
        </Container>
    )
}

export default StrepperNumber