<template>
  <div class="px-[5%] lg:px-[12.5rem] py-16 h-screen">
    <the-header :page="page" />
    <slot></slot>
  </div>
</template>

<script>
import TheHeader from "../layout/TheHeader.vue";
export default {
  props: ["page"],
  components: {
    TheHeader,
  },
};
</script>

<style></style>
