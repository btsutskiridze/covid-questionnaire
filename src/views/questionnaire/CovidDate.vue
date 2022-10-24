<template>
  <base-question-layout v-if="hadAntibodyTest === false">
    <p>
      მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) <br />
      როდის გქონდა Covid-19*
    </p>
    <template #options>
      <div class="pl-2">
        <base-input
          name="covid_sickness_date"
          placeholder="დდ/თთ/წწ"
          :input-rule="covidDateValidation"
          @keypress="onlyNumberKey"
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
    ...mapState("questionnaire", ["hadAntibodyTest"]),
  },
  methods: {
    ...mapActions("questionnaire", ["setHadAntibodyTest"]),
    ...mapActions("questionnaire", ["dateValidation"]),

    covidDateValidation(value) {
      if (this.hadAntibodyTest === true) return true;
      else {
        // Validates that the input string is a valid date formatted as "mm/dd/yyyy"
        // First check for the pattern
        if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(value))
          return "გთხოვთ შეიყვანოთ თარიღი 'დდ/თთ/წწწწ' ფორმატში";

        // Parse the date parts to integers
        var parts = value.split("/");
        var day = parseInt(parts[1], 10);
        var month = parseInt(parts[0], 10);
        var year = parseInt(parts[2], 10);

        // Check the ranges of month and year
        if (year < 2020 || year > 2022 || month == 0 || month > 12)
          return "გთხოვთ შეიყვანოთ სწორი თარიღი";

        var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        // Adjust for leap years
        if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
          monthLength[1] = 29;

        // Check the range of the day
        return day > 0 && day <= monthLength[month - 1]
          ? true
          : "გთხოვთ შეიყვანოთ სწორი თარიღი";
      }
    },

    onlyNumberKey(evt) {
      var theEvent = evt || window.event;

      // Handle paste
      if (theEvent.type === "paste") {
        key = event.clipboardData.getData("text/plain");
      } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
      }
      var regex = /[0-9/]|/;
      if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
      }
    },
  },
};
</script>
