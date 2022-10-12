<template>
  <base-questions-container page="3">
    <base-question-layout>
      <p>უკვე აცრილი ხარ?*</p>
      <template #options>
        <base-radio value="yes" name="had_vaccine" label-value="კი" />
        <base-radio value="no" name="had_vaccine" label-value="არა" />
      </template>
    </base-question-layout>
    <base-question-layout v-show="false">
      <p>აირჩიე რა ეტაპზე ხარ*</p>
      <template #options>
        <base-radio
          value="first_dosage_and_registered_on_the_second"
          name="vaccination_stage"
          label-value="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
        />
        <base-radio
          value="fully_vaccinated"
          name="vaccination_stage"
          label-value="სრულად აცრილი ვარ"
        />
        <base-radio
          value="first_dosage_and_not_registered_on_the_second"
          name="vaccination_stage"
          label-value="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
        />
        <p class="text-xl font-normal ml-11 mt-10">
          რომ არ გადადო, <br />
          ბარემ ახლავე დარეგისტრირდი <br />
          <a href="https://booking.moh.gov.ge/" class="text-[#1289AE] underline"
            >https://booking.moh.gov.ge/</a
          >
        </p>
      </template>
    </base-question-layout>
    <base-question-layout v-show="true">
      <p>რას ელოდები?*</p>
      <template #options>
        <base-radio
          value="registered_and_waiting_for_the_date"
          name="vaccination_stage"
          label-value="დარეგისტრირებული ვარ და ველოდები რიცხვს"
        />
        <base-radio
          value="not_planning"
          name="vaccination_stage"
          label-value="არ ვგეგმავ"
        />
        <base-radio
          value="had_covid_and_planning_to_get_vaccinated"
          name="vaccination_stage"
          label-value="გადატანილი მაქვს და ვგეგმავ აცრას"
        />
        <p class="text-xl font-normal ml-11 mt-10">
          ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br />
          თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება. <br /><br />
          👉 რეგისტრაციის ბმული

          <a href="https://booking.moh.gov.ge/" class="text-[#1289AE] underline"
            >https://booking.moh.gov.ge/</a
          >
        </p>
        <p class="text-xl font-normal ml-11 mt-10" v-show="false">
          👉
          <a href="https://booking.moh.gov.ge/" class="text-[#1289AE] underline"
            >https://booking.moh.gov.ge/</a
          >
        </p>
      </template>
    </base-question-layout>
    <template #image>
      <img
        class="w-[84%] relative mt-14 left-[15%]"
        src="../assets/images/vaccination-view-svg.svg"
        alt="identification image"
      />
    </template>
    <template #arrows>
      <div class="flex justify-center fixed left-[45%] bottom-[10%] gap-28">
        <router-link :to="{ name: 'questionnaire' }">
          <previous-arrow-icon />
        </router-link>
        <router-link :to="{ name: 'suggestions' }">
          <next-arrow-icon />
        </router-link>
      </div>
    </template>
  </base-questions-container>
</template>

<script>
import BaseRadio from "../components/UI/form/BaseRadio.vue";
import BaseQuestionLayout from "../components/UI/BaseQuestionLayout.vue";

export default {
  components: {
    BaseRadio,
    BaseQuestionLayout,
  },
};
</script>
