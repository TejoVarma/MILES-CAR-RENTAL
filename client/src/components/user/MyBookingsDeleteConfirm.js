import React from 'react';
import '../../styles/DeleteConfirmation.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteMyBookingById } from '../../utils/api-utils';
export default function MyBookingDeleteConfirm(props) {
    const id = props.id;
    const popUp = props.popUp;
    const navigate = useNavigate()
    function handleDelete(){
        deleteMyBookingById(id)
                .then(res => {
                    if (res.success) {
                        toast.success(`Car has successfully deleted`, {
                            position: "bottom-right"
                        });
                        popUp(false);
                        navigate('/user/mybookings');
                        window.location.reload();
                    }
                    else {
                        toast.warn("Failed to delete car, try again...")
                        navigate('/user/mybookings');
                    }
                })
    }
    return <>
        <div className='popUp-container'>
            <div className='popUp'>
                <div className='popUp-message-container'>
                    <p className="popUp-message">{`Are You Sure Want to Delete Your BooKing with Id ${id}?`}</p>
                </div>
                <div className='popUp-buttons-container'>
                    <button onClick={handleDelete} className='popUp-yes'>Yes</button>
                    <button onClick={e=> popUp(false)} className='popUp-no'>No</button>
                </div>
            </div>
        </div>
    </>
}
