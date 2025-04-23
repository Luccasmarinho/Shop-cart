import React, { useContext, useEffect, useState } from 'react'
import {
    Container,
    AreaInfo,
    Title,
    TableHead,
    TableTitle,
    TableBody,
    AreaImg,
    ButtonRemoveCart,
    ContainerResumeBuy,
    BoxResumeBuy,
    TitleResumeBuy,
    ContentResumeBuy,
    TotalResumeBuy,
    AreaButtonResumeBuy
} from "./CartListStyle"
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import StrepperNumber from '../StrepperNumber/StrepperNumber';
import AppContext from '../../context/AppContext';
import { convertToReal } from '../../utils/utils';

const CartList = () => {
    const [valueStrepper, setValueStrepper] = useState(1);
    const saveValueTotalAllProducts = [];
    const { allDataLocalStorage } = useContext(AppContext);

    function valueTotal() {
        allDataLocalStorage.forEach((e) => saveValueTotalAllProducts.push(e.price * e.quantity))
        const sum = saveValueTotalAllProducts.reduce((a, b) => a + b, 0)
        const convert = convertToReal(sum)
        console.log(convert)
        return convert
    }

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
                                {allDataLocalStorage.length == 0
                                    ? <p>Seu carrinho está vazio.</p>
                                    : allDataLocalStorage.map((e) =>
                                        <tr key={e.id}>
                                            <AreaImg>
                                                <img src={e.image} alt="Produto" />
                                                <h4>{e.title}</h4>
                                            </AreaImg>
                                            <td>{convertToReal(e.price)}</td>
                                            <td><StrepperNumber saveStrepper={saveStrepper} id={e.id} /></td>
                                            <td>{valueTotalList(e.price, e.quantity)}</td>
                                            <td>
                                                <ButtonRemoveCart>
                                                    <RemoveShoppingCartIcon />
                                                </ButtonRemoveCart>
                                            </td>
                                        </tr>)}
                                {/* <tr>
                                    <AreaImg>
                                        <img src="https://i.postimg.cc/jjSmYrMd/Notebook-Asus-Vivobook-Go-15.webp" alt="" />
                                        <h4>Nome Produto</h4>
                                    </AreaImg>
                                    <td>R$ 1.289,90</td>
                                    <td><StrepperNumber /></td>
                                    <td>1.289,90</td>
                                    <td>
                                        <ButtonRemoveCart>
                                            <RemoveShoppingCartIcon />
                                        </ButtonRemoveCart>
                                    </td>
                                </tr> */}
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
                                <p>{valueTotal()}</p>
                            </div>
                            <div>
                                <p>Frete</p>
                                <p>Gratuito</p>
                            </div>
                        </ContentResumeBuy>
                        <TotalResumeBuy>
                            <p>Total</p>
                            <p>{valueTotal()}</p>
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