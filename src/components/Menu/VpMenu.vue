<template>
  <ul class="vp-menu-wrapper">
    <li class="vp-menu-subItem" v-for="item in menu" :key="item.id">
      <div class="vp-menu-item" @click="() => onClick(item)">
        <span>{{ item.name }}</span>
      </div>
      <ul v-if="item.children" class="vp-menu-subItem" v-show="item.status">
        <li class="vp-menu-subItem" v-for="obj in item.children" :key="obj.id">
          <span>{{ obj.name }}</span>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { Menu } from '/@/types/menu';

export default defineComponent({
  name: 'VpMenu',
  props: {
    menu: {
      type: Array as PropType<Menu[]>,
      required: true,
      default: () => [],
    },
  },
  setup(props, context) {
    const modify = (arr: Menu[]): Menu[] => {
      // 使用forEach循环, 为arr数组添加status属性并赋值
      // 这里为什么不用map? 因为map返回的是一个新数组, 为了方便, 使用forEach
      arr.forEach((key) => {
        if (key.children) {
          key.status = false;
          modify(key.children);
        }
      });

      return arr;
    };

    // computed不再适用于这种情况, 因为只有依赖的值发生改变的时候, 才会重新计算
    // 但是我这里依赖的值是深拷贝后的值, 并没有可以被依赖的目标, 所以进行改变没有反应
    const menu = ref(modify(JSON.parse(JSON.stringify(props.menu))));

    const onClick = (item: Menu): void => {
      item.status = !item.status;
      context.emit('change', item);
    };

    return {
      menu,
      onClick,
    };
  },
});
</script>
