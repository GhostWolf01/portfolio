import type { IProject } from '@/types/types';
import { getProjectsImgUrl } from '../utils/images';

export const projects: IProject[] = [
  {
    slug: 'gallery',
    link: '/project/gallery',
    title: 'Gallery',
    description: `Web application Gallery де представлені багато різних артистів та робіт, також є різні виставки які показуються в певний час для кожної виставки є своя вибірка робіт`,
    ps: true,
    titleImg: getProjectsImgUrl('/gallery/home-page.png'),
    images: [
      {
        src: getProjectsImgUrl('/gallery/home-page.png'),
        title: 'Home Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/gallery/home-page-mobile.png'),
        title: 'Home Page Mobile',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/gallery/menu.png'),
        title: 'Menu',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/gallery/menu-mobile.png'),
        title: 'Menu Mobile',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/gallery/artist-page.png'),
        title: 'Artist Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/gallery/artist-page-mobile.png'),
        title: 'Artist Page Mobile',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/gallery/artworks-page.png'),
        title: 'Artworks Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/gallery/artworks-page-mobile.png'),
        title: 'Artworks Page Mobile',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/gallery/artwork-page.png'),
        title: 'Artwork Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/gallery/artwork-page-mobile.png'),
        title: 'Artwork Page Mobile',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/gallery/artists-page.png'),
        title: 'Artists Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/gallery/artists-page-mobile.png'),
        title: 'Artists Page Mobile',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/gallery/about-page.png'),
        title: 'About Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/gallery/admin-dashboard.png'),
        title: 'Admin Dashboard Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/gallery/admin-collection.png'),
        title: 'Admin Collection Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/gallery/admin-collection-1.png'),
        title: 'Admin Collection Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/gallery/admin-content.png'),
        title: 'Admin Content Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/gallery/admin-content.png'),
        title: 'Admin Content Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/gallery/add-edit-artist-screen.png'),
        title: 'Add/Edit Artist Popup',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/gallery/add-art-screen.png'),
        title: 'Add/Edit Art Popup',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/gallery/add-edit-publication.png'),
        title: 'Add/Edit Publication',
        mobile: false,
      },
    ],
    technologies: [
      { title: 'JavaScript', icon: 'fa-brands fa-js', custom: false },
      { title: 'HTML5', icon: 'fa-brands fa-html5', custom: false },
      { title: 'CSS3', icon: 'fa-brands fa-css3-alt', custom: false },
      { title: 'VUEJS', icon: 'fa-brands fa-vuejs', custom: false },
      { title: 'SASS/SCSS', icon: 'fa-brands fa-sass', custom: false },
      { title: 'PHP', icon: 'fa-brands fa-php', custom: false },
      { title: 'Docker', icon: 'fa-brands fa-docker', custom: false },
    ],
    tags: [{ title: 'VUEJS', icon: 'fa-brands fa-vuejs', custom: false }],
  },
  {
    slug: 'house',
    link: '/project/house',
    title: 'House',
    description:
      "Web application House інформація про дім, про сім'ю що побудувала дім, про художників та їхні художні роботи, тур по дому з фоторграфій",
    ps: true,
    titleImg: getProjectsImgUrl('/house/home-page.png'),
    images: [
      { src: getProjectsImgUrl('/house/home-page.png'), title: 'Home Page', mobile: false },
      {
        src: getProjectsImgUrl('/house/home-page-mobile.png'),
        title: 'Home Page Mobile',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/house/interiors-1-page.png'),
        title: 'Interiors Page Slide 1',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/house/interiors-1-mobile-page.png'),
        title: 'Interiors Page Mobile Slide 1',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/house/interiors-1-toure-page.png'),
        title: 'Interiors Page Mobile Slide 1',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/house/interiors-2-page.png'),
        title: 'Interiors Page Slide 2',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/house/interiors-2-mobile-page.png'),
        title: 'Interiors Page Mobile Slide 2',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/house/interiors-2-toure-page.png'),
        title: 'Interiors Page Toure Slide 2',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/house/outside-1-page.png'),
        title: 'Outside Page Slide 2',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/house/outside-1-mobile-page.png'),
        title: 'Outside Page Mobile Slide 2',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/house/outside-2-page.png'),
        title: 'Outside Page Slide 2',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/house/outside-2-mobile-page.png'),
        title: 'Outside Page Mobile Slide 2',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/house/menu.png'),
        title: 'Menu',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/house/menu-mobile.png'),
        title: 'Menu Mobile',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/house/all-artworks-page.png'),
        title: 'All Artworks Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/house/all-artworks-mobile-page.png'),
        title: 'All Artworks Mobile Page',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/house/artists-page.png'),
        title: 'Artists Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/house/artists-mobile-page.png'),
        title: 'Artists Mobile Page',
        mobile: true,
      },
    ],
    technologies: [
      { title: 'JavaScript', icon: 'fa-brands fa-js', custom: false },
      { title: 'HTML5', icon: 'fa-brands fa-html5', custom: false },
      { title: 'CSS3', icon: 'fa-brands fa-css3-alt', custom: false },
      { title: 'VUEJS', icon: 'fa-brands fa-vuejs', custom: false },
      { title: 'SASS/SCSS', icon: 'fa-brands fa-sass', custom: false },
      { title: 'PHP', icon: 'fa-brands fa-php', custom: false },
      { title: 'Docker', icon: 'fa-brands fa-docker', custom: false },
    ],
    tags: [{ title: 'VUEJS', icon: 'fa-brands fa-vuejs', custom: false }],
  },
  {
    slug: 'flight',
    link: '/project/flight',
    title: 'Flight',
    description:
      'Web application Flight сервіс для відстеження часних літаків з пошуком по різним категоріїям, відстеження літаків у реальному часі, з переглядом доступної інформації про літак',
    ps: true,
    titleImg: getProjectsImgUrl('/flight/home-page.png'),
    images: [
      { src: getProjectsImgUrl('/flight/home-page.png'), title: 'Home Page', mobile: false },
      {
        src: getProjectsImgUrl('/flight/home-mobile-page.png'),
        title: 'Home Page Mobile',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/flight/search-operator-type-page.png'),
        title: 'Search Operator Type Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/flight/search-operator-type-mobile-page.png'),
        title: 'Search Operator Type Page Mobile',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/flight/aircraft-page.png'),
        title: 'Aircraft Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/flight/aircraft-mobile-page.png'),
        title: 'Aircraft Page Mobile',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/flight/profile-page.png'),
        title: 'Profile Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/flight/profile-mobile-page.png'),
        title: 'Profile Page Mobile',
        mobile: true,
      },
    ],
    technologies: [
      { title: 'JavaScript', icon: 'fa-brands fa-js', custom: false },
      { title: 'HTML5', icon: 'fa-brands fa-html5', custom: false },
      { title: 'CSS3', icon: 'fa-brands fa-css3-alt', custom: false },
      { title: 'VUEJS', icon: 'fa-brands fa-vuejs', custom: false },
      { title: 'SASS/SCSS', icon: 'fa-brands fa-sass', custom: false },
      { title: 'Python', icon: 'fa-brands fa-python', custom: false },
      { title: 'Docker', icon: 'fa-brands fa-docker', custom: false },
    ],
    tags: [{ title: 'VUEJS', icon: 'fa-brands fa-vuejs', custom: false }],
  },
  {
    slug: 'constructor',
    link: '/project/constructor',
    title: 'Constructor',
    description:
      'Web application Constructor весь вміст складається з блоків які задаються в CMS, сторінки а також питання для калькулятора вартості також задаються в CMS',
    ps: true,
    titleImg: getProjectsImgUrl('/construct/home-page.png'),
    images: [
      { src: getProjectsImgUrl('/construct/home-page.png'), title: '', mobile: false },
      { src: getProjectsImgUrl('/construct/home-mobile-page.png'), title: '', mobile: true },
      { src: getProjectsImgUrl('/construct/calculator-page.png'), title: '', mobile: false },
      { src: getProjectsImgUrl('/construct/calculator-page-2.png'), title: '', mobile: false },
      { src: getProjectsImgUrl('/construct/calculator-page-3.png'), title: '', mobile: false },
      { src: getProjectsImgUrl('/construct/calculator-page-4.png'), title: '', mobile: false },
    ],
    technologies: [
      { title: 'JavaScript', icon: 'fa-brands fa-js', custom: false },
      { title: 'HTML5', icon: 'fa-brands fa-html5', custom: false },
      { title: 'CSS3', icon: 'fa-brands fa-css3-alt', custom: false },
      { title: 'VUEJS', icon: 'fa-brands fa-vuejs', custom: false },
      { title: 'NUXT', icon: 'NuxtIcon', custom: true },
      { title: 'SASS/SCSS', icon: 'fa-brands fa-sass', custom: false },
      { title: 'PHP', icon: 'fa-brands fa-php', custom: false },
      { title: 'Docker', icon: 'fa-brands fa-docker', custom: false },
    ],
    tags: [
      { title: 'VUEJS', icon: 'fa-brands fa-vuejs', custom: false },
      { title: 'NUXT', icon: 'NuxtIcon', custom: true },
    ],
  },
  {
    slug: 'fundraising',
    link: '/project/fundraising',
    title: 'Fundraising',
    description: 'Web application Fundraising',
    ps: true,
    titleImg: getProjectsImgUrl('/fundraising/home-client-page.png'),
    images: [
      {
        src: getProjectsImgUrl('/fundraising/home-client-page.png'),
        title: 'Home Client Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/fundraising/home-client-mobile-page.png'),
        title: 'Home Client Mobile Page',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/fundraising/home-client-sweepstakes-page.png'),
        title: 'Sweepstakes Client Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/fundraising/home-client-sweepstakes-mobile-page.png'),
        title: 'Sweepstakes Client Mobile Page',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/fundraising/home-client-fundraisers-page.png'),
        title: 'Fundraisers Client Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/fundraising/home-client-fundraisers-mobile-page.png'),
        title: 'Fundraisers Client Mobile Page',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/fundraising/home-client-all-organizations-page.png'),
        title: 'All Organizations Client Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/fundraising/home-client-all-organizations-mobile-page.png'),
        title: 'All Organizations Client Mobile Page',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/fundraising/admin-panel.png'),
        title: 'Admin Panel Page',
        mobile: false,
      },
    ],
    technologies: [
      { title: 'JavaScript', icon: 'fa-brands fa-js', custom: false },
      { title: 'HTML5', icon: 'fa-brands fa-html5', custom: false },
      { title: 'CSS3', icon: 'fa-brands fa-css3-alt', custom: false },
      { title: 'VUEJS', icon: 'fa-brands fa-vuejs', custom: false },
      { title: 'SASS/SCSS', icon: 'fa-brands fa-sass', custom: false },
      { title: 'PHP', icon: 'fa-brands fa-php', custom: false },
      { title: 'Docker', icon: 'fa-brands fa-docker', custom: false },
    ],
    tags: [{ title: 'VUEJS', icon: 'fa-brands fa-vuejs', custom: false }],
  },
  {
    slug: 'mousemacros',
    link: '/project/mousemacros',
    title: 'Mousemacros',
    description: 'Desktop application Mousemacros для котролю віддачі зброї в іграх',
    ps: false,
    titleImg: getProjectsImgUrl('/mousemacros/main-page.png'),
    images: [
      { src: getProjectsImgUrl('/mousemacros/main-page.png'), title: 'Main Page', mobile: true },
      {
        src: getProjectsImgUrl('/mousemacros/add-main-variant-page.png'),
        title: 'Add Main Variant',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/mousemacros/select-main-variant-page.png'),
        title: 'Select Main Variant',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/mousemacros/chenge-sub-variant-page.png'),
        title: 'Change Sub Variant',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/mousemacros/game-resault.png'),
        title: 'Game Result',
        mobile: true,
      },
    ],
    technologies: [
      { title: 'JavaScript', icon: 'fa-brands fa-js', custom: false },
      { title: 'HTML5', icon: 'fa-brands fa-html5', custom: false },
      { title: 'CSS3', icon: 'fa-brands fa-css3-alt', custom: false },
      { title: 'SASS/SCSS', icon: 'fa-brands fa-sass', custom: false },
      { title: 'VUEJS', icon: 'fa-brands fa-vuejs', custom: false },
      { title: 'TAURI', icon: 'TauriIcon', custom: true },
      { title: 'RUST', icon: 'fa-brands fa-rust', custom: false },
    ],
    tags: [
      { title: 'VUEJS', icon: 'fa-brands fa-vuejs', custom: false },
      { title: 'TAURI', icon: 'TauriIcon', custom: true },
      { title: 'RUST', icon: 'fa-brands fa-rust', custom: false },
    ],
  },
  {
    slug: 'keyboardmacros',
    link: '/project/keyboardmacros',
    title: 'Keyboardmacros',
    description:
      'Desktop application Keyboardmacros виконаня певних скриптів з натисканям клавіш клавіатури, руху миші, вводу текту',
    ps: false,
    titleImg: getProjectsImgUrl('/keyboardmacros/main-page.png'),
    images: [
      {
        src: getProjectsImgUrl('/keyboardmacros/main-page.png'),
        title: 'Main Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/keyboardmacros/add-action-page.png'),
        title: 'Add Action',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/keyboardmacros/action-select.png'),
        title: 'Action Select',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/keyboardmacros/edit-params-action.png'),
        title: 'Edit Params Action',
        mobile: false,
      },
    ],
    technologies: [
      { title: 'JavaScript', icon: 'fa-brands fa-js', custom: false },
      { title: 'HTML5', icon: 'fa-brands fa-html5', custom: false },
      { title: 'CSS3', icon: 'fa-brands fa-css3-alt', custom: false },
      { title: 'SASS/SCSS', icon: 'fa-brands fa-sass', custom: false },
      { title: 'VUEJS', icon: 'fa-brands fa-vuejs', custom: false },
      { title: 'TAURI', icon: 'TauriIcon', custom: true },
      { title: 'RUST', icon: 'fa-brands fa-rust', custom: false },
    ],
    tags: [
      { title: 'VUEJS', icon: 'fa-brands fa-vuejs', custom: false },
      { title: 'TAURI', icon: 'TauriIcon', custom: true },
      { title: 'RUST', icon: 'fa-brands fa-rust', custom: false },
    ],
  },
  {
    slug: 'portfolio',
    link: '/project/portfolio',
    title: 'Portfolio',
    description: 'Web application Portfolio перегляд мої робіт, іформації про мене',
    ps: false,
    titleImg: getProjectsImgUrl('/portfolio/home-page.png'),
    images: [
      { src: getProjectsImgUrl('/portfolio/home-page.png'), title: 'Home Page', mobile: false },
      {
        src: getProjectsImgUrl('/portfolio/home-mobile-page.png'),
        title: 'Home Mobile Page',
        mobile: true,
      },
      { src: getProjectsImgUrl('/portfolio/about-page.png'), title: 'About Page', mobile: false },
      {
        src: getProjectsImgUrl('/portfolio/about-mobile-page.png'),
        title: 'About Mobile Page',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/portfolio/projects-page.png'),
        title: 'Projects Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/portfolio/projects-mobile-page.png'),
        title: 'Projects Mobile Page',
        mobile: true,
      },
      {
        src: getProjectsImgUrl('/portfolio/project-page.png'),
        title: 'Project Page',
        mobile: false,
      },
      {
        src: getProjectsImgUrl('/portfolio/project-mobile-page.png'),
        title: 'Project Mobile Page',
        mobile: true,
      },
    ],
    technologies: [
      { title: 'JavaScript', icon: 'fa-brands fa-js', custom: false },
      { title: 'HTML5', icon: 'fa-brands fa-html5', custom: false },
      { title: 'CSS3', icon: 'fa-brands fa-css3-alt', custom: false },
      { title: 'VUEJS', icon: 'fa-brands fa-vuejs', custom: false },
      { title: 'NUXT', icon: 'NuxtIcon', custom: true },
      { title: 'SASS/SCSS', icon: 'fa-brands fa-sass', custom: false },
      { title: 'Docker', icon: 'fa-brands fa-docker', custom: false },
    ],
    tags: [
      { title: 'VUEJS', icon: 'fa-brands fa-vuejs', custom: false },
      { title: 'NUXT', icon: 'NuxtIcon', custom: true },
    ],
  },
];

export function getProject(link: string): IProject {
  const defaultP: IProject = {
    slug: '',
    link: '',
    title: '',
    description: '',
    ps: false,
    titleImg: '',
    images: [{ src: '', title: '', mobile: false }],
    technologies: [],
    tags: [],
  };
  return projects.find((project) => project.slug === link) ?? defaultP;
}
