<template>
  <div class="photo"></div>
</template>

<script>
export default {
  name: "Home",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.photo {
  background-image: url(../assets/images/bg-top-header.jpg);
  background-repeat: no-repeat;
  max-width: 100%;
  width: 100%;
  height: 100vh;
  background-position: top;
  /* background-size: cover; */
}
</style>
