<template>
  <div>
    <div class="flex flex-col mb-11">
      <label
        v-if="labelValue"
        :for="name"
        class="text-[1.3rem] leading-7 font-bold h-10"
      >
        {{ labelValue }}*
      </label>
      <Field
        :type="type ? type : 'text'"
        :name="name"
        :id="name"
        :placeholder="placeholder ? placeholder : ''"
        class="px-5 py-3 text-[#232323] text-lg font-normal max-w-lg border-[#232323] border-[0.8px] bg-[#eaeaea] outline-none hover:outline-none"
        :rules="inputRule"
        @keyup="saveData"
        v-model="value"
        :value="value"
      />
      <div class="relative">
        <ErrorMessage
          :name="name"
          class="text-[#F15524] font-normal text-base mt-[6px] absolute ml-5"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import { mapActions } from "vuex";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
    },
    labelValue: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: true,
    },
    inputRule: {
      type: Function,
      required: true,
    },
  },
  components: {
    Field,
    ErrorMessage,
  },
  data() {
    return {
      value: "",
    };
  },
  mounted() {
    if (localStorage.getItem(this.name))
      this.value = localStorage.getItem(this.name);
  },

  methods: {
    ...mapActions({
      saveValues: "saveData",
    }),
    saveData() {
      this.saveValues({
        key: this.name,
        value: this.value,
      });
    },
  },
};
</script>
