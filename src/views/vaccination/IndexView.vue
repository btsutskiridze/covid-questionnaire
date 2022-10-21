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
import { mapActions, mapState } from "vuex";

export default {
  components: {
    HadVaccine,
    VaccinationStage,
    VaccinationStage2,
    VeeForm,
  },

  mounted() {
    this.setHadVaccine(localStorage.getItem("hadVaccine") ? true : false);

    this.setOnlyFirstVaccine(
      localStorage.getItem("onlyFirstVaccine") ? true : false
    );

    this.setNotPlanningVaccine(
      localStorage.getItem("notPlanningVaccine") ? true : false
    );

    this.setPlanningVaccine(
      localStorage.getItem("planningVaccine") ? true : false
    );
  },
  computed: {
    ...mapState("vaccination", [
      "hadVaccine",
      "onlyFirstVaccine",
      "notPlanningVaccine",
      "planningVaccine",
    ]),
  },
  methods: {
    ...mapActions("vaccination", [
      "setHadVaccine",
      "setOnlyFirstVaccine",
      "setNotPlanningVaccine",
      "setPlanningVaccine",
      "validateThirdPage",
    ]),

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
        this.validateThirdPage();
        this.$router.push({ name: "suggestions" });
      }
    },
  },
};
</script>
