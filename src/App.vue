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
