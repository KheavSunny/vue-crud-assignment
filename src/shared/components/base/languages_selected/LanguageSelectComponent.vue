<template>
  <el-select v-model="selectedOption" placeholder="Select Language">
    <el-option v-for="item in options" :key="item.value" :label="$t(item.label)" :value="item.value"
      :disabled="item.disabled" @click="changeLang(item.value)">
      <span style="float: right">{{ $t(item.label) }}</span>
      <img width="30" style="float: left;" :src="item.icon" alt="">
    </el-option>
  </el-select>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';
interface SelectOption {
  id?: string,
  value: string,
  label: string,
  icon?: any,
  disabled?: boolean
}
export default defineComponent({
  name: 'LanguageSelected',
  props: {
    options: {
      type: Array as PropType<SelectOption[]>,
      required: true
    },
  },

  setup(props) {
    const changeLang = (value: string) => {
      sessionStorage.setItem('lang',value)
      window.location.reload()
    }
    const lang = sessionStorage.getItem('lang') || props.options[0].label;
    const selectedOption = ref(lang)
    return {
      selectedOption,
      changeLang
    };
  }
})
</script>
