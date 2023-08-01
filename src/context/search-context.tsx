import { createContext, useContext, useReducer } from 'react';

import { useRouter } from 'next/router';

import { type Status } from '~/types';

type SearchStateType = {
  placeholder: string;
  text: string;
  query: string;
  status: Status;
};

type SearchContextType = {
  placeholder: string;
  text: string;
  query: string;
  status: Status;
  updateInput: (text: string) => void;
  clearInput: () => void;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  statusHandler: (status: Status) => void;
};

type STATUS = { type: 'STATUS'; status: Status };
type SUBMIT = { type: 'SUBMIT'; text: string; status: Status; query: string };
type UPDATE = { type: 'UPDATE'; text: string; status: Status };
type CLEAR = { type: 'CLEAR'; status: Status };

type Actions = UPDATE | CLEAR | STATUS | SUBMIT;

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
    case 'STATUS': {
      return {
        ...state,
        status: action.status
      };
    }
    case 'SUBMIT': {
      return {
        ...state,
        query: action.query,
        status: action.status
      };
    }

    case 'UPDATE': {
      return {
        ...state,
        status: action.status,
        text: action.text
      };
    }
    case 'CLEAR': {
      return {
        ...state,
        status: action.status,
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

  const statusHandler = (status: Status) => {
    dispatch({
      type: 'STATUS',
      status: status
    });
  };

  const updateSearchFieldHandler = (text: string) => {
    if (text.length > 0) {
      dispatch({
        type: 'UPDATE',
        text: text,
        status: 'typing'
      });
    } else {
      clearInputFieldHandler();
    }
  };

  const clearInputFieldHandler = () => {
    dispatch({
      type: 'CLEAR',
      status: 'idle'
    });
    // TO DO: clear the query param form the url
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT', text: state.text, status: 'submitting', query: state.text });
    await router.push(`/awards-and-outputs/test?text=${state.text}`);
    dispatch({ type: 'STATUS', status: 'success' });
  };

  const serachContext = {
    placeholder: state.placeholder,
    text: state.text,
    query: state.query,
    status: state.status,
    clearInput: clearInputFieldHandler,
    updateInput: updateSearchFieldHandler,
    submitHandler: submitHandler,
    statusHandler: statusHandler
  };

  return <SearchContext.Provider value={serachContext}>{children}</SearchContext.Provider>;
}

const initialSearchState: SearchContextType = {
  placeholder: 'Search for awards and outputs',
  text: '',
  query: '',
  status: 'idle',
  clearInput: () => undefined,
  updateInput: () => undefined,
  submitHandler: () => undefined,
  statusHandler: () => undefined
};
