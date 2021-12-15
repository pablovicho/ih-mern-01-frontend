const reducer = (globalState, action) => {
    switch(action.type) {
        case "CHANGE_TEXT": {
            return {
                ...globalState,
                hola: action.payload
            }
                    }

                    case "GET_STORES":
			return {
				...globalState,
				stores: action.payload
			}

        default:
            return globalState
    }
}

export default reducer