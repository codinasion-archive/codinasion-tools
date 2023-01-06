export interface UrlTypes {
  id: number;
  text: string;
  url: string;
}
[];

export interface devType {
  avatar_url: string;
  html_url: string;
  name: string;
}
[];

export interface apiType {
  apiData: string[] | null;
  apiStatus: boolean;
}
[];

export interface alertType {
  title: string;
  message: string;
  status: boolean;
}

export interface basicToolsType {
  title: string;
  repoUrl: string;
  slug: string;
}
[];

export interface headerProp {
  title: string;
  subTitle: string;
  cssStyle?: string;
}
