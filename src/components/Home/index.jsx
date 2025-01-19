import React, { useState, useEffect } from 'react';
import { useWisdomContext } from '../../context/UseWisdomContext';
import TotalItems from '../TotalItems';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import StickyHeadTable from '../TableData';

const Home = () => {
  const { theme, apiStatus } = useWisdomContext();
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState(apiStatus.loading);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
      setStatus(apiStatus.success);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const userCount = users.length;
  const cityCount = new Set(users.map((user) => user.address.city)).size;
  const companyCount = new Set(users.map((user) => user.company.name)).size;

  const countData = [
    {
      id: 1,
      title: 'Users',
      iconsText: 'users',
      count: userCount,
    },
    {
      id: 2,
      title: 'Cities',
      iconsText: 'city',
      count: cityCount,
    },
    {
      id: 3,
      title: 'Companies',
      iconsText: 'company',
      count: companyCount,
    },
  ];

  console.log(users);
  return (
    <div className="bg-lightBlue min-h-screen">
      <ul className="flex flex-wrap justify-evenly items-center gap-6 mt-10 px-4">
        {countData.map((data) => (

            
          <li key={data.id} className="w-full sm:w-auto">
            {status === apiStatus.loading ? (<Box sx={{ pt: 0.5 }}>
                <Skeleton variant="rectangular" width={300} height={118} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>):
                
                
                <TotalItems
              text={data.title}
              count={data.count}
              iconText={data.iconsText}
              
            />}
          </li>
        
        ))}
      </ul>

        <div className=' mx-[4%] md:mx-[8%]'>

            <h1 className="text-3xl font-bold mt-10">List of Users</h1>
            <StickyHeadTable userList={users} isLoading={status==="Loading"}/>


        </div>



    </div>
  );
};

export default Home;
