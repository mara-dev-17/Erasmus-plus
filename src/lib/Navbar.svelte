<script>
  import logo from "../assets/logo.png";
  import facebook from "../assets/facebook.svg";
  import instagram from "../assets/instagram.svg";
  import Tab from "./Tab.svelte";

  let tabs = [
    { name: "home", icon: "fa-solid fa-home", view: 1 },
    { name: "projects", icon: "fa-solid fa-diagram-project", view: 2 },
    { name: "gallery", icon: "fa-solid fa-images", view: 3 },
  ];

  export let view = 1;

  let mobile = false;

  function MobileMenu() {
    if (!mobile) {
      mobile = true;
    } else if (mobile) {
      mobile = false;
    }
  }
</script>

<nav
  class="navbar is-fixed-top is-justify-content-space-around is-spaced"
  aria-label="main navigation"
>
  <div class="navbar-brand p-3 ml-3">
    <a href="." class="navbar-item">
      <img src={logo} alt="Erasmus+" height="80" />
    </a>
    <!-- svelte-ignore a11y-missing-attribute -->
    <a
      on:click={MobileMenu}
      role="button"
      class="navbar-burger"
      class:is-active={mobile === true}
      aria-label="menu"
      aria-expanded="false"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>
  <div class="navbar-menu" class:is-active={mobile === true}>
    <div class="navbar-start" class:has-text-centered={mobile === true}>
      {#each tabs as tab}
        <a
          href="/"
          on:click|preventDefault={() => (view = tab.view)}
          class="navbar-item"
          ><span class="icon-text">
            <span class="icon">
              <i class={tab.icon} />
            </span>
            <span>{tab.name}</span>
          </span>
        </a>
      {/each}
    </div>
    <div class="navbar-end">
      <div
        class="social is-flex"
        class:is-justify-content-center={mobile === true}
      >
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" class="navbar-item" target="_blank" rel="social">
          <figure class="image 24x24">
            <img src={instagram} alt="Instagram" />
          </figure>
        </a>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" class="navbar-item" target="_blank" rel="social">
          <figure class="image 24x24">
            <img src={facebook} alt="Facebook" />
          </figure>
        </a>
      </div>
    </div>
  </div>
</nav>
