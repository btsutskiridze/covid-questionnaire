<template>
  <base-questions-layout page="1">
    <div>
      <form-input
        name="fistname"
        label-value="სახელი"
        placeholder="სახელი"
        class="mt-11"
      />
      <form-input name="lastname" label-value="გვარი" placeholder="გვარი" />
      <form-input
        name="email"
        label-value="მეილი"
        type="email"
        placeholder="მეილი"
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
    <template #image>
      <img
        class="w-100% relative top-[-3.1rem] left-4"
        src="../assets/images/Identification-view-svg.svg"
        alt="identification image"
      />
    </template>
    <template #arrows>
      <div class="flex justify-center fixed left-[45%] bottom-[10%] gap-28">
        <router-link :to="{ name: 'home' }" class="invisible">
          <previous-arrow-icon />
        </router-link>
        <router-link :to="{ name: 'questionnaire' }">
          <next-arrow-icon />
        </router-link>
      </div>
    </template>
  </base-questions-layout>
</template>

<script>
import FormInput from "../components/form/FormInput.vue";

export default {
  components: {
    FormInput,
  },
};
</script>
