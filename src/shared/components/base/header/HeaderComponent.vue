<template>
  <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">
            {{ $t(name) }}
          </h1>
        </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'HeaderComponent',
    props: [
      'name'
    ],
    setup() {
      return {
      }
    }
  })
</script>