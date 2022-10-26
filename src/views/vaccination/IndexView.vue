<template>
  <VeeForm @submit="onsubmit">
    <base-questions-container page="3">
      <had-vaccine />
      <vaccination-stage />
      <vaccination-stage-2 />
      <template #image>
        <img
          class="w-[84%] relative mt-8 left-[15%] z-40"
          src="@/assets/images/vaccination-view.png"
          alt="vaccination-view"
        />
        <vaccination-star-icon
          class="absolute top-[2%] left-[54%] transition-all duration-75 ease-in-out"
          v-motion
          :initial="{ opacity: 0, x: -100, y: 400, width: 200, height: 200 }"
          :enter="{ opacity: 1, x: 0, y: 0, height: 313, width: 288 }"
        />
      </template>
      <template #arrows>
        <div
          class="flex justify-center fixed left-[45%] bottom-[10%] gap-28 z-50"
        >
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
import VaccinationStarIcon from "@/components/icons/views/VaccinationStarIcon.vue";
import HadVaccine from "@/views/vaccination/HadVaccine.vue";
import VaccinationStage from "@/views/vaccination/VaccinationStage.vue";
import VaccinationStage2 from "@/views/vaccination/VaccinationStage2.vue";

import { Form as VeeForm } from "vee-validate";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    VaccinationStarIcon,
    HadVaccine,
    VaccinationStage,
    VaccinationStage2,
    VeeForm,
  },

  mounted() {
    if (localStorage.getItem("hadVaccine") === "true") {
      this.setHadVaccine(true);
    } else if (localStorage.getItem("hadVaccine") === "false") {
      this.setHadVaccine(false);
    } else {
      this.setHadVaccine(null);
    }

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
