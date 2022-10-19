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

export default {
  components: {
    BaseRadio,
  },
  computed: {
    hadVaccine: {
      get() {
        return this.$store.state.vaccination.hadVaccine;
      },
      set(value) {
        this.$store.state.vaccination.hadVaccine = value;
      },
    },
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
  },
};
</script>
