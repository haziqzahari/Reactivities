import * as React from 'react';
import { useState } from 'react';
import { SyntheticEvent } from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, Segment } from 'semantic-ui-react';
import { Activity } from '../../../modules/Activity';
import { useStore } from '../../../stores/store';
import { format } from 'date-fns';

interface Props {
    activity: Activity
}

export default function ActivityListItem({activity}: Props) {

    const {activityStore} = useStore();
    const {deleteActivity, activitiesByDate } = activityStore;
    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string){
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return (
        <Segment.Group>
        <Segment>
            <Item.Group>
                <Item>
                    <Item.Image size='tiny' circular src='/images/user.png' />
                    <Item.Content>
                        <Item.Header as={Link} to={`/activities/${activity.id}`}>
                            {activity.title}
                        </Item.Header>
                        <Item.Description>Hosted by Bob</Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
        <Segment>
            <span>
                <Icon name='clock' /> {format(activity.date!, 'dd MMM yyyy h:m aa')}
                <Icon name='marker' /> {activity.venue}
            </span>
        </Segment>
        <Segment secondary>
            Attendees go here
        </Segment>
        <Segment clearing>
            <span>{activity.description}</span>
            <Button 
                as={Link}
                to={`/activities/${activity.id}`}
                color='teal'
                floated='right'
                content='View'
            />
        </Segment>
    </Segment.Group>
    );
}