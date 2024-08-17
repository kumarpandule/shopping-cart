<script>
    import data from "../data/products.json";
    import Card from "./GridCard.svelte";
</script>

<!-- This is Product Grid view-->
<div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 justify-items-center">
    {#each data as product (product.id)}
        <div class="w-full flex justify-center">
            <Card name={product.name} price={product.price} id={product.id} />
        </div>
    {/each}
</div>