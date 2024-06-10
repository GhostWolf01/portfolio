import type { ILinks } from '@/types/types';

export const myInfo = {
  links: {
    github: 'https://github.com/GhostWolf01',
    linkedin:
      'https://www.linkedin.com/in/%D0%B3%D0%B5%D1%82%D0%BC%D0%B0%D0%BD%D1%87%D1%83%D0%BA-%D1%96%D0%BB%D0%BB%D1%8F-1235181b3/',
    email: 'getmanchuk.illya.dev@gmail.com',
    telegram: 'https://t.me/GhostWolf01',
  },
};

export const links: ILinks[] = [
  {
    key: 'github',
    link: myInfo.links.github,
    text: 'Github',
    fullText: 'Github: GhostWolf01',
    icon: 'fa-brands fa-github',
  },
  {
    key: 'linkedin',
    link: myInfo.links.linkedin,
    text: 'Linkedin',
    fullText: 'Linkedin: Getmanchuk Illya',
    icon: 'fa-brands fa-linkedin',
  },
  {
    key: 'email',
    link: 'mailto:' + myInfo.links.email,
    text: 'E-mail',
    fullText: 'E-mail: ' + myInfo.links.email,
    icon: 'fa-solid fa-envelope',
  },
  {
    key: 'telegram',
    link: myInfo.links.telegram,
    text: 'Telegram',
    fullText: 'Telegram: GhostWolf01',
    icon: 'fa-brands fa-telegram',
  },
];
// fa-solid fa-graduation-cap fa-code fa-briefcase
