<template>
  <div class="font-bgp-arial bg-[#EAEAEA]">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style>
html {
  overflow-y: scroll;
  overflow-y: overlay;
}
</style>
