import React from "react";
import '../Dashboard.scss';
import { Activity } from '../Dashboard';

interface ActivityComponentProps {
  activity: Activity;
}

const ActivityComponent = (props: ActivityComponentProps) => {
      const { activity } = props;
      return (
        <li className="dashboard-content-list-element" >
          <div>Activity: {activity.name}</div>
          <div>Type: {activity.type}</div>
          <div>Started: {activity.start_date}</div>
          <div>Location: {activity.location_country}</div>
        </li>
      )
    }

export default ActivityComponent;

