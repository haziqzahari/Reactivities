import { observer } from 'mobx-react-lite';
import { SyntheticEvent, useState } from 'react';
import { useStore } from '../../../stores/store';
import './ActivityList.css';
import ActivityListItem from './ActivityListItem';


export default observer( function ActivityList()
{
    const {activityStore} = useStore();
    const {groupedActivities } = activityStore;
   
    return (
        <div>
            {groupedActivities.map(([group, activities]) => (
                <div className="mb-5">
                    <span className="mb-2">{group}</span>
                    {activities.map(activity => (
                        <ActivityListItem key={activity.id} activity={activity}/>
                    ))}
                </div> 
            ))}   
        </div>
    );
})