import React, { useState, createContext, useContext } from 'react';

const RangeContext = createContext();
const UpdateRangeContext = createContext();

export const GetRangeLength = () => {
	return useContext(RangeContext);
};

export const UpdateRangeLength = () => {
	return useContext(UpdateRangeContext);
};

export const RangeProvider = ({ value, children }) => {
	const [length, setLength] = useState(value);

	return (
		<RangeContext.Provider value={length}>
			<UpdateRangeContext.Provider value={setLength}>
				{children}
			</UpdateRangeContext.Provider>
		</RangeContext.Provider>
	);
};

export default RangeProvider;
