import { createContext, useContext, useState } from "react";

export const FavoritasContext = createContext();
FavoritasContext.displayName = "Favotritas";

export default function FavoritasProvider({ children }) {
  const [favorita, setFavorita] = useState([]);

  return (
    <FavoritasContext.Provider value={{ favorita, setFavorita }}>
      {children}
    </FavoritasContext.Provider>
  );
}

export function useFavoritaContext() {
  const { favorita, setFavorita } = useContext(FavoritasContext);

  function adicionarFavorita(novaFavorita) {
    const favoritaRepetida = favorita.some((item) => item.id === novaFavorita);

    let novaLista = [...favorita];

    if (!favoritaRepetida) {
      novaLista.push(novaFavorita);
      return setFavorita(novaLista);
    }

    novaLista.splice(
      novaLista.findIndex(
        item => item.id === novaLista.find(item => item.id === novaFavorita.id).id
      ),
      1
    )
    return setFavorita(novaLista);
  }

  return {
    favorita, 
    adicionarFavorita
  }
}
