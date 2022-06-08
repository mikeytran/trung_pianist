<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Viet Trung Nguyen</a>
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
        <a class="nav-item nav-link" href="#">O mnie</a>
        <a class="nav-item nav-link" href="#">Kalendarz</a>
        <a class="nav-item nav-link" href="#">CDs</a>
        <a class="nav-item nav-link" href="#">Media</a>
        <a class="nav-item nav-link" href="#">Kontakt</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
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
