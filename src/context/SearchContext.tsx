import { createContext, useContext, useReducer, type ReactNode, type Dispatch } from 'react';

type SearchStateType = {
  placeholder: string;
  searchTextField: string;
};

type Props = {
  children: ReactNode;
};

type Action = {
  type: string;
};

type SearchDispatchType = Dispatch<Action>;

const SearchContext = createContext<SearchStateType | null>(null);

const SearchDispatchContext = createContext<SearchDispatchType | null>(null);

export function SearchProvider({ children }: Props) {
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
  searchTextField: ''
};
