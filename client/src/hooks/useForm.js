// write your custom hook here to control your checkout form
import {useLocalStorage} from './useLocalStorage'
import {useEffect} from 'react'

const useForm = (key, initialValue) => {
    const [values, setValues] = useLocalStorage(key, initialValue)


    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const toggleMode = e => {
        e.preventDefault();
        setValues(!values);
    };

    useEffect(()=>{
        if (key == 'light mode') {
            window.document.body.classList.toggle("light");
            window.document.getElementsByTagName('form')[0].classList.toggle('light')
        }
    },[values])

    return [values, handleChanges, toggleMode]
}

export default useForm