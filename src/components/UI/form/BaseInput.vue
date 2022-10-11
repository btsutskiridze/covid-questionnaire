<template>
  <div>
    <div class="flex flex-col mb-11">
      <label
        v-if="labelValue"
        :for="name"
        class="text-[1.3rem] leading-7 font-bold h-10"
      >
        {{ labelValue }}*
      </label>
      <input
        :type="type ? type : 'text'"
        :name="name"
        :id="name"
        :placeholder="placeholder ? placeholder : ''"
        class="px-5 py-3 text-[#232323] text-lg font-normal max-w-lg border-[#232323] border-[0.8px] bg-[#eaeaea] outline-none hover:outline-none"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "type", "labelValue", "placeholder"],
  data() {
    return {};
  },
};
</script>
