<script>
  export let segment;

  import SmallNav from "./SmallNav.svelte";
  import BigNav from "./BigNav.svelte";
  import globalStore from "../../stores/globalStore.js";

  let screenWidth;

  $: if (screenWidth > 992) {
    globalStore.toggleItem("sidebar", false);
  }
</script>

<svelte:window bind:innerWidth={screenWidth} />

{#if screenWidth > 992}
  <BigNav {segment} />
{:else}
  <SmallNav {segment} />
{/if}
