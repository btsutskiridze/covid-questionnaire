<template>
  <div
    class="flex flex-col justify-center items-center gap-16 h-screen bg-[#EAEAEA]"
  >
    <redberry-icon />
    <router-link :to="{ name: 'identification' }">
      <p
        class="relative font-bold tracking-wide text-[#232323] text-3xl leading-9 text-center z-10 cursor-pointer"
        @mouseover="show = true"
        @mouseleave="show = false"
      >
        კითხვარის <br />
        დაწყება
        <transition name="fade">
          <span
            v-if="show"
            class="absolute top-0 left-0 z-[-2] translate-x-[2px] text-[#eaeaea] text-stroke-1 text-stroke-color-main"
          >
            კითხვარის <br />
            დაწყება
          </span>
        </transition>
      </p>
    </router-link>
  </div>
</template>

<script>
import RedberryIcon from "../components/icons/RedberryIcon.vue";
import { ref } from "vue";

export default {
  components: {
    RedberryIcon,
  },
  setup() {
    const show = ref(false);
    return { show };
  },
};
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  transform: translateX(0px);
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  transform: translateX(2px);
  opacity: 1;
}

.fade-enter-active {
  transition: all 0.1s ease-out;
}

.fade-leave-active {
  transition: all 0.2s ease-out;
}
</style>
