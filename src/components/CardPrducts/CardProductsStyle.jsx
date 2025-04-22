import styled from "styled-components";

export const ContainerCard = styled.section`
    background-color: #fff;
    /* height: 500px; */
    width: 280px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    border-radius: 4px;
    box-shadow: 3px 4px 5px 0px #3333332d;

`

export const AreaImg = styled.div`
    height: 260px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #807c7c8f;
    word-break: break-word;

    img {
        width: 250px;
    }
`

export const AreaTitle = styled.div`
    padding: 8px;
    /* height: 200px; */
`

export const Title = styled.div`
    p {
        font-size: 15px;
        color: #333333;
        margin-bottom: 10px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const Rating = styled.div`
    gap: 4px;
    align-items: center;
    margin-bottom: 10px;
    display: flex;

    p {
        font-size: 15px;
        color: #858383;
    }
`

export const Price = styled.div`
    h3 {
        margin-bottom: 3px;
    }

    p {
        margin-bottom: 5px;
        font-size: 15px;
        color: #333333;
    }
`