import { useAppConfig } from '#app';

const cdnUrl = import.meta.dev ? '' : useAppConfig().cdnUrl ?? '';

export const routerPaths = {
  home: cdnUrl + '/',
  about: cdnUrl + '/about',
  contacts: cdnUrl + '/contacts',
  projects: cdnUrl + '/projects',
  project: (link: string = ':link'): string => cdnUrl + `/project/${link}`,
} as const;
