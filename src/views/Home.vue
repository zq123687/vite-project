<template>
  <div>
    <button @click="count++">count is: {{ count }}</button>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import menu from '/@/mock/menudata'

export default {
  name: 'Home',
  setup () {
    const count = ref(0)

    onMounted(() => {
      console.log(menu, '数据')
    })

    return {
      count
    }
  }
}
</script>