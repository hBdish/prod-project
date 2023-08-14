import { bindActionCreators, CaseReducerActions, createSlice } from '@reduxjs/toolkit';
import { CreateSliceOptions, SliceCaseReducers } from '@reduxjs/toolkit/dist';
import { useMemo } from 'react';
import { useAppDispatch } from '@/shared';

export function buildSlice<State, CaseReducers extends SliceCaseReducers<State>, Name extends string = string>(
  options: CreateSliceOptions<State, CaseReducers, Name>,
) {
  const slice = createSlice(options);

  const useActions = (): typeof slice.actions => {
    const dispatch = useAppDispatch();

    return useMemo(
      () =>
        bindActionCreators<
          // @ts-ignore
          CaseReducerActions<CaseReducers>,
          any
        >(slice.actions, dispatch),
      [dispatch],
    );
  };

  return {
    ...slice,
    useActions,
  };
}
