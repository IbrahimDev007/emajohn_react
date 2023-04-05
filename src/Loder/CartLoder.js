import { getShoppingCart } from "../../public/utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    // if cart data in database must use async 
    const storecart = getShoppingCart();
    const savedCart = []
    for (const id in storecart) {
        const addedProduct = products.find(pd => pd.id === id)
        if (addedProduct) {
            const quantity = storecart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }
    return savedCart;

}

export default cartProductsLoader