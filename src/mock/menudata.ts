import Hash from '/@/utils/hash';
import type { Menu } from '/@/types/menu';

let index: number = -1;
const data: Menu[] = []
const $hash = new Hash

const module: string[] = ['新闻网站', '后台管理', '定制组件', '数据图表', '社区论坛', '学习笔记', '文件管理', '资源收藏']

function repeat(index: number, subName?: string): Menu {
  const name: string = subName ? module[index] + subName : module[index]
  const current: string = $hash.hash64(String(new Date) + name + 'mockjs-upknow');

  return {
    Id: current,
    name: name
  }
}

while (++index < module.length) {
  const obj: Menu = repeat(index);
  const children: Menu[] = []

  for (let i: number = 0; i < Math.random() * 10; i++) {
    children[i] = repeat(i, `子类${i}`)
    children[i].ParentId = obj.Id
  }

  obj.children = children

  data[index] = obj
}

export default data
