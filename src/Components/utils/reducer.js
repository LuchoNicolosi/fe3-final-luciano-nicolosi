export const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_DENTISTS':
      return {
        ...state,
        dentists: action.payload,
      };
    case 'ADD_FAV':
      return {
        ...state,
        favs: [...state.favs, action.payload],
      };
    case 'DELETE_FAV':
      return {
        ...state,
        favs: action.payload,
      };
    case 'light':
      return {
        ...state,
        theme: {
          bgLayout: 'bg-[#daedea]',
          bgNavbar: 'bg-[#c1dad6]',
          bgFooter: 'bg-[#a8c8c1]',
          bgNavCard: 'bg-[#f3ffff]',
          textColor: 'text-[#8fb5ac]',
          pathColor: 'text-[#383845]',
          bgBtn: 'bg-[#c1dad6]',
          hoverBgBtn: 'hover:bg-[#7b9994]',
          hoverTextBtn: 'hover:text-[#f3ffff]',
          colorTextBtn: 'text-[#383845]',
        },
      };
    case 'dark':
      return {
        ...state,
        theme: {
          bgLayout: 'bg-[#1e313e]',
          bgNavbar: 'bg-[#344754]',
          bgFooter: 'bg-[#0f1720]',
          bgNavCard: 'bg-[#1e313e]',
          textColor: 'text-[#838383]',
          pathColor: 'text-[#d6d6d6]',
          bgBtn: 'bg-[#7b9994]',
          hoverBgBtn: 'hover:bg-[#c1dad6]',
          colorTextBtn: 'text-[#f3ffff]',
          hoverTextBtn: 'hover:text-[#383845]',
        },
      };
  }
};
