import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, refetch}) => {
    const {email, role} = user;
    const makeAdmin =()=>{
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
        })
        .then(res=>res.json())
        .then(data=>{
            refetch()
            toast.success(`Make Admin successfully`)
        })

    }
    return (
        <tr>
        <td>{email}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-outline btn-success btn-xs">Make Admin</button>}</td>
        <td><button onClick={makeAdmin} class="btn btn-outline btn-info btn-xs">Remove user</button></td>
      </tr>
    );
};

export default UserRow;