import { Res } from '@nx-ns-shared/data';

interface CallObj<T extends Doc> {
    loading: boolean;
    res: Res<T>;
}