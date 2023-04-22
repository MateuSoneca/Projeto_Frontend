import * as React from "react";
import { useState } from "react";
export const Input = ({nome,valor,handleChange}) => {  


  return (
    <div className="input-container ic1">
      <input
        className="input"
        type={nome}
        placeholder={nome == "Password" ? "Senha" : "Email"}
        name="Email"
        value={valor}
        onChange={handleChange}
      />
    </div>
  );
};
