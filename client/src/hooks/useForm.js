// write your custom hook here to control your checkout form
import {useLocalStorage} from './useLocalStorage'
import {useState} from 'react'

const useForm = (key, initialValue) => {
    const [values, setValues] = useLocalStorage(key, initialValue)


    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

    return [values, handleChanges]
}

export default useForm