<template>
  <base-container :page="page">
    <div class="flex flex-row justify-between relative">
      <div class="flex flex-col w-1/2">
        <slot></slot>
      </div>
      <aside class="w-2/3">
        <slot name="image"></slot>
      </aside>
    </div>
    <slot name="arrows"> </slot>
  </base-container>
</template>

<script>
export default {
  props: ["page"],
  components: {},
};
</script>
