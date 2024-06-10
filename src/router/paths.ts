export const routerPaths = {
  home: '/',
  about: '/about',
  contacts: '/contacts',
  projects: '/projects',
  project: (link: string = ':link'): string => `/project/${link}`,
} as const;
