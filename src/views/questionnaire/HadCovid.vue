<template>
  <base-question-layout>
    <p>გაქვს გადატანილი Covid-19?*</p>
    <template #options>
      <base-radio
        value="yes"
        name="had_covid"
        label-value="კი"
        @click="firstQuestion"
      />
      <base-radio
        value="no"
        name="had_covid"
        label-value="არა"
        @click="firstQuestion"
      />
      <base-radio
        value="now"
        name="had_covid"
        label-value="ახლა მაქვს"
        @click="firstQuestion"
      />
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
    ...mapState("questionnaire", ["hadCovid", "hadAntibodyTest"]),
  },
  methods: {
    ...mapActions("questionnaire", ["setHadAntibodyTest", "setHadCovid"]),
    firstQuestion(e) {
      if (e.target.checked && e.target.value === "yes") {
        localStorage.setItem("hadCovid", e.target.value);
        this.setHadCovid(true);
      } else {
        this.setHadCovid(false);
        localStorage.removeItem("hadCovid");

        this.setHadAntibodyTest(null);
        localStorage.removeItem("hadAntibodyTest");
        localStorage.removeItem("had_antibody_test");
      }
    },
  },
};
</script>
