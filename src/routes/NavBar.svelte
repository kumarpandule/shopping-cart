<script>
    import CartIcon from '../components/CartIcon.svelte'
    import ThemeToggle from '../components/ThemeToggle.svelte'
</script>

<!-- This is Navbar simple design-->
<nav>
    <div class=" px-8 py-4 container mx-auto flex justify-end items-center">
        <ThemeToggle />
        <CartIcon />
    </div>
</nav>
