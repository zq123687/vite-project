## 菜单组件

这是一个递归组件, 在后台返回的数据中, 数组的每一层都分别对应一个菜单项.
被点击选中的哪一项菜单的children就会被作为子菜单数据, 交给递归的menu组件, 直到某一层的高亮菜单不再有children, 则递归终止.

---- 2021/01/11 ----

分为item, subMenu, icon, content, menu五个组件组成
<Template>
  <Menu :menu="menu" @change="change">
    <Item>
      <Icon />
      <content />
    </Item>
    <subMenu v-if="item.children" v-show="item.status" :menu="item.children" />
  <Menu>
</Template>
如上图:
  根据传递的参数menu来生成对应的dom结构.
  根据是否存在children来决定是否渲染subMenu.
  根据status来决定关闭隐藏.
  为Menu组件注册change事件, 使用事件委托来控制具体的显示隐藏.
  为加载性能考虑, 首次加载菜单仅渲染Item内容, 不渲染item下的children, 如果没指定default-open-keys | default-selected-keys的话, 默认打开首个item的最底层.
  单独的Item, subMenu也可以正常渲染dom结构.

### Menu API

| 参数 | 说明 | 类型 | 默认值 |
| ---- | --- | ---- | ----- |
| default-open-keys | 默认展开的subMenu菜单项的key数组 | | 
| default-selected-keys | 默认选中的菜单项key数组 | string[] | 
| force-subMenu-render | 在子菜单展示之前就渲染进Dom | boolean | false
| openKeys | 当前展开的SubMenu菜单项的key值 | string[] | 
| selectedKeys(v-model) | 当前选中的菜单项key数组 | string[] | 
| theme | 主题颜色 | string: 'light' | 'dark' | 'light'
| replaceFields | 替换menu中的字段 | object | { oldFields: 'newFields' }
| menu | 要渲染的数据 | Menu[] | 
| draggable | 是否启用拖拽 | boolean | false 

### Menu 事件

| 事件名称 | 说明 | 回调参数 |
| ---- | --- | ---- | ----- |
| click | 点击Item调用此参数 | function ({ item, key, keyPath })
| openChange | subMenu展开/关闭的回调 | function (openKeys: string[])
| select | 被选中时调用 | function ({ item, key, selectedKeys })

### Item API

| 参数 | 说明 | 类型 | 默认值 |
| ---- | --- | ---- | ----- |
| disabled | 是否禁用 | boolean | false
| key | 唯一标识 | string | 
| title | 设置收缩时展示的悬浮标题 | string | 

### SubMenu API 

注: SubMenu 的子元素必须是Item 或者SubMenu
| 参数 | 说明 | 类型 | 默认值 |
| ---- | --- | ---- | ----- |
| subClassName | 子菜单样式 | string | 
| disabled | 是否禁用 | boolean | false
| key | 唯一标识 | string | 
| title | 子菜单项值 | string / slot | 
| menu | 要渲染的数据 | Menu[] | 
