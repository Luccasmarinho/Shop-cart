import axios from "axios";

async function getProducts() {
  const url = "http://localhost:3000/products";
  try {
    const connection = await axios.get(url);
    return connection.data;
  } catch (error) {
    console.log(error);
  }
}

export default getProducts;
