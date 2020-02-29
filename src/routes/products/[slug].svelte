<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`products/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { product: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let product;
  import { addToCart } from "../../stores/cart.js";
  import url from "../../strapi/URL.js";
</script>

<style lang="scss">
  .product {
    display: flex;
    justify-content: space-around;
    text-align: justify;
    @media only screen and (max-width: 992px) {
      flex-wrap: wrap;
    }

    .product-details {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .content {
        .atc-button {
          text-align: center;

          button {
            height: 30px;
            width: 120px;
            text-align: center;
            background-color: black;
            border: none;
            color: white;
            font-size: 15px;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>

<svelte:head>
  <title>{!product ? 'Product' : product.title}</title>
</svelte:head>

<div class="product">
  <div class="product-images">
    <img src={`${url}${product.image[0].url}`} alt="product image" />
  </div>

  <div class="product-details">
    <h1>{product.title}</h1>

    <div class="content">
      <div>{product.price}</div>
      <div>{product.description}</div>
      <div class="atc-button">
        <button
          on:click={() => {
            addToCart(parseInt(product.id), product);
          }}>
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>
