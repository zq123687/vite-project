<template>
  <div>
    <vp-menu :menu="menu"></vp-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import VpMenu from '../components/Menu/VpMenu.vue';
import menu from '/@/mock/menudata';

export default defineComponent({
  name: 'Home',
  components: {
    VpMenu,
  },
  setup() {

    onMounted(() => {

    });

    return {
      menu
    };
  },
});
</script>
