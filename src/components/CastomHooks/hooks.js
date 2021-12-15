import {useEffect, useState} from "react";

export const useValidation = (value) => {
    const [isEmpty, setEmpty] = useState(true);
    useEffect(() => {
        value ? setEmpty(false) : setEmpty(true)
    }, [value])
    return isEmpty
}

export const useField = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value)
    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        valid
    }
}