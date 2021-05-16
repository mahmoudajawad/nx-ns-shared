import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

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

@Injectable()
export class DataDriverService {
  call<T extends Doc>(args: {
    endpoint: string;
    query: Array<{ [key: string]: any; }>;
    doc: { [key: string]: any; };
  }): Observable<Res<T>> {
    let res: Res<T> = {
    status: 200,
      msg: 'CALL SUCCESSFUL',
      args: {
        docs: [({_id: 'DOC_ID', name: 'User Name', bio: 'User Bio'} as any)],
      },
    };

    return of(res).pipe(delay(1500));
  }
}