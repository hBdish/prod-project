import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createReduxStore } from '@/app/providers/store-provider';

type RootState = ReturnType<typeof createReduxStore>;
type AppDispatch = RootState['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
