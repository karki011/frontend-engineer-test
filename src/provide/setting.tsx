import { createContext, Dispatch, useContext, useReducer } from "react";

// settingState type and initialize.
type SettingStateType = {
  search: string;
};
const initSettingState = {
  search: "",
};
// setting context type and initialize
type SettingContextType = {
  settingState: SettingStateType;
  dispatch: Dispatch<any>;
};
const initialState = {
  settingState: initSettingState,
  dispatch: () => null,
};

// reducer of context
function settingReducer(state, action) {
  switch (action.type) {
    case "SET": {
      return { ...state, [action.settingName]: action.settingData };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
// context
const SettingContext = createContext<SettingContextType>(initialState);
// context provider
export const SettingProvider = (props) => {
  const [settingState, dispatch] = useReducer(settingReducer, initSettingState);
  return (
    <SettingContext.Provider value={{ settingState, dispatch }} {...props} />
  );
};
// custom hook of context
export const useSetting = () => {
  const context = useContext(SettingContext);
  if (!context) {
    throw new Error("useSetting must be used within a SettingProvider");
  }
  return context;
};
