import React, { useContext, useEffect, useState } from 'react'
import { Container } from './ProdctsStyle'
import CardProducts from '../CardPrducts/CardProducts'
import getProducts from '../../api/api'
import AppContext from '../../context/AppContext'
import Loading from '../Loading/Loading'

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const { loading, setLoading } = useContext(AppContext);

    useEffect(() => {
        setLoading(true)
        async function saveProducts() {
            const products = await getProducts();
            setAllProducts(products)
        }

        saveProducts()
        setLoading(false)
    }, []);

    return (
        <Container>
            {loading && <Loading />}
            {allProducts.map((e) =>
                <CardProducts
                    key={e.id}
                    image={e.image}
                    category={e.category}
                    description={e.description}
                    price={e.price}
                    rate={e.rating_rate}
                />)}
        </Container>
    )
}

export default Products