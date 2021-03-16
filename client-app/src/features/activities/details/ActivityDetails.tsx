import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Component } from 'react';
import { useParams } from 'react-router';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../modules/Activity';
import { useStore } from '../../../stores/store';
import LoadingComponent from '../LoadingComponents';
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetailedHeader from './ActivityDetailedHeader';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityDetailedSidebar from './ActivityDetailedSidebar';



export default observer( function ActivityDetails()
{
    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity]);

    if(loadingInitial || !activity) return <LoadingComponent />;

    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-md-8">
                    <ActivityDetailedHeader activity={activity} />
                    <ActivityDetailedInfo activity={activity} />
                    <ActivityDetailedChat />
                </div>
                <div className="col-md-4">
                    <ActivityDetailedSidebar />
                </div>
            </div>
        </div>
    );
})