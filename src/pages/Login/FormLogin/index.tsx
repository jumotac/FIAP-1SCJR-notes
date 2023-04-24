import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useCallback,
  useContext,
  useState,
} from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import { Context } from "../../../Context/AuthContext";
import { Form } from "./styles";

export interface FormValueState {
  username: string;
  password: string;
}

interface FormLoginProps {
  handleSubmit: (payload: FormValueState) => void;
}

function FormLogin({ handleSubmit }: FormLoginProps) {
  const { loading: loadingAuth } = useContext(Context);

  const [formValues, setFormValues] = useState<FormValueState>({
    username: "",
    password: "",
  });

  const handleInput = (event: ChangeEvent<HTMLInputElement>) =>
    setFormValues({ ...formValues, [event.target.id]: event.target.value });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(formValues);
  };

  return (
    <Form onSubmit={onSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        id="username"
        value={formValues.username}
        onChange={handleInput}
        autoFocus
        placeholder="Insira seu usuário"
      />
      <input
        type="password"
        id="password"
        value={formValues.password}
        onChange={handleInput}
        autoFocus
        placeholder="Insira sua senha"
      />

      <Button handleClick={() => {}}>
        {loadingAuth ? "Carregando..." : "Entrar"}
      </Button>
      <Link to="/register">Registrar</Link>
    </Form>
  );
}

export default FormLogin;
