<template>
  <VeeForm @submit="onsubmit">
    <base-questions-container page="2">
      <div>
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
      </div>
      <template #image>
        <img
          class="w-[98%] relative top-[-1.1rem] left-4"
          src="@/assets/images/questionnaire-view.png"
          alt="questionnaire-view"
        />
      </template>
      <template #arrows>
        <div class="flex justify-center fixed left-[45%] bottom-[10%] gap-28">
          <router-link :to="{ name: 'identification' }">
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
import BaseRadio from "@/components/UI/form/BaseRadio.vue";
import BaseInput from "@/components/UI/form/BaseInput.vue";
import { Form as VeeForm } from "vee-validate";

export default {
  components: {
    BaseRadio,
    BaseInput,
    VeeForm,
  },
  data() {
    return {
      hadCovid: false,
      hadAntibodyTest: null,
    };
  },
  mounted() {
    if (localStorage.getItem("hadCovid")) {
      this.hadCovid = true;
    }
    if (localStorage.getItem("hadAntibodyTest") === "true") {
      this.hadAntibodyTest = true;
    } else if (localStorage.getItem("hadAntibodyTest") === "false") {
      this.hadAntibodyTest = false;
    }
  },

  methods: {
    toggleType(e) {
      e.target.type = e.target.type === "text" ? "date" : "text";
    },
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
    secondQuestion(e) {
      if (e.target.checked && e.target.value === "true") {
        localStorage.setItem("hadAntibodyTest", e.target.value);
        this.hadAntibodyTest = true;
      } else {
        localStorage.setItem("hadAntibodyTest", e.target.value);
        this.hadAntibodyTest = false;
      }
    },

    testDateValidation(value) {
      if (!this.hadAntibodyTest || this.hadAntibodyTest === null) return true;
      else {
        return this.$store.dispatch("dateValidation", value);
      }
    },
    numberValidation(value) {
      if (!this.hadAntibodyTest || this.hadAntibodyTest === null) return true;
      else if (!/^[0-9]+$/.test(value) || !value) {
        return "გთხოვთ მიუთითოთ სწორი ანტისხეულების რაოდენობა";
      }
      return true;
    },

    covidDateValidation(value) {
      if (this.hadAntibodyTest === true) return true;
      else {
        return this.$store.dispatch("dateValidation", value);
      }
    },

    onsubmit() {
      console.log("helo");
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
