<template>
  <VeeForm @submit="onsubmit">
    <base-questions-container page="2">
      <div>
        <had-covid />
        <had-antibody-test />
        <test-date-and-number />
        <covid-date />
      </div>
      <template #image>
        <img
          class="w-[98%] relative top-[-1.1rem] left-4 z-40"
          src="@/assets/images/questionnaire-view.png"
          alt="questionnaire-view"
        />
        <questionnaire-circle-icon
          class="absolute top-[25%] left-[48.4%] transition-all duration-75 ease-in-out"
          v-motion
          :initial="{ opacity: 0, x: 300, y: -100, width: 200, height: 200 }"
          :enter="{ opacity: 1, x: 0, y: 0, height: 229, width: 229 }"
        />
      </template>
      <template #arrows>
        <div
          class="flex justify-center fixed left-[45%] bottom-[10%] gap-28 z-50"
        >
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
import QuestionnaireCircleIcon from "@/components/icons/views/QuestionnaireCircleIcon.vue";
import HadCovid from "@/views/questionnaire/HadCovid.vue";
import HadAntibodyTest from "@/views/questionnaire/HadAntibodyTest.vue";
import TestDateAndNumber from "@/views/questionnaire/TestDateAndNumber.vue";
import CovidDate from "@/views/questionnaire/CovidDate.vue";
import { Form as VeeForm } from "vee-validate";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    QuestionnaireCircleIcon,
    HadCovid,
    HadAntibodyTest,
    TestDateAndNumber,
    CovidDate,
    VeeForm,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("questionnaire", ["hadCovid", "hadAntibodyTest"]),
  },

  mounted() {
    if (localStorage.getItem("hadCovid")) {
      this.setHadCovid(true);
    }
    if (localStorage.getItem("hadAntibodyTest") === "true") {
      this.setHadAntibodyTest(true);
    } else if (localStorage.getItem("hadAntibodyTest") === "false") {
      this.setHadAntibodyTest(false);
    }
  },

  methods: {
    ...mapActions("questionnaire", [
      "setHadAntibodyTest",
      "setHadCovid",
      "validateSecondPage",
    ]),

    onsubmit() {
      const checked1 = document.querySelector('input[name="had_covid"]:checked')
        ? document.querySelector('input[name="had_covid"]:checked')
        : null;
      const checked2 = document.querySelector(
        'input[name="had_antibody_test"]:checked'
      )
        ? document.querySelector('input[name="had_antibody_test"]:checked')
        : null;

      if (checked1) {
        if (
          (checked1.value === "yes" && checked2) ||
          checked1.value === "no" ||
          checked1.value == "now"
        ) {
          this.validateSecondPage();
          this.$router.push({ name: "vaccination" });
        }
      }
    },
  },
};
</script>
