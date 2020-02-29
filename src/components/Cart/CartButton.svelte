<script>
  import cart from "../../stores/cart.js";
  console.log($cart);

  $: total = $cart.reduce((acc, curr) => {
    return (acc += curr.amount);
  }, 0);

  //let total = 0;
</script>

<style lang="scss">
  .cart-button {
    a {
      background-color: white;

      img {
        height: 20px;
        widows: 20px;
      }
    }

    .item-amount {
      font-size: 20px;
    }
  }
</style>

<div class="cart-button">
  <a href="cart">
    <img src="cart-outline.svg" alt="cart" />
  </a>
  <span class="item-amount">{total}</span>
</div>
