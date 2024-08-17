<script>
    import { myCart, totalItems, totalPrice } from './cart.js';
    import ListCard from '../../components/ListCard.svelte';
    import emptyCart from '../../lib/images/empty-cart.png'

    let price = 0;
    let totalProducts = 0;
    let discount = 0;
    let deliveryCharges = 0;
    let totalAmount = 0;
    let couponCode = '';

    // Subscribe to totalItems and totalPrice stores
    $: totalItems.subscribe(value => {
        totalProducts = value;
    });

    $: totalPrice.subscribe(value => {
        price = value;
        discount = price * 0.10; // 10% discount
        totalAmount = price - discount;
    });

    function applyCoupon() {
        // Logic to apply coupon code
        // For now, let's assume it gives an additional 5% discount
        if (couponCode === 'SAVE5') {
            discount += price * 0.05;
            totalAmount = price - discount;
        }
    }
</script>

<nav class="p-4 fixed top-0 left-0 w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white z-10">
    <div class="container mx-auto flex justify-center items-center">
        <h1 class="text-2xl font-semibold">Your Cart</h1>
    </div>
</nav>

<main class="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-white">
    <div class=" min-h-screen max-w px-1 flex flex-col md:flex-row justify-between bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-white">
        <div class="basis-2/3 h-max my-2 md:my-6 mr-2 md:mr-10 ml-2 p-4 overflow-visible bg-white dark:bg-gray-800 rounded-xl">
            <p class="pb-2">Please update your items here!</p>
            <hr class="pt-6">
            {#if totalProducts === 0}
                <div class=" h-svh flex flex-col items-center justify-center">
                    <img class=" h-1/3" src={emptyCart} alt="">
                    <h1>Your cart is empty</h1>
                </div>
            {:else}
                {#each $myCart as product (product.id)}
                    <ListCard name={product.name} id={product.id} price={product.price} quantity={product.quantity}/>
                {/each}
            {/if}
        </div>
        <div class=" basis-1/3"></div>
        <div class=" basis-1/3 md:w-1/3 m-2 p-4 bg-white dark:bg-gray-800 rounded-xl md:fixed right-0 top-20">
            <h1 class="text-xl font-semibold mb-4">Price details</h1>
            <hr class="my-4">
            <div class="flex justify-between mb-2">
                <span>Price ({totalProducts} items)</span>
                <span>{'₹'}{price}</span>
            </div>
            <div class="flex justify-between mb-2">
                <span>Discount</span>
                <span class="text-green-600">− {'₹'}{discount.toFixed(2)}</span>
            </div>
            <div class="flex justify-between mb-2">
                <span>Delivery Charges</span>
                <span>{deliveryCharges > 0 ? '₹' + deliveryCharges : 'Free'}</span>
            </div>
            <hr class="my-4">
            <div class="flex justify-between font-semibold mb-2">
                <span>Total Amount</span>
                <span>{'₹'}{totalAmount.toFixed(2)}</span>
            </div>
            <div class="text-green-600 py-2">
                You will save {'₹'}{discount.toFixed(2)} on this order
            </div>
            <div class="mt-4">
                <h2 class="text-lg font-semibold mb-2">Apply Coupon</h2>
                <input type="text" bind:value={couponCode} placeholder="Enter coupon code" class="p-2 border rounded mb-4 w-full"/>
                <button on:click={applyCoupon} class="bg-blue-500 text-white p-2 rounded">Apply</button>
            </div>
            <hr class="my-4">
            <div class="container mx-auto flex justify-center items-center">
                <button class="bg-orange-500 text-white p-2 px-4 rounded">Proceed to Checkout</button>
            </div>
        </div>
    </div>
</main>


