import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, useGlobalContext } from "./useGlobalContext";
import axios, { AxiosResponse } from "axios";
import { useAxios } from "./useAxios";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { post } = useAxios();
  const { setUser } = useGlobalContext();

  const login = async (userName: string, password: string) => {
    setLoading(true);
    try {
      const data = await post<User, { userName: string; password: string }>(
        "sign-in",
        {
          userName: userName,
          password: password,
        }
      );

      if (data.rol === "doctors") {
        setUser(data);
        navigate("/doctors");
      }
      if (data.rol === "patients") {
        setUser(data);
        navigate("/patients");
      }
    } catch (e) {
      setError((e as Error).message);
    }
    setLoading(false);
  };

  return {
    loading,
    error,
    login,
  };
};
