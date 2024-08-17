<script>
    import { updateCart } from "../routes/cart/cart"

    export let id = 'boat-watch'
    export let name = 'Unknown'
    export let price = 0.00
    export let quantity = 1

    // Function to remove product from cart
    function removeProduct(){
        updateCart.removeProduct(id)
    }

    // Function to decrease quantity of product
    function decreaseQuantity(){
        updateCart.decreaseQantity(id)
    }

    // Function to increase quantity of product
    function increaseQuantity(){
        updateCart.increaseQuantity(id)
    }
    // Calculate discounted price
    const discountedPrice = price * 0.90;

</script>

<article class="max-w flex shadow-xm">
    <section class="w-1/4">
        <img class="m-0 h-18 md:h-28 lg:h-32 object-cover" alt={id} src={`/images/${id}.png`}>
    </section>
    <section class="basis-3/4 flex flex-col justify-between py-4">
        <p>{name}</p>
        <div class="flex flex-row items-center">
            <p class="line-through text-red-500 text-xs">{'₹'}{(price * quantity).toFixed(2)}</p>
            <p class="text-green-600 px-2">{'₹'}{(discountedPrice * quantity).toFixed(2)} (10% off)</p>
        </div>
        <div class="flex items-center">
            <button class="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded disabled:opacity-50" disabled={quantity === 1} on:click={decreaseQuantity}>-</button>
            <span class="mx-2">{quantity}</span>
            <button class="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded" on:click={increaseQuantity}>+</button>
            <button class="ml-4 px-2 py-1 rounded bg-red-500 text-gray-50" on:click={removeProduct}>Remove</button>
        </div>
    </section>
</article>