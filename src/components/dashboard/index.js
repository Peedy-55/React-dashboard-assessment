import React, { useState, useEffect } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';
import './index.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);



const Dashboard = () => {
  const [revenue, setRevenue] = useState(0);
  const [transactions, setTransactions] = useState(0);
  const [likes, setLikes] = useState(0);
  const [users, setUsers] = useState(0);
  const [activities, setActivities] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [todaySchedule, setTodaySchedule] = useState([]);

  useEffect(() => {
    // Fetch data from API or database
    const fetchData = async () => {
      const response = await fetch("https://freetestapi.com/api/v1/todos");
      const data = await response.json();

      setRevenue(data[0].id);
      setTransactions(data[1].id);
      setLikes(data[2].id);
      setUsers(data[3].id);
      setActivities(data.slice(4, 8));
      setTopProducts(data.slice(8, 11));
      setTodaySchedule(data.slice(11, 13));
    };

    fetchData();
  }, []);

  const activitiesData = {
    labels: activities.map((activity) => activity.title),
    datasets: [
      {
        label: "Guest",
        data: activities.map((activity) => activity.id),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "User",
        data: activities.map((activity) => activity.userId),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const topProductsData = {
    labels: topProducts.map((product) => product.title),
    datasets: [
      {
        data: topProducts.map((product) => product.id),
        backgroundColor: ["#008000", "#ffa500", "#800080"],
      },
    ],
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="sidebar-header">Board.</div>
        <ul className="sidebar-nav">
          <li>Dashboard</li>
          <li>Transactions</li>
          <li>Schedules</li>
          <li>Users</li>
          <li>Settings</li>
        </ul>
        <div className="sidebar-footer">
         <div>
            <p>Help</p>
         </div>
         <div>
            <p>Contact</p>
         </div>
        </div>
      </div>
      <div className="main-area">
        <div className="main-area-header">
          <div className="main-area-heading">Dashboard</div>
          <div className="main-area-search-bar">
            <input type="text" placeholder="Search" />
          </div>
          <div className="main-area-notification-icon">
            <i className="fas fa-bell"></i>
          </div>
          <div className="main-area-profile-picture">
            <img src="profile-picture.jpg" alt="Profile" />
          </div>
        </div>
        <div className="main-area-containers">
          <div className="main-area-container main-area-container-green">
            <div className="main-area-container-icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <div className="main-area-container-heading">{revenue}</div>
            <div className="main-area-container-subheading">Revenue</div>
          </div>
          <div className="main-area-container main-area-container-orange">
            <div className="main-area-container-icon">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <div className="main-area-container-heading">{transactions}</div>
            <div className="main-area-container-subheading">Total Transactions</div>
          </div>
          <div className="main-area-container main-area-container-red">
            <div className="main-area-container-icon">
              <i className="fas fa-heart"></i>
            </div>
            <div className="main-area-container-heading">{likes}</div>
            <div className="main-area-container-subheading">Total Likes</div>
          </div>
          <div className="main-area-container main-area-container-purple">
            <div className="main-area-container-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="main-area-container-heading">{users}</div>
            <div className="main-area-container-subheading">Total Users</div>
          </div>
        </div>
        <div className="main-area-graph">
          <div className="main-area-graph-heading">Activities</div>
          <div className="main-area-graph-dropdown">
            <select>
              <option value="May-June 2021">May-June 2021</option>
              <option value="June-July 2021">June-July 2021</option>
              <option value="July-August 2021">July-August 2021</option>
            </select>
          </div>
          <div className="main-area-graph-canvas">
            <Line data={activitiesData} />
          </div>
        </div>
        <div className="main-area-cards">
          <div className="main-area-card">
            <div className="main-area-card-heading">Top Products</div>
            <div className="main-area-card-dropdown">
              <select>
                <option value="May-June 2021">May-June 2021</option>
                <option value="June-July 2021">June-July 2021</option>
                <option value="July-August 2021">July-August 2021</option>
              </select>
            </div>
            <div className="main-area-card-pie-chart">
              <Pie data={topProductsData} />
            </div>
          </div>
          <div className="main-area-card">
            <div className="main-area-card-heading">Today's Schedule</div>
            <div className="main-area-card-see-all">
              <p>See all</p>
            </div>
            <div className="main-area-card-event-cards">
              {todaySchedule.map((event) => (
                <div className="main-area-card-event-card" key={event.id}>
                  <div className="main-area-card-event-card-heading">{event.title}</div>
                  <div className="main-area-card-event-card-time">{event.body}</div>
                  <div className="main-area-card-event-card-location">{event.userId}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
