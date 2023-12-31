const SET_FILTERED_ITEMS = 'SET_FILTERED_ITEMS';
const SET_PAGE_NUMBERS = 'SET_PAGE_NUMBERS';
const SET_NOME_PERSONAGEM = 'SET_NOME_PERSONAGEM';

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

export function setNomePersonagem(nomePersonagem) {
    return {
        type: SET_NOME_PERSONAGEM,
        payload: nomePersonagem
    }
}