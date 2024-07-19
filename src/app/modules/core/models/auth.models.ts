export interface User {
  username: string;
  password: string;
}
export interface Cookie {
  username: string;
  token: string;
}
export class Admin {
  constructor(public username: string) {}
}
