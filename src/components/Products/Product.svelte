<script>
  import url from "../../strapi/URL.js";
  export let product;
  const { title, image, price, id, slug } = product;
</script>

<style lang="scss">
  .fig {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    float: left;

    text-align: center;
    padding-bottom: 50px;

    .fig-image {
      display: flex;
      justify-content: space-around;

      img {
        width: 10em;
        height: 10em;
      }
    }

    figcaption {
      margin-top: 10px;
    }
  }
</style>

<figure class="fig">
  <div class="fig-image">
    <a href={`/products/${slug}`}>
      <img
        src={`${url}${image[0].url}`}
        alt={title}
        height="150px"
        width="150px" />
    </a>
  </div>
  <figcaption>
    <a href={`/products/${slug}`}>
      <p className="productName">{title}</p>
    </a>
    <p className="price">${price}</p>
  </figcaption>
</figure>
