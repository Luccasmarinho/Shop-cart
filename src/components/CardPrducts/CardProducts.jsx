import React from 'react'
import HalfRating from '../HalfRating/HalfRating'
import { ContainerCard, AreaImg, AreaTitle, Title, Rating, Price } from "./CardProductsStyle"
import ButtonAddCart from '../ButtonAddCart/ButtonAddCart'
import { convertToReal } from '../../utils/utils'

const CardProducts = ({ image, category, title, description, rate, price }) => {
    // const categoryUpper = category.replace(category[0], category[0].toUpperCase())
    const promo = ((price / 100) / 10).toFixed(2)

    return (
        <ContainerCard>
            <AreaImg>
                <img src={image} alt={category} />
            </AreaImg>
            <AreaTitle>
                <Title>
                    <strong>{title}</strong>
                    <p>{description}</p>
                </Title>
                <Rating>
                    <p>{rate.toFixed(1)}</p>
                    <HalfRating rate={rate} />
                </Rating>
                <Price>
                    <h3>{`R$ ${convertToReal(price)}`}</h3>
                    <p>{`ou 10x de ${promo}`}</p>
                </Price>
                <ButtonAddCart image={image} title={title} price={price} />
            </AreaTitle>
        </ContainerCard>
    )
}

export default CardProducts