<template>
  <base-container page="1">
    <div class="flex flex-row justify-between relative">
      <div class="flex flex-col w-1/2">
        <div class="flex flex-col my-11">
          <label for="firstname" class="text-[1.3rem] leading-7 font-bold h-10"
            >სახელი*</label
          >
          <input
            type="text"
            name="firstname"
            id="firstname"
            class="px-5 py-3 text-[#232323] text-lg font-normal max-w-lg border-[#232323] border-[0.8px] bg-[#eaeaea] outline-none hover:outline-none"
          />
        </div>
        <div class="flex flex-col mb-11">
          <label for="lastname" class="text-[1.3rem] leading-7 font-bold h-10"
            >გვარი*</label
          >
          <input
            type="text"
            name="lastname"
            id="lastname"
            class="px-5 py-3 text-[#232323] text-lg font-normal max-w-lg border-[#232323] border-[0.8px] bg-[#eaeaea] outline-none hover:outline-none"
          />
        </div>
        <div class="flex flex-col mb-11">
          <label for="email" class="text-[1.3rem] leading-7 font-bold h-10"
            >მეილი*</label
          >
          <input
            type="email"
            name="email"
            id="email"
            class="px-5 py-3 text-[#232323] text-lg font-normal max-w-lg border-[#232323] border-[0.8px] bg-[#eaeaea] outline-none hover:outline-none"
          />
        </div>
        <div class="mt-14">
          <h3
            class="text-[#626262] pt-5 border-t-[0.8px] text-base font-normal border-[#626262] w-60 whitespace-nowrap"
          >
            *-ით მონიშნული ველების შევსება <br />
            სავალდებულოა
          </h3>
        </div>
      </div>
      <aside class="w-2/3">
        <img
          class="w-100% relative top-[-3.1rem] left-4"
          src="../assets/images/Identification-view-svg.svg"
          alt="identification image"
        />
      </aside>
    </div>
    <router-link :to="{ name: 'questionnaire' }">
      <div class="flex justify-center relative">
        <next-arrow-icon class="ml-5" /></div
    ></router-link>
  </base-container>
</template>

<script>
import NextArrowIcon from "../components/icons/NextArrowIcon.vue";
export default {
  components: {
    NextArrowIcon,
  },
};
</script>
