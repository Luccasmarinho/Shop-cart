import React, { useContext, useEffect, useState } from 'react'
import { Container } from './ProdctsStyle'
import CardProducts from '../CardPrducts/CardProducts'
import getProducts from '../../api/api'
import AppContext from '../../context/AppContext'
import Loading from '../Loading/Loading'

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const { loading, setLoading, inputSearch } = useContext(AppContext);

    useEffect(() => {
        setLoading(true)
        async function saveProducts() {
            const products = await getProducts();
            setAllProducts(products)
            setLoading(false)
        }

        saveProducts()
    }, []);

    return (
        <Container>
            {loading && <Loading />}
            {allProducts
                .filter((e) =>
                    e.title.toLowerCase().includes(inputSearch.toLowerCase()))
                .map((e) =>
                    <CardProducts
                        key={e.id}
                        image={e.image}
                        category={e.category}
                        title={e.title}
                        description={e.description}
                        price={e.price}
                        rate={e.rating_rate}
                    />)}
        </Container>
    )
}

export default Products