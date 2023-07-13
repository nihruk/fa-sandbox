import { createContext, useContext, useReducer } from 'react';

const SearchContext = createContext(null);

const SearchDispatchContext = createContext(null);

export function SearchProvider({ children }) {
  const [searchState, dispatch] = useReducer(searchReducer, initialSearchState);

  return (
    <SearchContext.Provider value={searchState}>
      <SearchDispatchContext.Provider value={dispatch}>{children}</SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}

export function useSearchDispatch() {
  return useContext(SearchDispatchContext);
}

function searchReducer(searchState, action) {
  switch (action.type) {
    case 'clear': {
      return {
        ...searchState,
        searchTextField: ''
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialSearchState = {
  placeholder: 'Custom placeholder text goes here',
  searchTextField: ''
};
