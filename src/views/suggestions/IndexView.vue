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
      <non-formal-meetings />
      <days-from-office />
      <meetings-in-live />
      <your-opinion />
      <div class="text-right">
        <button
          class="bg-[#208298] w-[11.2rem] mt-14 mb-44 py-4 px-7 rounded-[42px] text-white"
        >
          დასრულება
        </button>
      </div>
      <template #image>
        <img
          class="w-[76%] relative left-[16%] mt-[4.4rem] z-40"
          src="@/assets/images/suggestions-view.png"
          alt="suggestions-view"
        />
        <suggestions-heart-icon
          class="absolute top-[7%] left-[58%] transition-all duration-75 ease-in-out"
          v-motion
          :initial="{ opacity: 0, x: -50, y: -100, width: 100, height: 100 }"
          :enter="{ opacity: 1, x: 0, y: 0, height: 173, width: 196 }"
        />
      </template>
      <template #arrows>
        <div
          class="flex justify-center fixed left-[45%] bottom-[10%] gap-28 -50"
        >
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
import SuggestionsHeartIcon from "@/components/icons/views/SuggestionsHeartIcon.vue";
import NonFormalMeetings from "@/views/suggestions/NonFormalMeetings.vue";
import DaysFromOffice from "@/views/suggestions/DaysFromOffice.vue";
import MeetingsInLive from "@/views/suggestions/MeetingsInLive.vue";
import YourOpinion from "@/views/suggestions/YourOpinion.vue";
import { Form as VeeForm } from "vee-validate";
import { mapActions } from "vuex";

export default {
  components: {
    SuggestionsHeartIcon,
    NonFormalMeetings,
    DaysFromOffice,
    MeetingsInLive,
    YourOpinion,
    VeeForm,
  },
  methods: {
    ...mapActions({
      validatePage: "suggestions/validatefourthPage",
      identificationData: "identification/collectData",
      questionnaireData: "questionnaire/collectData",
      vaccinationData: "vaccination/collectData",
      suggestionsData: "suggestions/collectData",
      submitData: "submitData",
    }),
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
        this.identificationData();
        this.questionnaireData();
        this.vaccinationData();
        this.suggestionsData();

        this.submitData();

        this.validatePage();
        this.$router.push({ name: "thank-you" });
      }
    },
  },
};
</script>
