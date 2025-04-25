import React, { useContext, useEffect, useMemo, useState } from 'react'
import {
    Container,
    AreaInfo,
    Title,
    TableHead,
    TableTitle,
    TableBody,
    AreaImg,
    Price,
    ContainerResumeBuy,
    BoxResumeBuy,
    TitleResumeBuy,
    ContentResumeBuy,
    TotalResumeBuy,
    AreaButtonResumeBuy
} from "./CartListStyle"
import StrepperNumber from '../StrepperNumber/StrepperNumber';
import AppContext from '../../context/AppContext';
import { convertToReal } from '../../utils/utils';
import ButtonRemoveCart from '../ButtonRemoveCart/ButtonRemoveCart';

const CartList = () => {
    const [valueStrepper, setValueStrepper] = useState(1);
    const saveValueTotalAllProducts = [];
    const { allDataLocalStorage, inputSearch } = useContext(AppContext);

    const valueTotal = useMemo(() => {
        allDataLocalStorage.forEach((e) => saveValueTotalAllProducts.push(e.price * e.quantity))
        const sum = saveValueTotalAllProducts.reduce((a, b) => a + b, 0)
        const convert = convertToReal(sum)
        return convert
    }, [saveValueTotalAllProducts])

    function valueTotalList(price, quantity) {
        const multiple = price * quantity
        const convert = convertToReal(multiple)
        return convert
    }

    function saveStrepper(value) {
        setValueStrepper(value)
    }

    return (
        <Container>
            <Title>
                <h3>Seu carrinho</h3>
            </Title>
            <AreaInfo>
                <div>
                    <div>
                        <table>
                            <TableHead>
                                <tr>
                                    <TableTitle>PRODUTO</TableTitle>
                                    <TableTitle>PREÇO</TableTitle>
                                    <TableTitle>QUANTIDADE</TableTitle>
                                    <TableTitle>TOTAL</TableTitle>
                                    <TableTitle></TableTitle>
                                </tr>
                            </TableHead>
                            <TableBody>
                                {allDataLocalStorage.length == 0 || !allDataLocalStorage
                                    ? <tr>
                                        <td>Seu carrinho está vazio.</td>
                                    </tr>
                                    : allDataLocalStorage
                                        .filter((e) =>
                                            e.title.toLowerCase().includes(inputSearch.toLowerCase()))
                                        .map((e) =>
                                            <tr key={e.id}>
                                                <AreaImg>
                                                    <img src={e.image} alt="Produto" />
                                                    <h4>{e.title}</h4>
                                                </AreaImg>
                                                <td>{convertToReal(e.price)}</td>
                                                <td><StrepperNumber saveStrepper={saveStrepper} id={e.id} /></td>
                                                <Price>{valueTotalList(e.price, e.quantity)}</Price>
                                                <td>
                                                    <ButtonRemoveCart id={e.id} />
                                                </td>
                                            </tr>
                                        )}
                            </TableBody>
                        </table>
                    </div>
                </div>
                <ContainerResumeBuy>
                    <BoxResumeBuy>
                        <TitleResumeBuy>
                            <h3>Resumo da compra</h3>
                        </TitleResumeBuy>
                        <ContentResumeBuy>
                            <div>
                                <p>Sub-total</p>
                                <p>{valueTotal}</p>
                            </div>
                            <div>
                                <p>Frete</p>
                                <p>Gratuito</p>
                            </div>
                        </ContentResumeBuy>
                        <TotalResumeBuy>
                            <p>Total</p>
                            <p>{valueTotal}</p>
                        </TotalResumeBuy>
                    </BoxResumeBuy>
                    <AreaButtonResumeBuy>
                        <button>Finalizar compra</button>
                    </AreaButtonResumeBuy>
                </ContainerResumeBuy>
            </AreaInfo>
        </Container>
    )
}

export default CartList