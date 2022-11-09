<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#home">Viet Trung Nguyen</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a href="#bio" class="nav-item nav-link">O mnie</a>
        <a href="#calendar" class="nav-item nav-link">Kalendarz</a>
        <a href="#cds" class="nav-item nav-link">CDs</a>
        <a href="#media" class="nav-item nav-link">Media</a>
        <a href="#contact" class="nav-item nav-link">Kontakt</a>
      </div>
    </div>

    <router-view />
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.bg-dark {
  background-color: black !important;
}

.navbar-dark .navbar-brand {
  color: #ffffff !important;
  font-size: 20px !important;
}

.navbar-dark .navbar-nav .nav-link {
  color: #ffffff !important;
  font-size: 20px !important;
}

.navbar-expand-lg .navbar-nav {
  margin-left: auto !important;
}

.navbar {
  padding: 0.5rem 2rem !important;
}

.navbar-dark .navbar-toggler {
  color: #ffffff !important;
  border-color: #ffffff;
}

.navbar-expand-lg .navbar-nav .nav-link {
  padding-left: 2rem !important;
  padding-right: 2rem !important;
}
</style>
