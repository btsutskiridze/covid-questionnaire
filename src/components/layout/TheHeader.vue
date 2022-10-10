<template>
  <header
    class="m-auto flex justify-between items-center border-b-2 border-[#232323]"
  >
    <redberry-word-icon />
    <div>
      <h1 class="text-[2.5rem] font-leading-10 font-bold font-anonymus-pro">
        {{ page }}/4
      </h1>
    </div>
  </header>
</template>

<script>
import RedberryWordIcon from "../icons/RedberryWordIcon.vue";

export default {
  props: {
    page: Number,
  },
  components: {
    RedberryWordIcon,
  },
};
</script>
