<template>
  <div class="main"></div>
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

<style scoped>
.main {
  background-image: url(../assets/images/test_bg.jpg);
  background-repeat: no-repeat;
  max-width: 100%;
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
