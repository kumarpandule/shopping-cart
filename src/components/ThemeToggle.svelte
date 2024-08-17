<script>
        import { onMount } from 'svelte';

let darkMode = false;

onMount(() => {
  darkMode = localStorage.getItem('theme') === 'dark';
  document.documentElement.classList.toggle('dark', darkMode);
});

function toggleTheme() {
  darkMode = !darkMode;
  document.documentElement.classList.toggle('dark', darkMode);
  localStorage.setItem('theme', darkMode ? 'dark' : 'light');
}
</script>

<div class=" flex justify-center items-center px-4 pb-1">
  <button on:click={toggleTheme}>
    {#if darkMode}
      <span>🌙</span>
    {:else}
      <span>☀️</span>
    {/if}
  </button>
</div>
