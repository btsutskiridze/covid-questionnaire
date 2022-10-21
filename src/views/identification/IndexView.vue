<template>
  <VeeForm id="vee-form" @submit="onsubmit">
    <base-questions-container page="1">
      <first-name />
      <last-name />
      <user-email />
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
import FirstName from "@/views/identification/FirstName.vue";
import LastName from "@/views/identification/LastName.vue";
import UserEmail from "@/views/identification/UserEmail.vue";
import { Form as VeeForm } from "vee-validate";
import { mapActions } from "vuex";

export default {
  components: {
    FirstName,
    LastName,
    UserEmail,
    VeeForm,
  },
  methods: {
    ...mapActions("identification", ["validateFirstPage"]),
    onsubmit(values) {
      for (let key in values) {
        localStorage.setItem(key, values[key]);
      }
      this.validateFirstPage();
      this.$router.push({ name: "questionnaire" });
    },
  },
};
</script>
