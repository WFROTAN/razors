<script>
  import globalStore from "../stores/globalStore.js";
  import user from "../stores/user.js";
  import ItemList from "../components/Cart/ItemList.svelte";

  //let user = false;
</script>

<div class="cart">
  <div class="cart-items">
    <ItemList />
  </div>
  <div class="cart-footer">
    {#if $user}
      <a href="checkout" class="checkout">checkout</a>
    {:else}
      <p class="cart-login">login to checkout</p>
      <a href="login" class="login">login</a>
    {/if}
  </div>
</div>
