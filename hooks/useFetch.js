import { useState } from "react";
import HttpReq from "@/utils/HttpReq";

export default function useFetch() {
  const [data, setData] = useState(null);

  const executeRequest = async (url, params, verb) => {
    try {
      const result = await HttpReq(url, params, verb);
      setData(result);
      console.log("req done: ", result);
    } catch (error) {
      console.error("req error:", error);
    }
  };

  return { executeRequest, data };
}


/*
 * como usar? 
 * 1 - crie uma function na sua page de render
 * 2 - nessa funcao, chame a funcao do hook. como param, passe a url, o body e o verbo http
 * exemplo: const buscarPosts = () => {
    executeRequest("https://jsonplaceholder.typicode.com/posts", { postId: 5 }, "GET");
  };
 * 3 - se for um botão, passe a função no onClick
 * exemplo: <button
      onClick={() => executeRequest("url", { params }, "VERBO")}}
    >
      placeholder
    </button>
 * 4 - seja feliz!
 */