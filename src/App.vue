<template>
  <router-view></router-view>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from './shared/components/base/header/HeaderComponent.vue';
import DefaultLayoutComponent from './shared/components/DefaultLayoutComponent.vue';
export default defineComponent({
  components: {
    DefaultLayoutComponent,
    HeaderComponent
  },
  setup() {
    return {};
  },
});

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Battambang&display=swap');
  * {
    font-family: 'Battambang', cursive;
  }
</style>
