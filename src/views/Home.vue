<template>
  <div>
    <button @click="count++">count is: {{ count }}</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'Home',
  setup () {
    const count = ref(0)

    return {
      count
    }
  }
}
</script>