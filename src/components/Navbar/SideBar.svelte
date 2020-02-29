<script>
  import LoginLink from "../LoginLink.svelte";

  import globalStore from "../../stores/globalStore.js";
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  .sidebar {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 99999999999999999;
    top: 0;
    left: 0;
    background-color: white;

    .sidebar-content {
      position: relative;
      top: 25%;
      width: 100%;
      text-align: center;
      margin-top: 30px;

      .sidebar-header {
        button {
          border: none;
          background-color: white;
          cursor: pointer;

          img {
            height: 30px;
            width: 30px;
          }
        }
      }

      .logo {
        margin-top: 20px;
        margin-bottom: 20px;
      }

      .sidebar-links {
        li {
          list-style-type: none;
        }

        a:link,
        a:visited {
          text-decoration: none;
        }

        a:hover,
        a:active {
          text-decoration: underline;
        }
      }
    }
  }
</style>

<div class="sidebar">
  <div class="sidebar-content">
    <div class="sidebar-header">
      <button
        class="close"
        on:click={() => {
          globalStore.toggleItem('sidebar', false);
        }}>
        <img src="close-outline.svg" alt="close" />
      </button>
    </div>
    <div class="logo">Logo</div>
    <div class="sidebar-links">
      <ul>
        <li>
          <a
            href="."
            on:click={() => {
              globalStore.toggleItem('sidebar', false);
            }}>
            home
          </a>
        </li>
        <li>
          <a
            href="products"
            on:click={() => {
              globalStore.toggleItem('sidebar', false);
            }}>
            products
          </a>
        </li>
        <li>
          <a
            href="about"
            on:click={() => {
              globalStore.toggleItem('sidebar', false);
            }}>
            about
          </a>
        </li>
        <li>
          <a
            href="blog"
            on:click={() => {
              globalStore.toggleItem('sidebar', false);
            }}>
            blog
          </a>
        </li>
        <li>
          <LoginLink />
        </li>
      </ul>
    </div>
  </div>
</div>
