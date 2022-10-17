<template>
  <VeeForm id="vee-form" @submit="onsubmit">
    <base-questions-container page="1">
      <base-input
        name="fisrt_name"
        label-value="სახელი"
        placeholder="სახელი"
        class="mt-11"
        :input-rule="validateFirstname"
      />
      <base-input
        name="last_name"
        label-value="გვარი"
        placeholder="გვარი"
        :input-rule="validateLastname"
      />
      <base-input
        name="email"
        label-value="მეილი"
        type="email"
        placeholder="მეილი"
        :input-rule="validateEmail"
      />

      <div class="mt-14">
        <h3
          class="text-[#626262] pt-5 border-t-[0.8px] text-base font-normal border-[#626262] w-60 whitespace-nowrap"
        >
          *-ით მონიშნული ველების შევსება <br />
          სავალდებულოა
        </h3>
      </div>
      <template #image>
        <img
          class="w-100% relative top-[-3.1rem] left-4"
          src="@/assets/images/identification-view.png"
          alt="identification-view"
        />
      </template>
      <template #arrows>
        <div class="flex justify-center fixed left-[45%] bottom-[10%] gap-28">
          <router-link :to="{ name: 'home' }" class="invisible">
            <previous-arrow-icon />
          </router-link>
          <button>
            <next-arrow-icon />
          </button>
        </div>
      </template>
    </base-questions-container>
  </VeeForm>
</template>

<script>
import BaseInput from "@/components/UI/form/BaseInput.vue";
import { Form as VeeForm } from "vee-validate";
export default {
  components: {
    BaseInput,
    VeeForm,
  },
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
    validateEmail(value) {
      if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge\b/.test(value)) {
        return "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)";
      }
      return true;
    },
    onsubmit(values) {
      for (let key in values) {
        localStorage.setItem(key, values[key]);
      }
      this.$store.dispatch("validateFirstPage");
      this.$router.push({ name: "questionnaire" });
    },
  },
};
</script>
