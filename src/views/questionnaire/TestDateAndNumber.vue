<template>
  <base-question-layout v-if="hadAntibodyTest">
    <p class="leading-7 whitespace-nowrap">
      თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი <br />
      რიცხვი და ანტისხეულების რაოდენობა*
    </p>
    <template #options>
      <div class="pl-2">
        <base-input
          name="test_date"
          placeholder="რიცხვი"
          @focusin="toggleType"
          @focusout="toggleType"
          :input-rule="testDateValidation"
        />
        <base-input
          name="number"
          placeholder="ანტისხეულების რაოდენობა"
          :input-rule="numberValidation"
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

    testDateValidation(value) {
      if (!this.hadAntibodyTest || this.hadAntibodyTest === null) return true;
      else {
        return this.dateValidation(value);
      }
    },
    numberValidation(value) {
      if (!this.hadAntibodyTest || this.hadAntibodyTest === null) return true;
      else if (!/^[0-9]+$/.test(value) || !value) {
        return "გთხოვთ მიუთითოთ სწორი ანტისხეულების რაოდენობა";
      }
      return true;
    },
  },
};
</script>

<style>
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
}
</style>
