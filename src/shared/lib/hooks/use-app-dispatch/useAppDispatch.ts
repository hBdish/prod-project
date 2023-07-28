import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createReduxStore } from '../../../../app/providers/StoreProvider/config/store';

type RootState = ReturnType<typeof createReduxStore>
type AppDispatch = RootState['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
