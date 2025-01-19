import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import profileImage from "../../assets/man4.png";
import { useWisdomContext } from "../../context/UseWisdomContext";
import SimpleMap from "../GoogleMapInte";
import {
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaBuilding,
  FaMapMarkerAlt,
  FaArrowLeft,
} from "react-icons/fa";
import Skeleton from "@mui/material/Skeleton";
import NavBar from "../NavBar";

const UserDetail = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const { theme, apiStatus } = useWisdomContext();
  const [status, setStatus] = useState(apiStatus.loading);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      setUser(data);
      setStatus(apiStatus.success);
    } catch (error) {
      console.error("Error fetching data:", error);
      setStatus(apiStatus.error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  // If user data is not available, define default values to prevent crashes.
  const {
    name = "",
    username = "",
    email = "",
    phone = "",
    website = "",
    address = {},
    company = {},
  } = user || {};
  const { street = "", suite = "", city = "", zipcode = "", geo = {} } =
    address;
  const { name: companyName = "", catchPhrase = "", bs = "" } = company;

  return (
    <>
    <NavBar/> 
    <div
      className={`min-h-screen ${
        theme === "purpul" ? "bg-purple-50" : "bg-indigo-50"
      } p-10`}
    >
      
      <div
        className={`bg-white shadow-lg rounded-lg p-8 ${
          theme === "purpul" ? "border-purple" : "border-blue"
        } border-2`}
      >
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className={`mb-6 flex items-center gap-2 ${
            theme === "purpul" ? "bg-purpul" : "bg-blue"
          } hover:opacity-90 text-white px-4 py-2 rounded-lg shadow-sm`}
        >
          <FaArrowLeft />
          Back
        </button>

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Profile Image */}
          {status === apiStatus.loading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={128}
              height={128}
            />
          ) : (
            <img
              src={profileImage}
              alt={name}
              className="w-32 h-32 rounded-full border-4 border-gray-200 shadow-lg mb-6 md:mb-0 md:mr-8"
            />
          )}

          {/* User Details */}
          {status === apiStatus.loading ? (
            <div className="flex-1">
              <Skeleton animation="wave" variant="text" width={200} height={40} />
              <Skeleton animation="wave" variant="text" width={150} />
              <Skeleton animation="wave" variant="text" width={180} />
              <Skeleton animation="wave" variant="text" width={120} />
            </div>
          ) : (
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
              <p className="text-gray-600 text-lg">@{username}</p>
              <div className="mt-4 text-gray-700 space-y-2">
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-blue-500" />
                  {email}
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone className="text-green-500" />
                  {phone}
                </p>
                <p className="flex items-center gap-2">
                  <FaGlobe className="text-indigo-500" />
                  <a
                    href={`http://${website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-600"
                  >
                    {website}
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>

        <hr className="my-8 border-gray-300" />

        {/* Details */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Company Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
              <FaBuilding className="text-yellow-500" /> Company
            </h2>
            {status === apiStatus.loading ? (
              <>
                <Skeleton animation="wave" variant="text" width={200} />
                <Skeleton animation="wave" variant="text" width={150} />
                <Skeleton animation="wave" variant="text" width={180} />
              </>
            ) : (
              <>
                <p className="text-gray-700">{companyName}</p>
                <p className="text-gray-600 italic">{catchPhrase}</p>
                <p className="text-gray-600">{bs}</p>
              </>
            )}
          </div>

          {/* Address Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" /> Address
            </h2>
            {status === apiStatus.loading ? (
              <>
                <Skeleton animation="wave" variant="text" width={250} />
                <Skeleton animation="wave" variant="text" width={200} />
                <Skeleton animation="wave" variant="text" width={150} />
              </>
            ) : (
              <>
                <p className="text-gray-700">
                  {street}, {suite}
                </p>
                <p className="text-gray-700">
                  {city}, {zipcode}
                </p>
                <p className="text-gray-600">Lat: {geo.lat}</p>
                <p className="text-gray-600">Lng: {geo.lng}</p>
              </>
            )}
          </div>

          {/* Map */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" /> Location
            </h2>
            {status === apiStatus.loading ? (
              <Skeleton
                animation="wave"
                variant="rectangular"
                width="100%"
                height={256}
              />
            ) : (
              <div className="w-full h-64">
                <SimpleMap lat={geo.lat} lng={geo.lng} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default UserDetail;
