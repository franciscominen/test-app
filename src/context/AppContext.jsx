import React, { useState, createContext, useEffect } from "react";


export const listContext = createContext();
export const ListProvider = ({ children }) => {

    const [myList, setMyList] = useState([])
    const [note, setNote] = useState('') //chequear si no es []

    return (
        <>
            <listContext.Provider value={{
                myList: myList,
                setMyList: setMyList,
                note: note,
                setNote: setNote
            }}>

                {children}

            </listContext.Provider>
        </>
    )
}