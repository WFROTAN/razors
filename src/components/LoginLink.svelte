<script>
  import user from "../stores/user.js";

  //logout functionality

  //stores
  import globalStore from "../stores/globalStore.js";
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  a:link,
  a:visited {
    text-decoration: none;
  }

  a:hover,
  a:active {
    text-decoration: underline;
  }
</style>

{#if $user.jwt}
  <a
    href="/"
    class="logout"
    on:click={() => {
      globalStore.toggleItem('sidebar', false);
    }}>
    Logout
  </a>
{:else}
  <a
    href="/login"
    class="login"
    on:click={() => {
      globalStore.toggleItem('sidebar', false);
    }}>
    Login
  </a>
{/if}
