<script>
    import ProductGrid from '../components/ProductGrid.svelte';
</script>

<svelte:head>
	<title>Shopping Cart</title>
	<meta name="This is e-commerce app!" content="Demo shopping cart svelte app." />
</svelte:head>


<section class="text-center py-4">
    <h1 class="text-5xl mb-1">PRODUTS</h1>
    <p class="my-0 text-gray3">Bset smart watches from our top brands.</p>
    <div class="mx-auto w-1/2 h-1 my-6 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"></div>
</section>

<!-- This is Product Grid view-->
<ProductGrid />
