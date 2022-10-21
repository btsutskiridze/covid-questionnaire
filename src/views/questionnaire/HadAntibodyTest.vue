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
import { mapActions, mapState } from "vuex";
export default {
  components: {
    BaseRadio,
  },
  computed: {
    ...mapState("questionnaire", ["hadCovid", "hadAntibodyTest"]),
  },
  methods: {
    ...mapActions("questionnaire", ["setHadAntibodyTest", "setHadCovid"]),
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
