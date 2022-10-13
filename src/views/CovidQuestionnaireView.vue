<template>
  <base-questions-container page="2">
    <div>
      <base-question-layout>
        <p>გაქვს გადატანილი Covid-19?*</p>
        <template #options>
          <base-radio value="yes" name="had_covid" label-value="კი" />
          <base-radio value="no" name="had_covid" label-value="არა" />
          <base-radio value="now" name="had_covid" label-value="ახლა მაქვს" />
        </template>
      </base-question-layout>
      <base-question-layout>
        <p>ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
        <template #options>
          <base-radio value="yes" name="had_antibody_test" label-value="კი" />
          <base-radio value="no" name="had_antibody_test" label-value="არა" />
        </template>
      </base-question-layout>
      <base-question-layout>
        <p class="leading-7 whitespace-nowrap">
          თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი <br />
          რიცხვი და ანტისხეულების რაოდენობა*
        </p>
        <template #options>
          <div class="pl-2">
            <base-input name="test_date" placeholder="რიცხვი" />
            <base-input name="number" placeholder="ანტისხეულების რაოდენობა" />
          </div>
        </template>
      </base-question-layout>
      <base-question-layout>
        <p>
          მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) <br />
          როდის გქონდა Covid-19*
        </p>
        <template #options>
          <div class="pl-2">
            <base-input name="test_date" placeholder="დდ/თთ/წწ" />
          </div>
        </template>
      </base-question-layout>
    </div>
    <template #image>
      <img
        class="w-100% relative top-[-1.1rem] left-4"
        src="@/assets/images/questionnaire-view-svg.svg"
        alt="identification image"
      />
    </template>
    <template #arrows>
      <div class="flex justify-center fixed left-[45%] bottom-[10%] gap-28">
        <router-link :to="{ name: 'identification' }">
          <previous-arrow-icon />
        </router-link>
        <router-link :to="{ name: 'vaccination' }">
          <next-arrow-icon />
        </router-link>
      </div>
    </template>
  </base-questions-container>
</template>

<script>
import BaseRadio from "@/components/UI/form/BaseRadio.vue";
import BaseInput from "@/components/UI/form/BaseInput.vue";

export default {
  components: {
    BaseRadio,
    BaseInput,
  },
};
</script>
