<script>
	import '../app.css';
	import NavBar from "./NavBar.svelte";
	import Toast from "../components/Toast.svelte";

</script>

<div class="app bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-white">
	<NavBar />

	<main>
		<slot />
		<Toast />
	</main>

	<footer>
		<p class="text-center text-gray-500 text-sm py-2">❤️ Developed by Kumar</p>
	</footer>
</div>