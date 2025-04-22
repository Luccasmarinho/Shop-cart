import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    
    p {
        background-color: #E6E6E6;
        width: 25px;
        text-align: center;
    }

    button {
        width: 30px;
        background-color: #E6E6E6;
        outline: none;
        border: 1px solid #05050511;
        cursor: pointer;
    }

    & button:hover {
        background-color: #c4c0c0ce;
        transition: .2s;
    }

    & button:active {
        background-color: #00000071;
    }
`

export const PlusBtn = styled.button`
       border-radius: 0 10px 10px 0;
`

export const MinusBtn = styled.button`
    border-radius: 10px 0 0 10px;

`