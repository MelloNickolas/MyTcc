import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimalById } from "../../services/animals";
import { Animal } from "../../types/animal";
import FullToolbar from "../../components/FullToolbar";

export default function AnimalDescription(){
    const params = useParams(); // pega o parametro da url, paga o id
    const [data, setData] = useState<Animal>();

    const id = params.id
    
    useEffect(() => {
        getAnimalById(id).then((response) => {
          setData(response);
        });
      }, [id]);

    return(
        <>
        <body>
            <FullToolbar/>
       
            <p>{id}</p>
            <p>{data && JSON.stringify(data)}</p>
            <p>{data ? data.nomeanimal : 'Carregando...'}</p>


        </body>
        </>
    )
}
