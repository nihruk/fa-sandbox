import { createContext, useContext, useReducer } from 'react';

import { useRouter } from 'next/router';

export type Status = 'idle' | 'typing' | 'submitting' | 'success';

type SearchStateType = {
  placeholder: string;
  text: string;
  query: string;
  sortBy: string;
  sortDesc: boolean;
  defFilterParams: string;
  filterParams: string;
  status: Status;
};

type SearchContextType = {
  placeholder: string;
  text: string;
  query: string;
  sortBy: string;
  sortDesc: boolean;
  defFilterParams: string;
  filterParams: string;
  status: Status;
  updateInput: (text: string) => void;
  clearInput: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
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
        text: '',
        query: ''
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

  const updateSearchFieldHandler = async (text: string) => {
    if (text.length > 0) {
      dispatch({
        type: 'UPDATE',
        text: text,
        status: 'typing'
      });
    } else {
      await clearInputFieldHandler();
    }
  };

  const clearInputFieldHandler = async () => {
    dispatch({
      type: 'CLEAR',
      status: 'idle'
    });
    await router.push({ query: {} });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT', text: state.text, status: 'submitting', query: state.text });
    await router.push({
      pathname: '/awards-and-outputs',
      query: { q: state.text }
    });
    dispatch({ type: 'STATUS', status: 'success' });
  };

  const serachContext = {
    placeholder: state.placeholder,
    text: state.text,
    query: state.query,
    sortBy: state.sortBy,
    sortDesc: state.sortDesc,
    defFilterParams: state.defFilterParams,
    filterParams: state.filterParams,
    status: state.status,
    clearInput: clearInputFieldHandler,
    updateInput: updateSearchFieldHandler,
    handleSubmit: handleSubmit,
    statusHandler: statusHandler
  };

  return <SearchContext.Provider value={serachContext}>{children}</SearchContext.Provider>;
}

const initialSearchState: SearchContextType = {
  placeholder: 'Search for awards and outputs',
  defFilterParams: '&filter=',
  text: '',
  query: '',
  sortBy: 'score',
  sortDesc: true,
  filterParams: '&filter=',
  status: 'idle',
  clearInput: () => undefined,
  updateInput: () => undefined,
  handleSubmit: () => undefined,
  statusHandler: () => undefined
};
