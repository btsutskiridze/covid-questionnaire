<template>
  <base-input
    name="first_name"
    label-value="სახელი"
    placeholder="სახელი"
    class="mt-11"
    :input-rule="validateFirstname"
  />
</template>

<script>
import BaseInput from "@/components/UI/form/BaseInput.vue";
export default {
  components: { BaseInput },
  methods: {
    validateFirstname(value) {
      if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/.test(value)) {
        return "სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს";
      }

      if (!/^[ა-ჰ]*$/.test(value)) {
        return "გთხოვთ თქვენი სახელი შეივანოთ ქართული ასოებით";
      }

      if (!value || value.length < 3) {
        return "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან";
      }

      if (value.length > 255) {
        return "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
      }

      return true;
    },
  },
};
</script>
