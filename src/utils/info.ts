import {toast} from 'react-toastify';

export default function info(message: string){
    toast(message, {
        closeOnClick: true,
        draggable: true,
        theme: "colored",
        position: "top-right"
    });
}