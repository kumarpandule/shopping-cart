<script>
    import { base } from '$app/paths';
    import AddCartButton from "./AddCartButton.svelte";
    import WishlistButton from "./WishlistButton.svelte";
    export let id = 'boat-watch'
    export let name = 'Unknown'
    export let price = 0.00
</script>

<article class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto my-4 overflow-hidden shadow-xl hover:scale-105 rounded-xl transition-transform ease-in-out duration-500 flex flex-col bg-white dark:bg-gray-800">
    <!-- Fixed height for the image -->
     <div class=" flex justify-center items-center">
        <img class=" m-0 h-36 md:h-48 lg:h-64 object-cover rounded-t-xl" alt={id} src={`${base}/images/${id}.png`}>
     </div>
    <!-- Card Content -->
    <section class="flex-1 p-4 flex flex-col">
        <h5 class="text-lg font-semibold mb-2 truncate leading-tight">{name}</h5>
        <p class="text-base">{'₹'}{price}<span class="ml-2 p-1 text-xs bg-gray-200 dark:bg-gray-600">10% OFF</span></p>
    </section>
    <!-- Action Buttons -->
    <section class="p-4 flex justify-between items-center border-t border-gray-300">
        <AddCartButton id={id} name={name} price={price} />
        <WishlistButton />
    </section>
</article>


