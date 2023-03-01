<template>
  <NavBarComponent />
  <HeaderComponent :name="$route.name"></HeaderComponent>
  <main class=" overflow-auto h-[calc(100vh-148px)]">
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="px-4 py-6 sm:px-0">
        <div class=" h-auto rounded-lg border-4 border-dashed border-gray-200">
          <router-view></router-view>
        </div>
      </div>
      <!-- /End replace -->
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import NavBarComponent from '../components/NavBarComponent.vue';
import HeaderComponent from './base/header/HeaderComponent.vue';
export default defineComponent({
  name: 'DefaultLayoutComponent',
  components: {
    HeaderComponent,
    NavBarComponent,
  },
  setup() {
    return {};
  }
})
</script>
