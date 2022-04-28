<script>
  import Navbar from "./lib/Navbar.svelte";
  import Home from "./components/Home.svelte";
  import Actions from "./components/Actions.svelte";
  import Gallery from "./components/Gallery.svelte";
  import Footer from "./lib/Footer.svelte";

  let view;
</script>

<main>
  <Navbar bind:view />
  {#if view === 1}
    <Home />
  {:else if view === 2}
    <Actions />
  {:else if view === 3}
    <Gallery />
  {/if}
  <Footer />
</main>
