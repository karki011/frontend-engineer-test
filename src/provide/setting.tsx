import { createContext, Dispatch, useContext, useReducer } from "react";

type SettingStateType = {
  search: string;
};
const initSettingState = {
  search: "",
};
type SettingContextType = {
  settingState: SettingStateType;
  dispatch: Dispatch<any>;
};
const initialState = {
  settingState: initSettingState,
  dispatch: () => null,
};

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

const SettingContext = createContext<SettingContextType>(initialState);

export const SettingProvider = (props) => {
  const [settingState, dispatch] = useReducer(settingReducer, initSettingState);
  return (
    <SettingContext.Provider value={{ settingState, dispatch }} {...props} />
  );
};

export const useSetting = () => {
  const context = useContext(SettingContext);
  if (!context) {
    throw new Error("useSetting must be used within a SettingProvider");
  }
  return context;
};
