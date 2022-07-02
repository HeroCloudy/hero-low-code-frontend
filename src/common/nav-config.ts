import { routes } from '@/router'

export interface NavConfigItem {
  path: string;
  title: string;
}

export const getNavConfigList = (): NavConfigItem[] => {
  const result: NavConfigItem[] = []
  routes.forEach(item => {
    if (item.path !== '/') {
      result.push({
        path: item.path,
        title: (item.meta as any).title
      })
    }
  })
  return result
}
