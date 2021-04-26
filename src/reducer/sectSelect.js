const section = (state = 0, actions) => {
    switch (actions.type) {
        case 'CURRENT_SECTION':
            state = actions.height;
            return state
    
        default:
            return state
    }
};

export default section;