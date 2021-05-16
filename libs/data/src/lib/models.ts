import { Observable } from 'rxjs';

export interface Res<T extends Doc> {
  status: 200 | 400 | 403 | 500;
  msg: string;
  args: {
    docs: Array<T>;
  };
}

export interface Doc {
  _id: string;
  [key: string]: any;
}

export interface User extends Doc {
  name: string;
  bio: string;
}

export interface DataDriver {
  call<T extends Doc>(args: DataDriverCallArgs): Observable<Res<T>>;
}

export interface DataDriverCallArgs {
  endpoint: string;
  query: Array<{ [key: string]: any; }>;
  doc: { [key: string]: any; };
}