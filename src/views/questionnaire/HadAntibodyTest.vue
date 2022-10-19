<template>
  <base-question-layout v-if="hadCovid">
    <p>ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
    <template #options>
      <base-radio
        :value="true"
        name="had_antibody_test"
        label-value="კი"
        @click="secondQuestion"
      />
      <base-radio
        :value="false"
        name="had_antibody_test"
        label-value="არა"
        @click="secondQuestion"
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
    secondQuestion(e) {
      if (e.target.checked && e.target.value === "true") {
        localStorage.setItem("hadAntibodyTest", e.target.value);
        this.hadAntibodyTest = true;
      } else {
        localStorage.setItem("hadAntibodyTest", e.target.value);
        this.hadAntibodyTest = false;
      }
    },
  },
};
</script>
