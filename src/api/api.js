import axios from "axios";

async function getProducts() {
  const url = "https://api-produtos-puce.vercel.app/products";
  try {
    const connection = await axios.get(url);
    return connection.data;
  } catch (error) {
    console.log(error);
    return []
  }
}

export default getProducts;
