import { useEffect, useState } from "react";
import { getCidade } from "../../services/cidade";
import { Cidade } from "../../types/cidade";

export default function Teste() {
  const [data, setData] = useState<Cidade[]>([]);

  useEffect(() => {
      getCidade().then((response) => {
      setData(response);
    });
  }, []);

  console.log(data);

  return <> {data.map((cidade) => (
      <div key={cidade.id}>{cidade.nomecidade} ... {cidade.estado}</div>

  ))}</>;
}
