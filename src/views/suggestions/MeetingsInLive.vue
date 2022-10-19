<template>
  <base-question-layout>
    <p>რას ფიქრობ ფიზიკურ შეკრებებზე?</p>
    <template #options>
      <base-textarea name="what_about_meetings_in_live"></base-textarea>
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
