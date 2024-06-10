const cdnUrl = import.meta.env.PROD ? process.env.GITHUB_URL : '';

export const routerPaths = {
  home: cdnUrl + '/',
  about: cdnUrl + '/about',
  contacts: cdnUrl + '/contacts',
  projects: cdnUrl + '/projects',
  project: (link: string = ':link'): string => cdnUrl + `/project/${link}`,
} as const;
