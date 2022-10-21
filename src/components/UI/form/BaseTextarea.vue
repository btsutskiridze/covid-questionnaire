<template>
  <textarea
    :name="name"
    :id="name"
    @keyup="saveData"
    ref="textObj"
    class="w-full h-[11.2rem] bg-[#eaeaea] px-5 py-3 text-[#232323] text-lg font-normal border-[0.8px] border-[#232323] outline-none hover:outline-none"
  ></textarea>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    saveData() {
      localStorage.setItem(this.name, this.$refs.textObj.value);
    },
  },
};
</script>
