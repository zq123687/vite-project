export interface Menu {
  Id: string;

  name: string;

  icon?: string;

  ParentId?: string | number;

  status?: number;

  children?: Menu[]
}
