<template>
  <div class="main">
    <div class="main__container">
      <h2>BIOGRAFIA</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bio",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  padding: 0 20px;
  &__container {
  }
}
</style>
