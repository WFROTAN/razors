<script>
  // Components
  import Nav from "../components/Navbar/Nav.svelte";
  import SideBar from "../components/Navbar/SideBar.svelte";

  // Stores
  import globalStore from "../stores/globalStore.js";

  export let segment;
</script>

<style lang="scss">
  @import "./styles/global.scss";
  main {
    position: relative;
    max-width: 60em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

{#if $globalStore.sidebar}
  <SideBar />
{/if}

<main>
  <slot />
</main>
