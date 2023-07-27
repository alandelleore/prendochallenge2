import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const InputName = () => {
  const { setData, data } = useContext(GlobalContext);

  const handleChange = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  return (
    <div>
      <h2>Ingresá el nombre del titular de la agencia</h2>
      <input
        type="text"
        className="form-control mt-4 mb-2"
        placeholder="Ej: Juan Perez"
        defaultValue={data.name}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default InputName;
