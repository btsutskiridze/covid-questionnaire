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
          class="w-100% relative top-[-3.1rem] left-4 z-40"
          src="@/assets/images/identification-view.png"
          alt="identification-view"
        />
        <identification-square-icon
          class="absolute top-[22%] left-[50%] transition-all duration-75 ease-in-out"
          v-motion
          :initial="{ opacity: 0, y: 200, width: 40, height: 40 }"
          :enter="{ opacity: 1, y: 0, height: 75, width: 622 }"
        />
      </template>
      <template #arrows>
        <div
          class="flex justify-center fixed left-[45%] bottom-[10%] gap-28 z-50"
        >
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
import IdentificationSquareIcon from "@/components/icons/views/IdentificationSquareIcon.vue";
import FirstName from "@/views/identification/FirstName.vue";
import LastName from "@/views/identification/LastName.vue";
import UserEmail from "@/views/identification/UserEmail.vue";
import { Form as VeeForm } from "vee-validate";
import { mapActions } from "vuex";

export default {
  components: {
    IdentificationSquareIcon,
    FirstName,
    LastName,
    UserEmail,
    VeeForm,
  },
  methods: {
    ...mapActions({
      validatePage: "identification/validateFirstPage",
    }),
    onsubmit(values) {
      for (let key in values) {
        localStorage.setItem(key, values[key]);
      }
      this.validatePage();
      this.$router.push({ name: "questionnaire" });
    },
  },
};
</script>
