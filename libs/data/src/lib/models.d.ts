import { Observable } from 'rxjs';

interface Res<T extends Doc> {
  status: 200 | 400 | 403 | 500;
  msg: string;
  args: {
    docs: Array<T>;
  };
}

interface Doc {
  _id: string;
  [key: string]: any;
}

interface User extends Doc {
  name: string;
  bio: string;
}

interface DataDriver {
  call<T extends Doc>(args: DataDriverCallArgs): Observable<Res<T>>;
}

interface DataDriverCallArgs {
  endpoint: string;
  query: Array<{ [key: string]: any; }>;
  doc: { [key: string]: any; };
}