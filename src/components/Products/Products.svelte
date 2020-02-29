<script>
  import products from "../../stores/products.js";
  import Product from "./Product.svelte";
  //import Loading from "../Loading.svelte";
</script>

<style lang="scss">
  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>

<div class="products">
  {#each $products as product (product.id)}
    <Product {product} />
  {/each}
</div>
