<template>
  <Layout>
    <Navbar />
    <Home />
    <Bio />
  </Layout>
</template>

<script>
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";
import Bio from "./components/Bio.vue";

export default {
  name: "App",
  components: {
    Home,
    Navbar,
    Bio,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/globals.scss";
</style>
