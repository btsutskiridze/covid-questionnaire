<template>
  <base-input
    name="email"
    label-value="მეილი"
    type="email"
    placeholder="მეილი"
    :input-rule="validateEmail"
  />
</template>

<script>
import BaseInput from "@/components/UI/form/BaseInput.vue";
export default {
  components: { BaseInput },
  methods: {
    validateEmail(value) {
      if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge\b/.test(value)) {
        return "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)";
      }
      return true;
    },
  },
};
</script>
