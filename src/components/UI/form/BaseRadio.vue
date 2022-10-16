<template>
  <div class="flex flex-row gap-5 items-center justify-start mb-5">
    <input
      type="radio"
      :id="value"
      :name="name"
      :value="value"
      class="w-6 h-6 accent-[#232323]"
      ref="radioInput"
      @click="saveValue"
    />
    <label
      :for="value"
      class="text-xl font-normal whitespace-pre-wrap w-full"
      >{{ labelValue }}</label
    >
  </div>
</template>

<script>
export default {
  props: ["name", "value", "labelValue"],
  data() {
    return {};
  },
  mounted() {
    if (
      localStorage.getItem(this.$refs.radioInput.name) ==
      this.$refs.radioInput.value
    ) {
      this.$refs.radioInput.checked = true;
    }
  },
  methods: {
    saveValue(e) {
      localStorage.setItem(e.target.name, e.target.value);
    },
  },
};
</script>
