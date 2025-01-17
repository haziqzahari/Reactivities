import { action, makeAutoObservable, makeObservable, observable, runInAction } from 'mobx';
import { format } from 'date-fns';
import { ModalActions } from 'semantic-ui-react';
import agent from '../api/agent';
import { Activity } from '../modules/Activity';

export default class ActivityStore {
    activityRegistry = new Map<string, Activity>();
    selectedActivity: Activity | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this);
    }

    get activitiesByDate() {
        return Array.from(this.activityRegistry.values()).sort((a, b) => 
            a.date!.getTime() - b.date!.getTime());
    }

    get groupedActivities(){
        return Object.entries(
            this.activitiesByDate.reduce((activities, activity) => {
                const date = format(activity.date!, 'dd MMM yyyy');
                activities[date] = activities[date] ? [...activities[date], activity] : [activity];
                return activities;
            }, {} as {[key: string]: Activity[]})
        )
    }

    loadActivity = async (id: string) => {
        let activity = this.getActivity(id);
        if (activity) {
            this.selectedActivity = activity;
            return activity;
        }
        else {
            this.loadingInitial = true;
            try {
                activity = await agent.Activities.details(id);
                this.setActivity(activity);
                this.selectedActivity = activity;
                this.setLoadingInitial(false);
                return activity;
            } catch (error) {
                alert(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setActivity = (activity: Activity) => {
        activity.date = new Date(activity.date!);
        this.activityRegistry.set(activity.id, activity);
    }

    private getActivity = (id: string) => {
        return this.activityRegistry.get(id);
    }

    loadActivities = async () => {
        this.setLoadingInitial(true);

        try {
            const activities = await agent.Activities.list();
            activities.forEach(activity => {
                this.setActivity(activity);
            });
            this.setLoadingInitial(false);
        
        } catch (error) {
            alert(error);            
            this.setLoadingInitial(false)
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createActivity = async (activity: Activity) => {
        this.setLoadingInitial(true);
        try {
            await agent.Activities.create(activity);
            runInAction(() => {
                this.activityRegistry.set(activity.id, activity);
                this.selectedActivity = activity;
                this.editMode = false;
                alert("Activity Created!");
                this.setLoadingInitial(false);
            })
        } catch (error) {
            alert(error);
            runInAction(() => {
                this.setLoadingInitial(false);
            })
        }
    }

    updateActivity = async (activity: Activity) => {
        this.setLoadingInitial(true);
        try {
            await agent.Activities.update(activity);
            runInAction(() => {
                this.activityRegistry.set(activity.id, activity);
                this.selectedActivity = activity;
                this.editMode = false;
                alert("Activity Updated!");
                this.setLoadingInitial(false);
            })
        } catch (error) {
            alert(error);
            runInAction(() => {
                this.setLoadingInitial(false);
            })
        }
    }

    deleteActivity = async (id: string) => {
        this.setLoadingInitial(true);
        try {
            await agent.Activities.delete(id);
            runInAction(() => {
                this.activityRegistry.delete(id);
                alert("Activity Deleted.");
                this.setLoadingInitial(false);
            })
        } catch (error) {
            alert(error);
            runInAction(() => {
                this.setLoadingInitial(false);
            })
        }
    }
}

