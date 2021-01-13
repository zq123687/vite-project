export interface Menu {
  // 唯一标识
  Id: string;
  // 菜单名称
  name: string;
  // 图标
  icon?: string;
  // 父级Id
  ParentId?: string | number;
  // 状态
  status?: boolean;
  // 子类
  children?: Menu[]
}
