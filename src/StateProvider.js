// setup data layer
// we need this to track basket

import React, { createContext, setContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

// This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);