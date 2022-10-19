<template>
  <base-input
    name="last_name"
    label-value="გვარი"
    placeholder="გვარი"
    :input-rule="validateLastname"
  />
</template>

<script>
import BaseInput from "@/components/UI/form/BaseInput.vue";
export default {
  components: { BaseInput },
  methods: {
    validateLastname(value) {
      if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/.test(value)) {
        return "გვარის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს";
      }

      if (!/^[ა-ჰ]*$/.test(value)) {
        return "გთხოვთ თქვენი გვარი შეივანოთ ქართული ასოებით";
      }

      if (!value || value.length < 3) {
        return "გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან";
      }

      if (value.length > 255) {
        return "გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
      }

      return true;
    },
  },
};
</script>
