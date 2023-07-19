import { createContext, useContext, useReducer } from 'react';

import { useRouter } from 'next/router';

type SearchStateType = {
  placeholder: string;
  text: string;
};

type SearchContextType = {
  placeholder: string;
  text: string;
  updateText: (text: string) => void;
  clearText: () => void;
  submitQuery: (e: React.FormEvent<HTMLFormElement>) => void;
};
type SUBMIT = { type: 'SUBMIT' };
type CLEAR = { type: 'CLEAR' };
type UPDATE = { type: 'UPDATE'; text: string };
type Actions = UPDATE | CLEAR | SUBMIT;

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
  const router = useRouter();
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

  const submitQueryHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitting query');
    await router.push(`/awards-and-outputs?text=${state.text}`);
  };

  const serachContext = {
    placeholder: state.placeholder,
    text: state.text,
    clearText: clearTextFieldHandler,
    updateText: updateSearchFieldHandler,
    submitQuery: submitQueryHandler
  };

  return <SearchContext.Provider value={serachContext}>{children}</SearchContext.Provider>;
}

const initialSearchState: SearchContextType = {
  placeholder: 'Search for awards and outputs',
  text: '',
  clearText: () => undefined,
  updateText: () => undefined,
  submitQuery: () => undefined
};
