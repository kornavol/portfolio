const section = (state = 0, actions) => {
    switch (actions.type) {
        case 'CURRENT_SECTION':
            state = actions.height;
            console.log('from redux:  ', state );
            return state
        default:
            return state
    }
};



export default section;