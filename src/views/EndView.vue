<template>
  <div
    class="h-screen bg-[#232323] flex flex-col justify-center items-center transition-all duration-75 ease-in-out"
  >
    <div>
      <div class="flex justify-start mb-8 ml-8">
        <big-star-icon
          class="transition-all duration-500 ease-in-out"
          v-motion
          :initial="{ opacity: 0, x: 100, y: 75, width: 10, height: 10 }"
          :enter="{ opacity: 1, x: 0, y: 0, height: 53, width: 53 }"
        />
      </div>
      <div>
        <thank-you-text-icon
          class="transition-all duration-75 ease-in-out"
          v-motion
          :initial="{ opacity: 0, x: 0, y: 0, width: 10, height: 10 }"
          :enter="{ opacity: 1, x: 0, y: 0, height: 50, width: 439 }"
        />
      </div>
      <div class="flex justify-end mt-8 mr-8">
        <small-star-icon
          class="transition-all duration-500 ease-in-out"
          v-motion
          :initial="{ opacity: 0, x: -100, y: -75, width: 10, height: 10 }"
          :enter="{ opacity: 1, x: 0, y: 0, height: 33, width: 33 }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ThankYouTextIcon from "@/components/icons/ThankYouTextIcon.vue";
import BigStarIcon from "@/components/icons/BigStarIcon.vue";
import SmallStarIcon from "@/components/icons/SmallStarIcon.vue";
export default {
  components: {
    ThankYouTextIcon,
    BigStarIcon,
    SmallStarIcon,
  },
};
</script>
