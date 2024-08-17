<script>
    import { goto } from "$app/navigation";
    import { totalItems } from "../routes/cart/cart.js";
    import { base } from '$app/paths';


    // Total number of products in the cart
    let itemCount = 0;

    // Subscribe to the totalItems store
    totalItems.subscribe((value) => {
        itemCount = value;
    });

    function navigateToCart() {
        goto(`${base}/cart`);
    }
</script>

<div class="flex items-center">
    <button
        type="button"
        on:click={navigateToCart}
        class="focus:outline-none relative"
    >
        <div class="relative inline-block">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="text-blue-500"
            >
                <path
                    d="M7 4H3V6H5L8.68 14.39L7.24 16.04C7.09 16.23 7 16.47 7 16.73C7 17.3 7.45 17.75 8.02 17.75H19V15.75H8.42L9.1 14.5H17.55C18.03 14.5 18.45 14.22 18.64 13.78L21.88 6.59C21.96 6.41 22 6.21 22 6C22 5.45 21.55 5 21 5H7.21L6.27 3H1V5H4L7 4ZM17.55 12.5H9.7L8.1 8.5H19.25L17.55 12.5ZM7 18.5C6.17 18.5 5.5 19.17 5.5 20C5.5 20.83 6.17 21.5 7 21.5C7.83 21.5 8.5 20.83 8.5 20C8.5 19.17 7.83 18.5 7 18.5ZM17 18.5C16.17 18.5 15.5 19.17 15.5 20C15.5 20.83 16.17 21.5 17 21.5C17.83 21.5 18.5 20.83 18.5 20C18.5 19.17 17.83 18.5 17 18.5Z"
                    fill="orange"
                />
            </svg>
            {#if itemCount > 0}
                <span
                    class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2"
                >
                    {itemCount}
                </span>
            {/if}
        </div>
    </button>
</div>
