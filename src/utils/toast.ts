import {toast} from 'react-toastify';

export default function notify(message: string){
    toast.error(message, {
        closeOnClick: true,
        draggable: true,
        theme: "colored",
        position: "top-right"
    });
}