<template>
  <base-question-layout v-if="hadVaccine === false">
    <p>რას ელოდები?*</p>
    <template #options>
      <base-radio
        value="registered_and_waiting"
        name="vaccination_stage_2"
        label-value="დარეგისტრირებული ვარ და ველოდები რიცხვს"
        @click="thirdQuestion"
      />
      <base-radio
        value="not_planning"
        name="vaccination_stage_2"
        label-value="არ ვგეგმავ"
        @click="thirdQuestion"
      />
      <base-radio
        value="had_covid_and_planning_to_be_vaccinated"
        name="vaccination_stage_2"
        label-value="გადატანილი მაქვს და ვგეგმავ აცრას"
        @click="thirdQuestion"
      />
      <p class="text-xl font-normal ml-11 mt-10" v-if="planningVaccine">
        ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br />
        თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება. <br /><br />
        👉 რეგისტრაციის ბმული

        <a href="https://booking.moh.gov.ge/" class="text-[#1289AE] underline"
          >https://booking.moh.gov.ge/</a
        >
      </p>
      <p class="text-xl font-normal ml-11 mt-10" v-if="notPlanningVaccine">
        👉
        <a href="https://booking.moh.gov.ge/" class="text-[#1289AE] underline"
          >https://booking.moh.gov.ge/</a
        >
      </p>
    </template>
  </base-question-layout>
</template>

<script>
import BaseRadio from "@/components/UI/form/BaseRadio.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    BaseRadio,
  },
  computed: {
    ...mapState("vaccination", [
      "hadVaccine",
      "notPlanningVaccine",
      "planningVaccine",
    ]),
  },
  methods: {
    ...mapActions("vaccination", [
      "setHadVaccine",
      "setNotPlanningVaccine",
      "setPlanningVaccine",
    ]),
    thirdQuestion(e) {
      if (e.target.checked && e.target.value === "not_planning") {
        localStorage.setItem("notPlanningVaccine", "true");
        this.setNotPlanningVaccine(true);

        localStorage.removeItem("planningVaccine");
        this.setPlanningVaccine(false);
      } else if (
        e.target.checked &&
        e.target.value === "had_covid_and_planning_to_be_vaccinated"
      ) {
        localStorage.setItem("planningVaccine", "true");
        this.setPlanningVaccine(true);

        localStorage.removeItem("notPlanningVaccine");
        this.setNotPlanningVaccine(false);
      } else {
        localStorage.removeItem("planningVaccine");
        this.setPlanningVaccine(false);

        localStorage.removeItem("notPlanningVaccine");
        this.setNotPlanningVaccine(false);
      }
    },
  },
};
</script>
