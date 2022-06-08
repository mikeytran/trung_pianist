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

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 10px;
}

body {
  background-color: #000000;
  font-size: 16px;
}
</style>
