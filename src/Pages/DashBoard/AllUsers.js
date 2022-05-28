import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const {data: users, isLoading, refetch} = useQuery('users', () => fetch('https://quiet-beach-66273.herokuapp.com/user',{
        method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
    }).then(res=>res.json()));
    if(isLoading){
      return <Loading></Loading>
    }

    return (
        <div className='bg-info h-full'>
            <h2 className='text-2xl mt-5 pb-5 lg:text-center font-bold text-white'>All Users</h2>
            <div class="overflow-x-auto">
  <table class="table w-75 mx-auto mb-5">
    {/* <!-- head --> */}
    <thead>
      <tr>
        
        <th>User Email</th>
        <th></th>
        <th></th>
        
      </tr>
    </thead>
    <tbody>
      {
          users.map(user=><UserRow
          key={user._id}
          user={user}
          refetch={refetch}
          ></UserRow>)
      }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;