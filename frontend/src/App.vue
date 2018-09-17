<template>
  <div id="app">
    <div>
      <b-navbar type="light" variant="light" toggleable>
        <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_dropdown_collapse">
          <b-navbar-nav>
            <b-navbar-brand to="/">Hangman</b-navbar-brand>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-button to="/register" variant="link">Register</b-button>
            <b-button to="/login" variant="link">Login</b-button>
            <b-button to="/logout" variant="link">Logout</b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<style lang="scss">
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.navbar {
  margin-bottom: 15px;
}
</style>
