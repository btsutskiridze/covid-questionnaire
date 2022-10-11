<template>
  <div class="h-screen bg-[#232323] flex flex-col justify-center items-center">
    <div>
      <div class="flex justify-start mb-8 ml-8">
        <big-star-icon />
      </div>
      <div>
        <thank-you-text-icon />
      </div>
      <div class="flex justify-end mt-8 mr-8">
        <small-star-icon />
      </div>
    </div>
  </div>
</template>

<script>
import ThankYouTextIcon from "../components/icons/ThankYouTextIcon.vue";
import BigStarIcon from "../components/icons/BigStarIcon.vue";
import SmallStarIcon from "../components/icons/SmallStarIcon.vue";
export default {
  components: {
    ThankYouTextIcon,
    BigStarIcon,
    SmallStarIcon,
  },
};
</script>
