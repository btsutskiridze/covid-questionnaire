<template>
  <base-question-layout>
    <p>
      რას ფიქრობ არსებულ გარემოზე: <br />
      რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
    </p>
    <template #options>
      <base-textarea name="tell_us_your_opinion_about_us"></base-textarea>
    </template>
  </base-question-layout>
</template>

<script>
import BaseTextarea from "@/components/UI/form/BaseTextarea.vue";

export default {
  components: {
    BaseTextarea,
  },
};
</script>
