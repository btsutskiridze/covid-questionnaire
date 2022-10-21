<template>
  <base-question-layout>
    <p>
      რა სიხშირით შეიძლება გვქონდეს საერთო <br />
      არაფორმალური ონლაინ შეხვედრები, სადაც ყველა <br />
      სურვილისამებრ ჩაერთვება?*
    </p>
    <template #options>
      <base-radio
        value="twice_a_week"
        name="non_formal_meetings"
        label-value="კვირაში ორჯერ"
      />
      <base-radio
        value="once_a_week"
        name="non_formal_meetings"
        label-value="კვირაში ერთხელ"
      />
      <base-radio
        value="once_in_two_weeks"
        name="non_formal_meetings"
        label-value="ორ კვირაში ერთხელ"
      />
      <base-radio
        value="once_a_month"
        name="non_formal_meetings"
        label-value="თვეში ერთხელ"
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
};
</script>
