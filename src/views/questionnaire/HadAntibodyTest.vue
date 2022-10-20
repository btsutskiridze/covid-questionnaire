<template>
  <base-question-layout v-if="hadCovid">
    <p>ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
    <template #options>
      <base-radio
        value="true"
        name="had_antibody_test"
        label-value="კი"
        @click="secondQuestion"
      />
      <base-radio
        value="false"
        name="had_antibody_test"
        label-value="არა"
        @click="secondQuestion"
      />
    </template>
  </base-question-layout>
</template>

<script>
import BaseRadio from "@/components/UI/form/BaseRadio.vue";
import { mapMutations, mapState } from "vuex";
export default {
  components: {
    BaseRadio,
  },
  computed: {
    ...mapState({
      hadCovid: (state) => state.questionnaire.hadCovid,
      hadAntibodyTest: (state) => state.questionnaire.hadAntibodyTest,
    }),
  },
  methods: {
    ...mapMutations({
      setHadCovid: "questionnaire/setHadCovid",
      setHadAntibodyTest: "questionnaire/setHadAntibodyTest",
    }),
    secondQuestion(e) {
      if (e.target.checked && e.target.value === "true") {
        localStorage.setItem("hadAntibodyTest", e.target.value);
        this.setHadAntibodyTest(true);
      } else {
        localStorage.setItem("hadAntibodyTest", e.target.value);
        this.setHadAntibodyTest(false);
      }
    },
  },
};
</script>
