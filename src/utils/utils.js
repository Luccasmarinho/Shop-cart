export function convertToReal(price) {
    const priceInReal = (price / 100).toFixed(2).replace(".", ",").replace(/^(\d+)(\d{3},\d{2})$/, '$1.$2')
    return priceInReal
}