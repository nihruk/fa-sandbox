import { createContext, useContext, useReducer, type Dispatch } from 'react';

type SearchStateType = {
  placeholder: string;
  searchText: string;
};

type updateSearchField = { type: 'updateSearchField'; text: string };
type clearSearchField = { type: 'clearSearchField' };
type Actions = updateSearchField | clearSearchField;

type SearchDispatchType = Dispatch<Actions>;

export const SearchContext = createContext<SearchStateType | null>(null);

export const SearchDispatchContext = createContext<SearchDispatchType | null>(null);

export function useSearchState() {
  const state = useContext(SearchContext);

  if (!state) {
    throw new Error('useSearchState must be used within a SearchStateProvider');
  }

  return state;
}

export function useSearchStateDispatch() {
  const dispatch = useContext(SearchDispatchContext);

  if (!dispatch) {
    throw new Error('useSearchStateDispatch must be used within a SearchStateProvider');
  }

  return dispatch;
}

export function SearchStateProvider({ children }: { children: React.ReactNode }) {
  const [searchState, dispatch] = useReducer(searchReducer, initialSearchState);

  return (
    <SearchContext.Provider value={searchState}>
      <SearchDispatchContext.Provider value={dispatch}>{children}</SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
}

function searchReducer(searchState: SearchStateType, action: Actions) {
  switch (action.type) {
    case 'updateSearchField': {
      return {
        ...searchState,
        searchText: action.text
      };
    }
    case 'clearSearchField': {
      return {
        ...searchState,
        searchText: ''
      };
    }
    default: {
      throw Error('Unknown action:');
    }
  }
}

const initialSearchState: SearchStateType = {
  placeholder: 'Custom placeholder text goes here',
  searchText: ''
};
