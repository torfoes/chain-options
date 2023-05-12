import React, { createContext, useContext, useEffect, useReducer } from "react";
import { InfuraWebSocketProvider, EtherscanProvider } from "ethers";

interface State {
    infuraProvider: InfuraWebSocketProvider | null;
    etherscanProvider: EtherscanProvider | null;
}

const initialState: State = {
    infuraProvider: null,
    etherscanProvider: null,
};

interface Action {
    type: "SET_INFURA_PROVIDER" | "SET_ETHERSCAN_PROVIDER";
    payload: any;
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "SET_INFURA_PROVIDER":
            return { ...state, infuraProvider: action.payload };
        case "SET_ETHERSCAN_PROVIDER":
            return { ...state, etherscanProvider: action.payload };
        default:
            return state;
    }
};

const GlobalStateContext = createContext<[State, React.Dispatch<Action>]>([
    initialState,
    () => null,
]);

export const useGlobalState = () => useContext(GlobalStateContext);

interface GlobalStateProviderProps {
    children: React.ReactNode;
}

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const initProvider = () => {
            const newInfuraProvider = new InfuraWebSocketProvider("mainnet", process.env.REACT_APP_INFURA_PUBLIC_API_KEY);
            dispatch({ type: "SET_INFURA_PROVIDER", payload: newInfuraProvider });

            const newEtherscanProvider = new EtherscanProvider("mainnet", process.env.REACT_APP_ETHERSCAN_API_KEY);
            dispatch({ type: "SET_ETHERSCAN_PROVIDER", payload: newEtherscanProvider });
        };

        initProvider();
    }, []);

    return (
        <GlobalStateContext.Provider value={[state, dispatch]}>
            {children}
        </GlobalStateContext.Provider>
    );
};
