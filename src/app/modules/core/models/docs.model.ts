export interface Email {
  name: string;
  email: string;
  text: string;
}
export interface Timeline {
  _id: string;
  id?: number;
  date: string;
  class: string;
  title: string;
  text: string;
  src: string;
}
export interface Timetable {
  _id: string;
  title: string;
  date: string;
  content: string;
}
export interface Achievement {
  _id: string;
  id?: number;
  src: string;
  title: string;
}
export interface NewsTest {
  id: number;
  title: string;
  content: string;
  link: string;
}
export interface News {
  _id: string;
  id?: number;
  src: string;
  srcDetails: Array<NewsPopup>;
  title: string;
  content: string;
  contentDetails: string;
  link?: string;
}
export interface Url {
  id: number;
  type: number;
  urlAfterRedirects: string;
  src: string;
}
export interface NewsPopup {
  id: number;
  src: string;
}
