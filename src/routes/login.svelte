<script>
  import loginUser from "../strapi/loginUser.js";
  import registerUser from "../strapi/registerUser.js";

  let email = "";
  let password = "";
  let username = "default username";
  let isMember = true;

  $: isEmpty = !email || !password || !username;

  //toggle member
  function toggleMember() {
    isMember = !isMember;
    if (!isMember) {
      username = "";
    } else {
      username = "default username";
    }
  }

  //handle submit
  async function handleSubmit() {
    let user;
    if (isMember) {
      user = await loginUser({ email, password });
    } else {
      user = await registerUser({ email, password, username });
    }

    //console.log(user);

    if (user) {
    } else {
    }
  }
</script>

<h1>login</h1>

<section class="form">
  {#if isMember}sign in{:else}register{/if}

  <form class="login-form" on:submit|preventDefault={handleSubmit}>
    <div class="form-input">
      <label for="email">email</label>
      <input type="email" id="email" bind:value={email} />
      <label for="password">password</label>
      <input type="password" id="password" bind:value={password} />
      {#if !isMember}
        <label for="username">username</label>
        <input type="text" id="username" bind:value={username} />
      {/if}
    </div>
    <div class="form-footer">
      {#if isEmpty}
        <p class="form-empty">Please fill out all form fields</p>
      {/if}
      <button
        type="submit"
        class="submit-button"
        disabled={isEmpty}
        class:disabled={isEmpty}>
        submit
      </button>
      {#if isMember}
        <p class="register-link">
          need to register?
          <button type="button" on:click={toggleMember}>click here</button>
        </p>
      {:else}
        <p class="register-link">
          already a member?
          <button type="button" on:click={toggleMember}>Sign In</button>
        </p>
      {/if}
    </div>
  </form>
</section>
