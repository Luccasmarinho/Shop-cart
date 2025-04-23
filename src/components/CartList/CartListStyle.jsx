import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;
    background-color: white;

    overflow-x: auto;

    table {
        border-collapse: collapse;
        width: 800px;
    }
`

export const Title = styled.div`
    padding-top: 80px;
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
   
   h3 {
    font-size: 25px;
   }
`

export const AreaInfo = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  justify-content: center;
  gap: 50px;
`

export const TableHead = styled.thead`
    text-align: left;
    border-bottom: 1px solid #9e9c9c;
`

export const TableTitle = styled.th`
    padding: 10px 0;
    color: #9e9c9c;
`
export const TableBody = styled.tbody`
    tr {
        border-bottom: 1px solid #9e9c9c;
    }

    td {
        padding: 20px 0;
    }
`

export const AreaImg = styled.td`
    display: flex;
    align-items: center;
    gap: 5px;

    img {
        width: 100px;
    }

    h4 {
        width: 200px;
        font-size: 15px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis; 
    }
`

export const ButtonRemoveCart = styled.button` 
    background-color: transparent;
    outline: none;
    border: none;
    color: #CF3438;
    cursor: pointer;
`

export const ContainerResumeBuy = styled.div`
    width: 300px;
    
`

export const BoxResumeBuy = styled.div`
    border: 1px solid #9e9c9c9b;
    background-color: #EEEEEE;    
`

export const TitleResumeBuy = styled.div`
    border-bottom: 1px solid #9e9c9c49;

    padding: 10px 15px;

    h3 {
        color: #504f4f;
    }
    
`

export const ContentResumeBuy = styled.div`
    padding: 20px 15px;

    div {
        display: flex;
        justify-content: space-between;
    }

    div p {
        color: #504f4f;
    }
    
`

export const TotalResumeBuy = styled.div`
    /* border-top: 1px solid #9e9c9c; */
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    color: #504f4f;
    background-color: #DDDDDD;
    
`

export const AreaButtonResumeBuy = styled.div`
   button {
    margin-top: 8px;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    background-color: #26A743;
    color: white;
    border: none;
    outline: none;
    transition: all.5s;
    font-weight: bold;
   }

   button:hover {
    background-color: #196d2b
   }
    
`



// display: -webkit-box;
// -webkit-line-clamp: 2;
// -webkit-box-orient: vertical;
// overflow: hidden;
// text-overflow: ellipsis; 