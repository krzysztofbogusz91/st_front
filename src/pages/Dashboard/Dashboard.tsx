import React from "react";
import './Dashboard.scss';

export interface Activity {
  name: string;
  id: number;
  start_date: string;
  location_country: string;
  type: string;
}

export function Dashboard() {
  
  return (
    <div>
      <div className="container-box">
        Dashboard works
      </div>
    </div>
  );
}

export default Dashboard;

