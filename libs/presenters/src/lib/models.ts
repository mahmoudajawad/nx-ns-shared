import { Doc, Res } from '@nx-ns-shared/data';

export interface CallObj<T extends Doc> {
    loading: boolean;
    res: Res<T>;
}