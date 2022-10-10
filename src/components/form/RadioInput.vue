<template>
  <div class="flex flex-row items-center mb-5">
    <input
      type="radio"
      :id="value"
      :name="name"
      :value="value"
      class="w-6 h-6 mr-5 accent-[#232323]"
    />
    <label :for="value" class="text-xl font-bold">{{ labelValue }}</label>
  </div>
</template>

<script>
export default {
  props: ["name", "value", "labelValue"],
  data() {
    return {};
  },
};
</script>
