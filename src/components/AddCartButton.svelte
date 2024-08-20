<script>
    import { updateCart } from '../routes/cart/cart.js'

    export let id = ""
    export let name = ""
    export let price = 0.0
    export let quantity = 0
    let product = { id, name, price, quantity };

  function addToCart() {
    updateCart.addProduct({
      id,
      name,
      price,
      quantity: product.quantity + 1
    }); 
  }
    // Product quantity
    $: updateCart.subscribe(value =>{
       product = value.find(item => item.id === id) || product
    })

    // Function to intiate the toast message
    function triggerToast() {
        const event = new CustomEvent('showtoast', {
            detail: { message: `${product.name} added to cart` }
        });
        window.dispatchEvent(event);
    }

</script>

<button on:click={() => {addToCart(), triggerToast()}} class={`text-white font-bold py-2 px-4 w-2/3 rounded ${product.quantity >=1 ? 'bg-green-400' : 'bg-orange-400'}`}>
    {product.quantity >= 1 ? `${product.quantity}` : "Add to Cart"}</button>
