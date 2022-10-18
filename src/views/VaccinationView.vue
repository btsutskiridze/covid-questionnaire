<template>
  <VeeForm @submit="onsubmit">
    <base-questions-container page="3">
      <base-question-layout>
        <p>უკვე აცრილი ხარ?*</p>
        <template #options>
          <base-radio
            value="true"
            name="had_vaccine"
            label-value="კი"
            @click="firstQuestion"
          />
          <base-radio
            value="false"
            name="had_vaccine"
            label-value="არა"
            @click="firstQuestion"
          />
        </template>
      </base-question-layout>
      <base-question-layout v-if="hadVaccine">
        <p>აირჩიე რა ეტაპზე ხარ*</p>
        <template #options>
          <base-radio
            value="first_dosage_and_registered_on_the_second"
            name="vaccination_stage"
            label-value="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
            @click="secondQuestion"
          />
          <base-radio
            value="fully_vaccinated"
            name="vaccination_stage"
            label-value="სრულად აცრილი ვარ"
            @click="secondQuestion"
          />
          <base-radio
            value="first_dosage_and_not_registered_on_the_second"
            name="vaccination_stage"
            label-value="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
            @click="secondQuestion"
          />
          <p class="text-xl font-normal ml-11 mt-10" v-if="onlyFirstVaccine">
            რომ არ გადადო, <br />
            ბარემ ახლავე დარეგისტრირდი <br />
            <a
              href="https://booking.moh.gov.ge/"
              class="text-[#1289AE] underline"
              >https://booking.moh.gov.ge/</a
            >
          </p>
        </template>
      </base-question-layout>
      <base-question-layout v-show="hadVaccine === false">
        <p>რას ელოდები?*</p>
        <template #options>
          <base-radio
            value="registered_and_waiting_for_the_date"
            name="vaccination_stage_2"
            label-value="დარეგისტრირებული ვარ და ველოდები რიცხვს"
            @click="thirdQuestion"
          />
          <base-radio
            value="not_planning"
            name="vaccination_stage_2"
            label-value="არ ვგეგმავ"
            @click="thirdQuestion"
          />
          <base-radio
            value="had_covid_and_planning_to_get_vaccinated"
            name="vaccination_stage_2"
            label-value="გადატანილი მაქვს და ვგეგმავ აცრას"
            @click="thirdQuestion"
          />
          <p class="text-xl font-normal ml-11 mt-10" v-if="notPlanningVaccine">
            ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br />
            თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება. <br /><br />
            👉 რეგისტრაციის ბმული

            <a
              href="https://booking.moh.gov.ge/"
              class="text-[#1289AE] underline"
              >https://booking.moh.gov.ge/</a
            >
          </p>
          <p class="text-xl font-normal ml-11 mt-10" v-if="planningVaccine">
            👉
            <a
              href="https://booking.moh.gov.ge/"
              class="text-[#1289AE] underline"
              >https://booking.moh.gov.ge/</a
            >
          </p>
        </template>
      </base-question-layout>
      <template #image>
        <img
          class="w-[84%] relative mt-8 left-[15%]"
          src="@/assets/images/vaccination-view.png"
          alt="vaccination-view"
        />
      </template>
      <template #arrows>
        <div class="flex justify-center fixed left-[45%] bottom-[10%] gap-28">
          <router-link :to="{ name: 'questionnaire' }">
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
import BaseQuestionLayout from "@/components/UI/BaseQuestionLayout.vue";
import { Form as VeeForm } from "vee-validate";

export default {
  components: {
    BaseRadio,
    BaseQuestionLayout,
    VeeForm,
  },
  data() {
    return {
      hadVaccine: null,
      onlyFirstVaccine: false,
      notPlanningVaccine: false,
      planningVaccine: false,
    };
  },
  mounted() {
    this.hadVaccine = localStorage.getItem("hadVaccine") ? true : false;

    this.onlyFirstVaccine = localStorage.getItem("onlyFirstVaccine")
      ? true
      : false;

    this.notPlanningVaccine = localStorage.getItem("notPlanningVaccine")
      ? true
      : false;

    this.planningVaccine = localStorage.getItem("planningVaccine")
      ? true
      : false;
  },
  methods: {
    firstQuestion(e) {
      if (e.target.checked && e.target.value === "true") {
        localStorage.setItem("hadVaccine", e.target.value);
        this.hadVaccine = true;
      } else {
        this.hadVaccine = false;
        localStorage.removeItem("hadVaccine");

        // this.hadAntibodyTest = null;
        // localStorage.removeItem("hadAntibodyTest");
        // localStorage.removeItem("had_antibody_test");
      }
    },
    secondQuestion(e) {
      if (
        e.target.checked &&
        e.target.value === "first_dosage_and_not_registered_on_the_second"
      ) {
        localStorage.setItem("onlyFirstVaccine", "true");
        this.onlyFirstVaccine = true;
      } else {
        localStorage.removeItem("onlyFirstVaccine");
        this.onlyFirstVaccine = false;
      }
    },
    thirdQuestion(e) {
      if (e.target.checked && e.target.value === "not_planning") {
        localStorage.setItem("notPlanningVaccine", "true");
        this.notPlanningVaccine = true;

        localStorage.removeItem("planningVaccine");
        this.planningVaccine = false;
      } else if (
        e.target.checked &&
        e.target.value === "had_covid_and_planning_to_get_vaccinated"
      ) {
        localStorage.setItem("planningVaccine", "true");
        this.planningVaccine = true;

        localStorage.removeItem("notPlanningVaccine");
        this.notPlanningVaccine = false;
      } else {
        localStorage.removeItem("planningVaccine");
        this.planningVaccine = false;

        localStorage.removeItem("notPlanningVaccine");
        this.notPlanningVaccine = false;
      }
    },
    onsubmit() {
      const checked1 = document.querySelector(
        'input[name="had_vaccine"]:checked'
      );
      const checked2 = document.querySelector(
        'input[name="vaccination_stage"]:checked'
      );
      const checked3 = document.querySelector(
        'input[name="vaccination_stage_2"]:checked'
      );

      if ((checked1 && checked2) || (checked1 && checked3)) {
        this.$store.dispatch("vaccination/validateThirdPage");
        this.$router.push({ name: "suggestions" });
      }
    },
  },
};
</script>
