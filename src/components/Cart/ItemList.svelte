<script>
  import Item from "./Item.svelte";
  import cart, { cartTotal, setStorageCart } from "../../stores/cart.js";

  import { afterUpdate } from "svelte";

  afterUpdate(() => {
    setStorageCart($cart);
  });
</script>

<div>
  {#each $cart as cartItem, index (cartItem.id)}
    <Item {...cartItem} />
  {:else}
    <h2>empty cart</h2>
  {/each}

  <div>
    <h3>total: ${$cartTotal}</h3>
  </div>
</div>
