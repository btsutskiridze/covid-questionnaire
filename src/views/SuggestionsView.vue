<template>
  <VeeForm @submit="onsubmit">
    <base-questions-container page="4">
      <p class="text-xl font-normal mt-10">
        რედბერის მთავარი ღირებულება ჩვენი გუნდის <br />
        თითოეული წევრია. გარემო, რომელსაც ჩვენი <br />
        თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა <br />
        წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის <br />
        მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის. <br /><br />
        პანდემიის პერიოდში ერთმანეთსაც იშვიათად <br />ვნახულობთ პირისპირ და
        ყოველდღიური კომუნიკაციაც გაიშვიათდა.
      </p>
      <base-question-layout v-show="true">
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
      <base-question-layout v-show="true">
        <p>
          კვირაში რამდენი დღე ისურვებდი <br />
          ოფისიდან მუშაობას?*
        </p>
        <template #options>
          <base-radio
            value="0"
            name="number_of_days_from_office"
            label-value="0"
          />
          <base-radio
            value="1"
            name="number_of_days_from_office"
            label-value="1"
          />
          <base-radio
            value="2"
            name="number_of_days_from_office"
            label-value="2"
          />
          <base-radio
            value="3"
            name="number_of_days_from_office"
            label-value="3"
          />
          <base-radio
            value="4"
            name="number_of_days_from_office"
            label-value="4"
          />
          <base-radio
            value="5"
            name="number_of_days_from_office"
            label-value="5"
          />
        </template>
      </base-question-layout>
      <base-question-layout>
        <p>რას ფიქრობ ფიზიკურ შეკრებებზე?</p>
        <template #options>
          <base-textarea name="what_about_meetings_in_live"></base-textarea>
        </template>
      </base-question-layout>
      <base-question-layout>
        <p>
          რას ფიქრობ არსებულ გარემოზე: <br />
          რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
        </p>
        <template #options>
          <base-textarea name="tell_us_your_opinion_about_us"></base-textarea>
        </template>
      </base-question-layout>
      <div class="text-right">
        <button
          class="bg-[#208298] w-[11.2rem] mt-14 mb-44 py-4 px-7 rounded-[42px] text-white"
        >
          დასრულება
        </button>
      </div>
      <template #image>
        <img
          class="w-[76%] relative left-[16%] mt-[4.4rem]"
          src="@/assets/images/suggestions-view.png"
          alt="suggestions-view"
        />
      </template>
      <template #arrows>
        <div class="flex justify-center fixed left-[45%] bottom-[10%] gap-28">
          <router-link :to="{ name: 'vaccination' }">
            <previous-arrow-icon />
          </router-link>
          <router-link :to="{ name: 'vaccination' }" class="invisible">
            <next-arrow-icon />
          </router-link>
        </div>
      </template>
    </base-questions-container>
  </VeeForm>
</template>

<script>
import BaseRadio from "@/components/UI/form/BaseRadio.vue";
import BaseTextarea from "@/components/UI/form/BaseTextarea.vue";
import BaseQuestionLayout from "@/components/UI/BaseQuestionLayout.vue";
import { Form as VeeForm } from "vee-validate";

export default {
  components: {
    BaseRadio,
    BaseTextarea,
    BaseQuestionLayout,
    VeeForm,
  },
  methods: {
    onsubmit() {
      const checked1 = document.querySelector(
        'input[name="non_formal_meetings"]:checked'
      )
        ? document.querySelector('input[name="non_formal_meetings"]:checked')
        : null;
      const checked2 = document.querySelector(
        'input[name="number_of_days_from_office"]:checked'
      )
        ? document.querySelector(
            'input[name="number_of_days_from_office"]:checked'
          )
        : null;

      if (checked1 && checked2) {
        console.log("submit");

        this.$store.dispatch("identification/collectData");
        this.$store.dispatch("questionnaire/collectData");
        this.$store.dispatch("vaccination/collectData");
        this.$store.dispatch("suggestions/collectData");

        this.$store.dispatch("collectData");

        this.$store.dispatch("suggestions/validatefourthPage");
        this.$router.push({ name: "thankyou" });
      }
    },
  },
};
</script>
