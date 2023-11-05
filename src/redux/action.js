const SET_FILTERED_ITEMS = 'SET_FILTERED_ITEMS';
const SET_PAGE_NUMBERS = 'SET_PAGE_NUMBERS';

export function setFilteredItem(filteredItems) {
    return {
        type: SET_FILTERED_ITEMS,
        payload: filteredItems
    }
}

export function setPageNumber(pageNumber) {
    return {
        type: SET_PAGE_NUMBERS,
        payload: pageNumber
    }
}