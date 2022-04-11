<script>
  import Tab from "../lib/Tab.svelte";

  let tabs = [
    { id: 1, name: "Museo Bari" },
    { id: 2, name: "tab.2" },
    { id: 3, name: "tab.3" },
  ];

  let selected = 1;
</script>

<div class="container pt-6 ">
  <h2 class="title has-text-centered">Gallery</h2>
  <div class="tabs is-boxed is-medium">
    <ul>
      {#each tabs as tab}
        <li class:is-active={tab.id === selected}>
          <a href="/" on:click|preventDefault={() => (selected = tab.id)}
            >{tab.name}</a
          >
        </li>
      {/each}
    </ul>
  </div>
  <Tab {selected} />
</div>
