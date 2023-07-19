import { createContext, useContext, useReducer } from 'react';

type SearchStateType = {
  placeholder: string;
  text: string;
};

type SearchContextType = {
  placeholder: string;
  text: string;
  updateText: (text: string) => void;
  clearText: () => void;
};
type CLEAR = { type: 'CLEAR' };
type UPDATE = { type: 'UPDATE'; text: string };
type Actions = UPDATE | CLEAR;

export const SearchContext = createContext<SearchContextType | null>(null);

export function useSearchState() {
  const state = useContext(SearchContext);

  if (!state) {
    throw new Error('useSearchState must be used within a SearchStateProvider');
  }

  return state;
}

function searchReducer(state: SearchStateType, action: Actions) {
  switch (action.type) {
    case 'UPDATE': {
      return {
        ...state,
        text: action.text
      };
    }
    case 'CLEAR': {
      return {
        ...state,
        text: ''
      };
    }
    default: {
      throw Error('Unknown action type');
    }
  }
}

export function SearchStateProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(searchReducer, initialSearchState);

  const clearTextFieldHandler = () => {
    dispatch({
      type: 'CLEAR'
    });
  };

  const updateSearchFieldHandler = (text: string) => {
    dispatch({
      type: 'UPDATE',
      text: text
    });
  };

  const serachContext = {
    placeholder: state.placeholder,
    text: state.text,
    clearText: clearTextFieldHandler,
    updateText: updateSearchFieldHandler
  };

  return <SearchContext.Provider value={serachContext}>{children}</SearchContext.Provider>;
}

const initialSearchState: SearchContextType = {
  placeholder: 'Search for awards and outputs',
  text: '',
  clearText: () => undefined,
  updateText: () => undefined
};
