import React, { useContext } from 'react'
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

const CartList = () => {
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
                                <tr>
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
                                </tr>
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
                                <p>1.289,90</p>
                            </div>
                            <div>
                                <p>Frete</p>
                                <p>Gratuito</p>
                            </div>
                        </ContentResumeBuy>
                        <TotalResumeBuy>
                            <p>Total</p>
                            <p>1.289,90</p>
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