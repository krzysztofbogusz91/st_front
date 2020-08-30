import React from "react";
import InfiniteScroll from 'react-infinite-scroller';
import { Activity } from '../Dashboard';
import ActivityComponent from '../ActivityComponent/ActivityComponent';
import '../Dashboard.scss';
import { ApolloQueryResult } from 'apollo-boost';


interface FeedProps {
  activities: Activity[];
  onLoadMore: (e: number) => Promise<ApolloQueryResult<Activity[]>>
}

const Feed = (props: FeedProps) => {
  const { activities,  onLoadMore } = props;

  const displayActivities = (activities: Activity[]) => {
    return activities.map( (activity: Activity) => {
      const key = activity.id;
      return <ActivityComponent key={key} activity={activity}></ActivityComponent>
    });
  }

  return (
    <ul className="dashboard-content-list">
      <InfiniteScroll
          pageStart={1}
          loadMore={onLoadMore}
          hasMore={true || false}
          loader={<div className="loader" key={0}>Loading ...</div>}
      >
        { displayActivities(activities) }
      </InfiniteScroll>
    </ul>
  )
}

export default Feed;

