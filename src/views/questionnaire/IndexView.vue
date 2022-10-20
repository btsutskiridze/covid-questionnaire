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
import HadCovid from "@/views/questionnaire/HadCovid.vue";
import HadAntibodyTest from "@/views/questionnaire/HadAntibodyTest.vue";
import TestDateAndNumber from "@/views/questionnaire/TestDateAndNumber.vue";
import CovidDate from "@/views/questionnaire/CovidDate.vue";
import { Form as VeeForm } from "vee-validate";
import { mapActions, mapState } from "vuex";

export default {
  components: {
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
    ...mapState({
      hadCovid: (state) => state.questionnaire.hadCovid,
      hadAntibodyTest: (state) => state.questionnaire.hadAntibodyTest,
    }),
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
    ...mapActions({
      setHadCovid: "questionnaire/setHadCovid",
      setHadAntibodyTest: "questionnaire/setHadAntibodyTest",
      validatePage: "questionnaire/validateSecondPage",
    }),
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
          this.validatePage();
          this.$router.push({ name: "vaccination" });
        }
      }
    },
  },
};
</script>
