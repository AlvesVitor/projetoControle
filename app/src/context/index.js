import React, { createContext, useState, useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Buttons } from "../Object";

export const Context = createContext({});

export default function ContextProvider({ children }) {
    const [buttons, setButtons] = useState(Buttons);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadingStore();
    }, [])

    async function loadingStore() {
        const storage = await AsyncStorage.getItem("Config_Buttons");
        if (storage) {
            setButtons(JSON.parse(buttons))
        }
    }

    async function storageSave(name, object) {
        await AsyncStorage.setItem(name, JSON.stringify(object));
    }

    async function configSave() {
        setLoading(true)
        await storageSave("Config_Buttons", buttons)
            .then(() => Alert.alert("Sucesso!", "Confiturações salva."))
            .catch(() => Alert.alert("Atenção!", "Erro ao salvar."))
        setLoading(false)
    }

    function updateValue(e, index) {
        if (e) {
            let stateCurrent = buttons;
            stateCurrent[index].value = e;
            setButtons(stateCurrent);
        }
    }

    return (
        <Context.Provider value={{
            buttons,
            loading,
            updateValue,
            configSave,
        }}>
            {children}
        </Context.Provider>
    )

}