<script>
  import Navbar from "./lib/Navbar.svelte";
  import Home from "./components/Home.svelte";
  import Projects from "./components/Projects.svelte";
  import Gallery from "./components/Gallery.svelte";
  import Footer from "./lib/Footer.svelte";

  let view;

  import { fly } from "svelte/transition";
</script>

<svelte:window transition:fly={{ y: 200, duration: 2000 }} />
<main>
  <Navbar bind:view />
  {#if view === 1}
    <Home />
  {:else if view === 2}
    <Projects />
  {:else if view === 3}
    <Gallery />
  {/if}
  <Footer />
</main>
