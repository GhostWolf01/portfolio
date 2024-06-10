export interface ITechnology {
  title: string;
  icon: string;
  custom: boolean;
}

export interface IProgram {
  title: string;
  icon: string;
  custom: boolean;
}

export interface ITag {
  icon: string;
  title: string;
  custom: boolean;
}

export interface IProjectImage {
  src: string;
  title: string;
  mobile: boolean;
}

export interface IProject {
  slug: string;
  link: string;
  title: string;
  description: string;
  ps: boolean;
  titleImg: string;
  images: IProjectImage[];
  technologies: ITechnology[];
  tags: ITag[];
}

export interface IMenuItem {
  icon: string;
  title: string;
  link: string;
  value: string;
}

export interface ITimeLineItem {
  text: string;
  date: string;
  icon: string;
}

export interface ITimeLine {
  left: ITimeLineItem;
  right: ITimeLineItem;
}

export interface ILinks {
  key: string;
  link: string;
  text: string;
  fullText: string;
  icon: string;
}
