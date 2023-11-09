import React from "react";
import styles from "./Buscador.module.scss";

type PropsBuscador = {
    valorBuscador: string,
}

export default function Buscador({valorBuscador}: PropsBuscador) {

    const [search, setSearch] = React.useState("");

    console.log(search)

    return<>
    <div>
        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
    </div>
    </>
}