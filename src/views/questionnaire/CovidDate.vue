<template>
  <base-question-layout v-if="hadAntibodyTest === false">
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
import { mapActions, mapState } from "vuex";

export default {
  components: {
    BaseInput,
  },
  computed: {
    ...mapState({
      hadAntibodyTest: (state) => state.questionnaire.hadAntibodyTest,
    }),
  },
  methods: {
    ...mapActions({
      setHadAntibodyTest: "questionnaire/setHadAntibodyTest",
      dateValidation: "questionnaire/dateValidation",
    }),
    toggleType(e) {
      e.target.type = e.target.type === "text" ? "date" : "text";
    },
    covidDateValidation(value) {
      if (this.hadAntibodyTest === true) return true;
      else {
        return this.dateValidation(value);
      }
    },
  },
};
</script>
