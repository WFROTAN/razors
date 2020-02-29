<script>
  import globalStore from "../../stores/globalStore.js";
  import CartButton from "../Cart/CartButton.svelte";

  //let total = 0;
</script>

<style lang="scss">
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 0.6em;
    font-size: 35px;

    .hamburger {
      display: flex;
      justify-content: space-between;

      .hamburger-icon {
        border: none;
        cursor: pointer;
        background-color: white;

        img {
          height: 20px;
          widows: 20px;
        }
      }

      .logo {
        font-size: 30px;
      }
    }
  }
</style>

<nav>
  <div class="hamburger">
    <button
      class="hamburger-icon"
      on:click={() => {
        globalStore.toggleItem('sidebar', true);
      }}>
      <img src="menu-outline.svg" alt="menu" />
    </button>

    <div class="logo">Logo</div>

    <div class="cart-link">
      <CartButton />
    </div>
  </div>
</nav>
