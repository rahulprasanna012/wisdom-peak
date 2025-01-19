import React, { useState, useEffect } from 'react';
import { useWisdomContext } from '../../context/UseWisdomContext';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import StickyHeadTable from '../TableData';
import UserContainer from '../UserContainer';

const renderContainer = (users, status) => {
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

  return countData.map((data) => (
    <li key={data.id} className="w-full sm:w-auto">
      {status === "LOADING" ? (
        <Box sx={{ pt: 0.5 }}>
          <Skeleton variant="rectangular" width={300} height={118} />
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      ) : (
        <UserContainer text={data.title} count={data.count} iconText={data.iconsText} />
      )}
    </li>
  ));
};

const Home = () => {
  const { theme, apiStatus } = useWisdomContext();
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState(apiStatus.loading);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
      setFilteredUsers(data);
      setStatus(apiStatus.success);
    } catch (error) {
      console.log(error);
      setStatus(apiStatus.error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSort = (e) => {
    const selectedSort = e.target.value;
    setSort(selectedSort);

    const sortedUsers = [...filteredUsers].sort((a, b) =>
      selectedSort === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setFilteredUsers(sortedUsers);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const exportToCSV = () => {
    const csvRows = [
      ['ID', 'Name', 'Email', 'City', 'Company'], // Header
      ...filteredUsers.map((user) => [
        user.id,
        user.name,
        user.email,
        user.address.city,
        user.company.name,
      ]),
    ];

    const csvContent = csvRows.map((row) => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'users.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-lightBlue min-h-screen">
      <ul className="flex flex-wrap justify-evenly items-center gap-6 mt-10 px-4">
        {renderContainer(users, status)}
      </ul>

      <div className="mx-[4%] md:mx-[8%]">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold mt-10">List of Users</h1>
            <p className="text-gray-500">Showing data of users</p>
          </div>

          <button
            className={`p-2 px-3 bg-blue-500 text-white rounded-lg ${theme === 'purpul' ? 'bg-purpul' : 'bg-blue'} flex items-center space-x-2`}
            onClick={exportToCSV}
          >
            <IoIosArrowRoundDown size={25} />
            Export CSV
          </button>
        </div>

        <div className="bg-white p-4 mt-5 mb-5 rounded-lg flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="rounded-lg border border-gray-300 flex items-center p-2 md:w-4/6 text-gray-500">
            <IoSearchOutline size={20} />
            <input
              type="text"
              placeholder="Search Users"
              className="w-full ml-2 outline-none"
              onChange={handleSearch}
              value={search}
            />
          </div>

          <div className="flex items-center space-x-4">
            <select
              className="p-2 w-52 rounded-lg border border-gray-300 text-gray-500 outline-none"
              value={sort}
              onChange={handleSort}
            >
              <option value="" disabled>
                Sort by
              </option>
              <option value="asc">A - Z</option>
              <option value="desc">Z - A</option>
            </select>
          </div>
        </div>

        <StickyHeadTable userList={filteredUsers} isLoading={status === apiStatus.loading} />
      </div>
    </div>
  );
};

export default Home;
