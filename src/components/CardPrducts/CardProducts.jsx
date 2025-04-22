import React from 'react'
import HalfRating from '../HalfRating/HalfRating'
import { ContainerCard, AreaImg, AreaTitle, Title, Rating, Price } from "./CardProductsStyle"
import ButtonAddCart from '../ButtonAddCart/ButtonAddCart'

const CardProducts = ({ image, category, description, rate, price }) => {
    const categoryUpper = category.replace(category[0], category[0].toUpperCase())
    const priceInReal = (price / 100).toFixed(2).replace(".", ",").replace(/^(\d+)(\d{3},\d{2})$/, '$1.$2')
    const promo = ((price / 100) / 10).toFixed(2)

    return (
        <ContainerCard>
            <AreaImg>
                <img src={image} alt={category} />
            </AreaImg>
            <AreaTitle>
                <Title>
                    <strong>{categoryUpper}</strong>
                    <p>{description}</p>
                </Title>
                <Rating>
                    <p>{rate.toFixed(1)}</p>
                    <HalfRating rate={rate} />
                </Rating>
                <Price>
                    <h3>{`R$ ${priceInReal}`}</h3>
                    <p>{`ou 10x de ${promo}`}</p>
                </Price>
                <ButtonAddCart />
            </AreaTitle>
        </ContainerCard>
    )
}

export default CardProducts