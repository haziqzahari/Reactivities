import { useEffect, useState } from 'react';
import ActivityList from './ActivityList';
import './ActivityDashboard.css';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../LoadingComponents';
import React from 'react';
import ActivityFilters from './ActivityFilters';

export default observer( function ActivityDashboard() 
{
    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore;

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(activityRegistry.size <= 1) loadActivities();
        setLoading(false);
    }, [activityRegistry.size, loadActivities]);

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading Activities...' />
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-sm-12 pt-3">
                    <ActivityList 
                    />
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="sticky-top">
                        <ActivityFilters />
                    </div>
                </div>
            </div>
        </div>
    );
})