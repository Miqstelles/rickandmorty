const SET_FILTERED_ITEMS = 'SET_FILTERED_ITEMS';

export function setFilteredItem(filteredItems) {
    return {
        type: SET_FILTERED_ITEMS,
        payload: filteredItems
    }
}