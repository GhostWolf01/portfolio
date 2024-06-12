const baseURL = ''; //import.meta.env.PROD ? import.meta.env.NUXT_APP_CDN_URL ?? '' : '';

export const routerPaths = {
  home: baseURL + '/',
  about: baseURL + '/about',
  contacts: baseURL + '/contacts',
  projects: baseURL + '/projects',
  project: (link: string = ':link'): string => baseURL + `/project/${link}`,
} as const;
