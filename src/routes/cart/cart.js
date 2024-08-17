import { writable, derived } from "svelte/store"
import { get } from "svelte/store"

// Function to get cart from local storage
function getCart() {
    if (typeof window !== 'undefined' && window.localStorage) {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    }
    return [];
}

// Function to save cart changes to local storageq
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

const myCart = writable(getCart());

// Function to perform changes to store or myCart
const updateCart = {
    subscribe: myCart.subscribe,
    addProduct(newProduct){
        myCart.update(products =>{
            const existingProduct = products.find(product => product.id === newProduct.id);
            let updatedProducts;
            if(existingProduct){
                updatedProducts = products.map(product => {
                    if(product.id === newProduct.id){
                        return {...product, quantity: product.quantity + 1}
                    }else{
                        return product
                    }
                })
            }else{
                updatedProducts = [...products, {...newProduct, quntity: newProduct.quantity || 1}]
            }
            saveCart(updatedProducts);
            return updatedProducts;
        })
    },

    // Function to remove product from cart
    removeProduct(productId){
        myCart.update(products => {
            const updatedProducts = products.filter(product => product.id !== productId);
            saveCart(updatedProducts);
            return updatedProducts;
        });
    },

    // Function to increase quantity of product in cart
    increaseQuantity(productId){
        myCart.update(products => {
            return products.map(product => {
                if(product.id === productId){
                    return {...product, quantity: product.quantity + 1}
                }else{
                    return product
                }
            })
        })
    },

    // Function to decrease quantity of product in cart
    decreaseQantity(productId){
        myCart.update(products =>{
            return products.map(product => {
                if(product.id === productId){
                    return {...product, quantity: product.quantity - 1}
                }else{
                    return product
                }
            })
        })
    },

    // Function to calculate quantity of product and return number
    productQuantity(productId){
        const product = get(myCart).find(product => product.id === productId);
        return product ? product.quantity : 0;
    },

    // Function to clear cart
    clearCart(){
        myCart.set([]);
        saveCart([]);
    }
}

// Derived store to calculate total price
const totalPrice = derived(myCart, $myCart => $myCart.reduce((sum, item) => sum + item.price * item.quantity, 0));

// Derived store to calculate total items
const totalItems = derived(myCart, $myCart => $myCart.reduce((sum, item) => sum + item.quantity, 0));

export {myCart, updateCart, totalItems, totalPrice}