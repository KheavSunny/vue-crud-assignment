<template>
  <el-select v-model="value" placeholder="Select Language">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <span style="float: right">{{ item.label }}</span>
      <img width="30" style="float: left;" :src="item.icon" alt="">
    </el-option>
  </el-select>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'LanguageSelected',
    props: [
     'options'
    ],
    setup(props) {
      const value = ref(props.options[0].value);
      return {
        value
      };
    }
  })
</script>
