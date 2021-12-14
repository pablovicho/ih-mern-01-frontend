const reducer = (globalState, action) => {
    switch(action.type) {
        case "CHANGE_TEXT": {
return {
    ...globalState,
    hola: action.payload
}
        }

        case "GET_GUITARS":
			return {
				...globalState,
				guitars: action.payload
			}

        default:
            return globalState
    }
}

export default reducer