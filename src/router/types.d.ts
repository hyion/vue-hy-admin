import type { RouteRecordRaw } from 'vue-router'
import { RoleEnum } from '/@/enums/roleEnum'

export interface RouteMeta {
  title: string;
  roles?: RoleEnum[];
  icon?: string;
  hideBreadcrumb?: boolean;
  transitionName?: string;
}

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta: RouteMeta;
  component?: any;
  components?: any;
  children?: any;
  props?: Record<string, any>;
  fullPath?: string
}

export type AppRouteModule = AppRouteRecordRaw;
