import { action, Action, thunk, Thunk } from "easy-peasy";
import { IActivity } from "../../types/Activity";

export interface StoreModelState {
  activities: IActivity[];
  activity: {};
}

export interface StoreModelActions {
  addActivity: Action<StoreModel, IActivity>;
}

export interface StoreModel extends StoreModelState, StoreModelActions {}

const model: StoreModel = {
  activities: [],
  activity: {},
  addActivity: action((state, payload) => {
    state.activities.push(payload);
  }),
};

export default model;
