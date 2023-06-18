// import { AppDispatch, RootState } from 'app/providers';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createReduxStore } from '../config/store';

const store = createReduxStore(); // TODO ВРЕМЕННОЕ РЕШЕНИЕ

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
