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
      if (!value || value.length < 4) {
        return "Please enter correct name";
      }
      return true;
    },
    validateLastname(value) {
      if (!value || value.length < 4) {
        return "Please enter correct lastname";
      }
      return true;
    },
    validateEmail(value) {
      if (!value || value.length < 4) {
        return "Please enter correct email";
      }
      return true;
    },
    onsubmit(values) {
      for (let key in values) {
        this.$store.commit("addData", {
          key,
          value: values[key],
        });
      }
      this.$store.dispatch("validateFirstPage");
      this.$router.push({ name: "questionnaire" });
    },
  },
};
</script>
