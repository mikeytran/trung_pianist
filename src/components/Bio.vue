<template>
  <div class="main">
    <div class="main__container"></div>
  </div>
</template>

<script>
export default {
  name: "Bio",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.main {
  &__container {
  }
}
</style>
