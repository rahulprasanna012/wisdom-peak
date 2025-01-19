Wisdom Peak
Wisdom Peak is a user-friendly web application designed to manage user data efficiently. It features functionalities like a user list with pagination, individual user detail views, and customizable themes.

Table of Contents
Overview
Features
Demo
Installation
Technologies Used
API Reference
Usage
Screenshots

Overview
Wisdom Peak simplifies user data management by offering:

A paginated user list.
Detailed user profiles with company, address, and location information displayed on Google Maps.
Responsive and theme-based UI.
Features
Paginated User List: Displays user data in a sticky table with pagination.
User Profile View: Detailed user profiles including name, email, address, company, and geolocation on a map.
Loading Indicators: Displays loaders while fetching data.
Error Handling: Handles errors when API requests fail.
Custom Themes: Choose between "purple" or "indigo" themes.
Google Maps Integration: View user geolocations seamlessly.
Demo
Live Demo: Wisdom Peak (Replace with actual live demo link if available)

Installation
Clone the repository:



git clone https://github.com/your-username/wisdom-peak.git
cd wisdom-peak
Install dependencies:


npm install
Start the development server:


npm start
Open your browser and navigate to:


http://localhost:3000
Technologies Used
React.js: Framework for building the user interface.
React Router: For handling navigation between pages.
Material-UI (MUI): UI components for tables, loaders, and pagination.
Google Maps API: Displays user geolocations on the map.
JavaScript (ES6+): Core programming language.
CSS: TailwindCSS.

API Reference
Wisdom Peak uses the JSONPlaceholder API for fetching user data.

Endpoints
User List:

Endpoint: https://jsonplaceholder.typicode.com/users
Method: GET
User Details:

Endpoint: https://jsonplaceholder.typicode.com/users/:id
Method: GET
Sample User Data:
json
Copy
Edit
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
Usage
Open the Wisdom Peak homepage.
View the list of users in a paginated table.
Click on a user to view their detailed profile, including:
Name, email, and phone number.
Company information.

Screenshots

1. Paginated User List
![Screenshot 2025-01-19 165139](https://github.com/user-attachments/assets/7d27f6be-6ab6-443f-b010-a8d1f2e80fd0)

2. User Profile Page
   ![Screenshot 2025-01-19 165200](https://github.com/user-attachments/assets/53d64101-8b90-4124-950c-33f78db2d443)




4. Error State
5. ![image](https://github.com/user-attachments/assets/7b963d2b-abbe-441f-8b5c-e2b7f5a95b87)




Fork the repository.
Create a new branch: git checkout -b feature-name.
Commit your changes: git commit -m 'Add feature-name'.
Push to the branch: git push origin feature-name.
Open a pull request.


Author
Created with ❤️ by Your Prasanna S. Feel free to connect!
