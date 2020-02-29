<script>
  export let segment;
  import LoginLink from "../LoginLink.svelte";
  import CartButton from "../Cart/CartButton.svelte";
</script>

<style lang="scss">
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
    display: flex;
    justify-content: space-between;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  .nav-links {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
</style>

<nav>
  <div class="nav-items">
    <ul>
      <li>
        <a class:selected={segment === undefined} href=".">home</a>
      </li>
      <li>
        <a class:selected={segment === 'about'} href="about">about</a>
      </li>
      <li>
        <a
          rel="prefetch"
          class:selected={segment === 'products'}
          href="products">
          products
        </a>
      </li>

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <li>
        <a rel="prefetch" class:selected={segment === 'blog'} href="blog">
          blog
        </a>
      </li>
    </ul>
  </div>
  <div class="nav-links">
    <div class="login-link">
      <LoginLink />
    </div>
    <div class="cart-link">
      <CartButton />
    </div>
  </div>
</nav>
