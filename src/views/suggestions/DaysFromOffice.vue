<template>
  <base-question-layout>
    <p>
      კვირაში რამდენი დღე ისურვებდი <br />
      ოფისიდან მუშაობას?*
    </p>
    <template #options>
      <base-radio value="0" name="number_of_days_from_office" label-value="0" />
      <base-radio value="1" name="number_of_days_from_office" label-value="1" />
      <base-radio value="2" name="number_of_days_from_office" label-value="2" />
      <base-radio value="3" name="number_of_days_from_office" label-value="3" />
      <base-radio value="4" name="number_of_days_from_office" label-value="4" />
      <base-radio value="5" name="number_of_days_from_office" label-value="5" />
    </template>
  </base-question-layout>
</template>

<script>
import BaseRadio from "@/components/UI/form/BaseRadio.vue";

export default {
  components: {
    BaseRadio,
  },
};
</script>
