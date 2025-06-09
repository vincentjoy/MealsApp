import { createContext } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {}, // This is not needed here to be added. But adding it for autocompletiom in other files
    removeFavorite: (id) => {}
});

function FavoritesContextProvider({ children }) {
    return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;