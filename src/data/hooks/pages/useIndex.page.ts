import { useState } from "react";
import { UserShortIrterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationService";

export default function useIndex() {
  // CEP
  const [cep, setCep] = useState("");
  // Mensagem de Erro
  const [error, setError] = useState("");
  // Busca por endereço(CEP)
  const [search, setSearch] = useState(false);
  // Carregando
  const [load, setLoad] = useState(false);
  // diaristas
  const [professional, setProfessional] = useState([] as UserShortIrterface[]);
  // diaristas restantes
  const [others, setProfessionalsOthers] = useState(0);

  return {
    cep,
    setCep,
    error,
    setError,
  };
}
