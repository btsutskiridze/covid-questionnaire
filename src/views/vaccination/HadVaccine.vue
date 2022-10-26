<template>
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
</template>

<script>
import BaseRadio from "@/components/UI/form/BaseRadio.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    BaseRadio,
  },
  computed: {
    ...mapState("vaccination", ["hadVaccine"]),
  },
  methods: {
    ...mapActions("vaccination", ["setHadVaccine"]),
    firstQuestion(e) {
      if (e.target.checked && e.target.value === "true") {
        localStorage.setItem("hadVaccine", e.target.value);
        this.setHadVaccine(true);
      } else if (e.target.checked) {
        this.setHadVaccine(false);
        localStorage.setItem("hadVaccine", e.target.value);
        // this.hadAntibodyTest = null;
        // localStorage.removeItem("hadAntibodyTest");
        // localStorage.removeItem("had_antibody_test");
      } else {
        localStorage.removeItem("hadVaccine");
      }
    },
  },
};
</script>
