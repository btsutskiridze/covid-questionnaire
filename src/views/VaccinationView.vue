<template>
  <base-questions-layout page="3">
    <base-radio-question>
      <p>უკვე აცრილი ხარ?*</p>
      <template #options>
        <radio-input value="yes" name="had_vaccine" label-value="კი" />
        <radio-input value="no" name="had_vaccine" label-value="არა" />
      </template>
    </base-radio-question>
    <base-radio-question v-show="false">
      <p>აირჩიე რა ეტაპზე ხარ*</p>
      <template #options>
        <radio-input
          value="first_dosage_and_registered_on_the_second"
          name="vaccination_stage"
          label-value="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
        />
        <radio-input
          value="fully_vaccinated"
          name="vaccination_stage"
          label-value="სრულად აცრილი ვარ"
        />
        <radio-input
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
    </base-radio-question>
    <base-radio-question v-show="true">
      <p>რას ელოდები?*</p>
      <template #options>
        <radio-input
          value="first_dosage_and_registered_on_the_second"
          name="vaccination_stage"
          label-value="დარეგისტრირებული ვარ და ველოდები რიცხვს"
        />
        <radio-input
          value="fully_vaccinated"
          name="vaccination_stage"
          label-value="არ ვგეგმავ"
        />
        <radio-input
          value="first_dosage_and_not_registered_on_the_second"
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
    </base-radio-question>
    <template #image>
      <img
        class="w-[45rem] relative mt-14 left-[16%]"
        src="../assets/images/vaccination-view-svg.svg"
        alt="identification image"
      />
    </template>
    <template #arrows>
      <div class="flex justify-center fixed left-[45%] bottom-[10%] gap-28">
        <router-link :to="{ name: 'questionnaire' }">
          <previous-arrow-icon />
        </router-link>
        <router-link :to="{ name: 'home' }">
          <next-arrow-icon />
        </router-link>
      </div>
    </template>
  </base-questions-layout>
</template>

<script>
import RadioInput from "../components/form/RadioInput.vue";

export default {
  components: {
    RadioInput,
  },
};
</script>
