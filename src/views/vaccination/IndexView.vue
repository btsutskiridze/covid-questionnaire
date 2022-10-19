<template>
  <VeeForm @submit="onsubmit">
    <base-questions-container page="3">
      <had-vaccine />
      <vaccination-stage />
      <vaccination-stage-2 />
      <template #image>
        <img
          class="w-[84%] relative mt-8 left-[15%]"
          src="@/assets/images/vaccination-view.png"
          alt="vaccination-view"
        />
      </template>
      <template #arrows>
        <div class="flex justify-center fixed left-[45%] bottom-[10%] gap-28">
          <router-link :to="{ name: 'questionnaire' }">
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
import HadVaccine from "@/views/vaccination/HadVaccine.vue";
import VaccinationStage from "@/views/vaccination/VaccinationStage.vue";
import VaccinationStage2 from "@/views/vaccination/VaccinationStage2.vue";

import { Form as VeeForm } from "vee-validate";

export default {
  components: {
    HadVaccine,
    VaccinationStage,
    VaccinationStage2,
    VeeForm,
  },
  computed: {
    hadVaccine: {
      get() {
        return this.$store.state.vaccination.hadVaccine;
      },
      set(value) {
        this.$store.state.vaccination.hadVaccine = value;
      },
    },
    onlyFirstVaccine: {
      get() {
        return this.$store.state.vaccination.onlyFirstVaccine;
      },
      set(value) {
        this.$store.state.vaccination.onlyFirstVaccine = value;
      },
    },
    notPlanningVaccine: {
      get() {
        return this.$store.state.vaccination.notPlanningVaccine;
      },
      set(value) {
        this.$store.state.vaccination.notPlanningVaccine = value;
      },
    },
    planningVaccine: {
      get() {
        return this.$store.state.vaccination.planningVaccine;
      },
      set(value) {
        this.$store.state.vaccination.planningVaccine = value;
      },
    },
  },
  mounted() {
    this.hadVaccine = localStorage.getItem("hadVaccine") ? true : false;

    this.onlyFirstVaccine = localStorage.getItem("onlyFirstVaccine")
      ? true
      : false;

    this.notPlanningVaccine = localStorage.getItem("notPlanningVaccine")
      ? true
      : false;

    this.planningVaccine = localStorage.getItem("planningVaccine")
      ? true
      : false;
  },
  methods: {
    onsubmit() {
      const checked1 = document.querySelector(
        'input[name="had_vaccine"]:checked'
      );
      const checked2 = document.querySelector(
        'input[name="vaccination_stage"]:checked'
      );
      const checked3 = document.querySelector(
        'input[name="vaccination_stage_2"]:checked'
      );

      if ((checked1 && checked2) || (checked1 && checked3)) {
        this.$store.dispatch("vaccination/validateThirdPage");
        this.$router.push({ name: "suggestions" });
      }
    },
  },
};
</script>
