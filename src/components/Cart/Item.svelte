<script>
  export let id;
  export let image;
  export let title;
  export let price;
  export let amount;

  import url from "../../strapi/URL.js";

  import {
    removeItem,
    increaseAmount,
    decreaseAmount
  } from "../../stores/cart.js";
</script>

<style lang="scss">
  .item {
    img {
      height: 150px;
      width: 150px;
    }
  }
</style>

<div class="item-wrapper">
  <div class="item">
    <img src={`${url}${image[0].url}`} alt={title} />
    <div class="item-content">
      <h4>{title}</h4>
      <h5>${price}</h5>
      <button
        on:click={() => {
          removeItem(id);
        }}>
        remove
      </button>
    </div>
  </div>

  <div class="item-options">
    <button
      on:click={() => {
        increaseAmount(id);
      }}>
      increase
    </button>
    <p class="item-amount">{amount}</p>
    <button
      on:click={() => {
        decreaseAmount(id);
      }}>
      decrease
    </button>
  </div>
</div>
