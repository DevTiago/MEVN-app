<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>
        <router-link :to="{ name: 'homepage' }" id="brand"
          >Task Manager</router-link
        >
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item>Tasks</b-nav-item>
          <b-nav-item>Events</b-nav-item>
          <b-nav-item href="#">Finance</b-nav-item>
          <b-nav-item-dropdown text="User" right>
            <router-link tag="b-dropdown-item" :to="{ name: 'profile' }"
              >Profile</router-link
            >
            <!-- <router-link tag="b-dropdown-item" :to="{ name: 'logout' }"
              >Logout</router-link
            > -->
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default { name: "NavBar" };
</script>

<style lang="scss" scoped>
.dropdown-item a {
  text-decoration: none;
  color: #212529;
}

#brand {
  color: #fff;

  &:hover {
    text-decoration: none;
  }
}
</style>