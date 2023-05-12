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

// Define a new type for your context that includes the setNetwork function
type GlobalStateContextType = [State, React.Dispatch<Action>, (network: string) => void];

const GlobalStateContext = createContext<GlobalStateContextType>([
    initialState,
    () => null,
    () => {},  // Default value for setNetwork function
]);

export const useGlobalState = () => useContext(GlobalStateContext);

interface GlobalStateProviderProps {
    children: React.ReactNode;
}

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setNetwork = (network: string) => {
        const newInfuraProvider = new InfuraWebSocketProvider(network, process.env.REACT_APP_INFURA_PUBLIC_API_KEY);
        dispatch({ type: "SET_INFURA_PROVIDER", payload: newInfuraProvider });

        const newEtherscanProvider = new EtherscanProvider(network, process.env.REACT_APP_ETHERSCAN_API_KEY);
        dispatch({ type: "SET_ETHERSCAN_PROVIDER", payload: newEtherscanProvider });
    }

    useEffect(() => {
        // Initialize with the mainnet
        setNetwork("mainnet");
    }, []);

    // Provide setNetwork function in the context
    return (
        <GlobalStateContext.Provider value={[state, dispatch, setNetwork]}>
            {children}
        </GlobalStateContext.Provider>
    );
};
