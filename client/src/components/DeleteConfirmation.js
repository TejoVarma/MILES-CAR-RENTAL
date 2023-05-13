import React from 'react';
import '../styles/DeleteConfirmation.css'
import { deleteCar } from '../utils/api-utils';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function DeleteConfirmation(props) {
    const id = props.id;
    const popUp = props.popUp;
    const navigate = useNavigate()
    function handleDelete(){
        deleteCar(id)
                .then(res => {
                    if (res.status === "Success") {
                        toast.success(`Car has successfully deleted`, {
                            position: "bottom-right"
                        });
                        popUp(false);
                        navigate('/admin/cars');
                        // window.location.reload();
                    }
                    else {
                        alert("Failed to delete car, try again...")
                    }
                })
    }
    return <>
        <div className='popUp-container'>
            <div className='popUp'>
                <div className='popUp-message-container'>
                    <p className="popUp-message">Are You Sure Want to Delete?</p>
                </div>
                <div className='popUp-buttons-container'>
                    <button onClick={handleDelete} className='popUp-yes'>Yes</button>
                    <button onClick={e=> popUp(false)} className='popUp-no'>No</button>
                </div>
            </div>
        </div>
    </>
}
