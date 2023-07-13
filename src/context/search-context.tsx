import { createContext, useContext, useReducer, type ReactNode, type Dispatch } from 'react';

type SearchStateType = {
  placeholder: string;
  searchTextField: string;
};

type Action = {
  type: string;
};

type SearchDispatchType = Dispatch<Action>;

export const SearchContext = createContext<SearchStateType | null>(null);

export const SearchDispatchContext = createContext<SearchDispatchType | null>(null);

export function useSearchState() {
  return useContext(SearchContext);
}

export function useSearchStateDispatch() {
  return useContext(SearchDispatchContext);
}

export function SearchStateProvider({ children }: { children: React.ReactNode }) {
  const [searchState, dispatch] = useReducer(searchReducer, initialSearchState);

  return (
    <SearchContext.Provider value={searchState}>
      <SearchDispatchContext.Provider value={dispatch}>{children}</SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
}

function searchReducer(searchState: SearchStateType, action: Action) {
  switch (action.type) {
    case 'clearSearch': {
      return {
        ...searchState,
        searchTextField: ''
      };
    }
    default: {
      throw Error('Unknown action:' + action.type);
    }
  }
}

const initialSearchState: SearchStateType = {
  placeholder: 'Custom placeholder text goes here',
  searchTextField: 'test'
};
