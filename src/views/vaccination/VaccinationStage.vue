<template>
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
        <a href="https://booking.moh.gov.ge/" class="text-[#1289AE] underline"
          >https://booking.moh.gov.ge/</a
        >
      </p>
    </template>
  </base-question-layout>
</template>

<script>
import BaseRadio from "@/components/UI/form/BaseRadio.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    BaseRadio,
  },
  computed: {
    ...mapState({
      hadVaccine: (state) => state.vaccination.hadVaccine,
      onlyFirstVaccine: (state) => state.vaccination.onlyFirstVaccine,
    }),
  },
  methods: {
    ...mapActions({
      setHadVaccine: "vaccination/setHadVaccine",
      setOnlyFirstVaccine: "vaccination/setOnlyFirstVaccine",
    }),
    secondQuestion(e) {
      if (
        e.target.checked &&
        e.target.value === "first_dosage_and_not_registered_on_the_second"
      ) {
        localStorage.setItem("onlyFirstVaccine", "true");
        this.setOnlyFirstVaccine(true);
      } else {
        localStorage.removeItem("onlyFirstVaccine");
        this.setOnlyFirstVaccine(false);
      }
    },
  },
};
</script>
