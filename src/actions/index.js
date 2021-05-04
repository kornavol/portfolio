export const belowPage = (prev, next, history) => {
    return {
        type:'BELOW-PAGE',
        upperPage:prev,
        belowPage:next, 
        history:history
    }
}

export const toBelowPage = () => {
    return {
        type:'GO_TO_BELOW_PAGE',
    }
}

export const toUpperPage = () => {
    return {
        type:'GO_TO_UPPER_PAGE',
    }
}

export const transHight = (height) => {
    return {
        type:'CURRENT_SECTION',
        height:height
    }
}
