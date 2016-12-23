import * as types from '../constants/ActionTypes'

import Immutable from 'immutable'
const initProgress = Immutable.Map({
  num: ""
});
const initState = Immutable.Map({
  instanceId: "",
  progress: initProgress,
  status: "",
  model: "",
  logs: Immutable.List()
});


const build = (state = initState, action) => {
  switch (action.type) {
    case types.OPEN_BUILD_PAGE:
      return initState.set("model", action.build);

    case types.START_BUILD:
      return state.setIn(["progress", "num"], 0).set("status", "RUNNING");

    case types.START_BUILD_RESULT:
      return state.set("instanceId", action.instanceId);

    case types.BUILD_ERROR:
      return state.set("instanceId", "").set("progress", initProgress).update("logs", (logs) => {
        return logs.push("Build Error.");
      });

    case types.QUERY_BUILD_LOGS_RESULT:
      return state.update("logs", (logs) => {
        return logs.push(action.result);
      });

    case types.QUERY_BUILD_PROCESS_RESULT:
      const result = action.result;
      const status = result.status;
      const progress = result.progress;
      if (status === "RUNNING") {
        state = state.set("progress", Immutable.Map({
          num: parseInt(progress * 100)
        }));
      } else if (status === "SUCCESS") {
        state = state.set("instanceId", "").set("progress", initProgress).update("logs", (logs) => {
          return logs.push(`Build Success. Build takes ${result.time / 1000}s`);
        });
      } else {
        state = state.set("instanceId", "").set("progress", initProgress).update("logs", (logs) => {
          return logs.push(`Build Failed. Current progress ${parseInt(progress * 100)}%. When progress > 50%, there's 1/3 chance to get failure (progress %3 === 1)`);
        });
      }

    default:
      return state
  }
}
export default build
