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
export default {
  components: {
    BaseRadio,
  },

  computed: {
    hadCovid: {
      get() {
        return this.$store.state.questionnaire.hadCovid;
      },
      set(value) {
        this.$store.state.questionnaire.hadCovid = value;
      },
    },
    hadAntibodyTest: {
      get() {
        return this.$store.state.questionnaire.hadAntibodyTest;
      },
      set(value) {
        this.$store.state.questionnaire.hadAntibodyTest = value;
      },
    },
  },
  methods: {
    firstQuestion(e) {
      if (e.target.checked && e.target.value === "yes") {
        localStorage.setItem("hadCovid", e.target.value);
        this.hadCovid = true;
      } else {
        this.hadCovid = false;
        localStorage.removeItem("hadCovid");

        this.hadAntibodyTest = null;
        localStorage.removeItem("hadAntibodyTest");
        localStorage.removeItem("had_antibody_test");
      }
    },
  },
};
</script>
