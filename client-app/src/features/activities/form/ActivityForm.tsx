import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { ChangeEvent } from 'react';
import { useParams } from 'react-router';
import { Form } from 'semantic-ui-react';
import { useStore } from '../../../stores/store';
import './ActivityForm.css';
import {v4 as uuid} from 'uuid';
import { useHistory } from 'react-router-dom';


export default observer( function ActivityForm() 
{
    const history = useHistory();
    const {activityStore} = useStore();
    const {selectedActivity, loadActivity, createActivity, updateActivity, loading} = activityStore;
    const {id} = useParams<{id:string}>(); 

    const [activity, setActivity] = useState({
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: ''
    });

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!));
    }, [id, loadActivity]);

    function handleSubmit() 
    {
        if ( activity.id.length === 0) {
            let newActivity = {
                ...activity,
                id: uuid()
            };
            createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`));
        }
        else {
            updateActivity(activity).then(()=> history.push(`/activities/${activity.id}`));
        }
    }
    


    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> )
    {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value})
    }

    

    return (
        <div className="container">
            <div className="row p-4">
                <div className="col-md-12">
                    <div className="mt-1 px-xs-2 px-md-4 pt-4">
                        <div className="card">
                            <div className="card-body" >
                                <Form  onSubmit={handleSubmit} >
                                    <div>
                                        <input type="text" className="my-4 form-control" placeholder="Title" autoComplete='off'  value={activity.title} name="title" onChange={handleInputChange} autoFocus/>
                                        <textarea className="my-4 form-control" placeholder="Description" autoComplete='off' value={activity.description} name="description" onChange={handleInputChange} rows={3}></textarea>
                                        <input type="text" className="my-4 form-control" placeholder="Category" autoComplete='off' value={activity.category} name="category" onChange={handleInputChange}/>
                                        <input type="date" className="my-4 form-control" placeholder="Date" autoComplete='off' value={activity.date} name="date" onChange={handleInputChange}/>
                                        <input type="text" className="my-4 form-control" placeholder="City" autoComplete='off' value={activity.city} name="city" onChange={handleInputChange}/>
                                        <input type="text" className="my-4 form-control" placeholder="Venue" autoComplete='off' value={activity.venue} name="venue" onChange={handleInputChange}/>    
                                    </div>
                                    <hr/>
                                    <div className="mt-4">
                                        <button disabled className="btn btn-outline-danger rounded-0 col-md-6">Cancel</button>
                                        <button className="btn btn-success rounded-0 col-md-6" type="submit" >Submit</button>
                                    </div>        
                                </Form>
                            </div>
                        </div>      
                    </div>
                </div>

            </div>
        </div>
    );
})