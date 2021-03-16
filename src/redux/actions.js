export const BUG_ADDED = "bugAdded";
export const BUG_REMOVED = "bugRemoved";
export const BUG_RESOLVED = "bugResolved";

export const bugAdded = description => ({
    type: BUG_ADDED,
    payload: {
        description
    }
})

export function bugRemoved(id) {
    return {
        type: BUG_REMOVED,
        payload: {
            id
        }
    }
}

export const bugResolved = (id) => ({
    type: BUG_RESOLVED,
    payload: {
        id
    }
});

/*export function bugAdded(description) {
    return {
        type: BUG_ADDED,
        payload: {
            description: description
        }
    }
}*/
