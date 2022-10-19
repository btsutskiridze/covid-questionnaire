<template>
  <base-question-layout
    v-if="this.$store.state.questionnaire.hadAntibodyTest === false"
  >
    <p>
      მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) <br />
      როდის გქონდა Covid-19*
    </p>
    <template #options>
      <div class="pl-2">
        <base-input
          name="covid_date"
          placeholder="დდ/თთ/წწ"
          @focusin="toggleType"
          @focusout="toggleType"
          :input-rule="covidDateValidation"
        />
      </div>
    </template>
  </base-question-layout>
</template>

<script>
import BaseInput from "@/components/UI/form/BaseInput.vue";
export default {
  components: {
    BaseInput,
  },
  computed: {
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
    toggleType(e) {
      e.target.type = e.target.type === "text" ? "date" : "text";
    },
    covidDateValidation(value) {
      if (this.hadAntibodyTest === true) return true;
      else {
        return this.$store.dispatch("questionnaire/dateValidation", value);
      }
    },
  },
};
</script>
