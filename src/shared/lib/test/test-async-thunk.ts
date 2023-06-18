import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers';
import { loginByUsername } from 'features';

type ActionCreatorType<Return, Arg, RejectValue> = (arg: Arg) =>
  AsyncThunkAction<Return, Arg, { rejectValue: RejectValue}>

export default class TestAsyncThunk<Return, Arg, RejectValue> {
  public dispatch: Dispatch;

  private getState: () => StateSchema;

  private actionCreator: ActionCreatorType<Return, Arg, RejectValue>;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
