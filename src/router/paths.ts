import { useRuntimeConfig } from '#app';

const baseURL = import.meta.env.PROD ? useRuntimeConfig().app.baseURL : '';

export const routerPaths = {
  home: baseURL + '/',
  about: baseURL + '/about',
  contacts: baseURL + '/contacts',
  projects: baseURL + '/projects',
  project: (link: string = ':link'): string => baseURL + `/project/${link}`,
} as const;
