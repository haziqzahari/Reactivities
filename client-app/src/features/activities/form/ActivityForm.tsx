import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { ChangeEvent } from 'react';
import { useParams } from 'react-router';
import { Form, FormField, Header, Label } from 'semantic-ui-react';
import { useStore } from '../../../stores/store';
import './ActivityForm.css';
import {v4 as uuid} from 'uuid';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../common/MyTextInput';
import MyTextArea from '../../../common/MyTextArea';
import MySelectInput from '../../../common/MySelectInput';
import { categoryOptions } from '../../../common/options/categoryOptions';
import MyDateInput from '../../../common/MyDateInput';
import { Activity } from '../../../modules/Activity';


export default observer( function ActivityForm() 
{
    const history = useHistory();
    const {activityStore} = useStore();
    const {selectedActivity, loadActivity, createActivity, updateActivity, loading} = activityStore;
    const {id} = useParams<{id:string}>(); 

    const [activity, setActivity] = useState<Activity>({
        id: '',
        title: '',
        date: null,
        description: '',
        category: '',
        city: '',
        venue: ''
    });


    const validationSchema = Yup.object({
        title: Yup.string().required('The activity title is required.'),
        description: Yup.string().required('The activity description is required.'),
        category: Yup.string().required('The activity category is required.'),
        venue: Yup.string().required('The activity venue is required.'),
        city: Yup.string().required('The activity city is required.'),
        date: Yup.string().required('The activity date is required.').nullable()
    })

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!));
    }, [id, loadActivity]);

    function handleFormSubmit(activity: Activity) 
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
    


    // function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> )
    // {
    //     const {name, value} = event.target;
    //     setActivity({...activity, [name]: value})
    // }

    

    return (
        <div className="container">
            <div className="row p-4">
                <div className="col-md-12">
                    <div className="mt-1 px-xs-2 px-md-4 pt-4">
                        <div className="card">
                            <div className="card-body" >
                                <Header content='Activity Details' sub color='teal'/>
                                <Formik 
                                validationSchema={validationSchema}
                                enableReinitialize 
                                initialValues={activity} 
                                onSubmit={values => handleFormSubmit(activity)}>
                                    {({handleSubmit, isValid, isSubmitting, dirty}) => (
                                        <Form onSubmit={handleSubmit}>
                                        <div>
                                            <MyTextInput name='title' placeholder='Title'/>
                                            <MyTextArea placeholder="Description" name="description" rows={3}/>
                                            <MySelectInput options={categoryOptions} placeholder="Category" name="category" />
                                            <MyDateInput placeholderText="Date"  name="date" showTimeSelect timeCaption='time' dateFormat='MMMM d, yyyy h:mm aa'/>
                                            <Header content='Location Details' sub color='teal'/>
                                            <MyTextInput placeholder="City"  name="city"/>
                                            <MyTextInput placeholder="Venue"   name="venue"/>    
                                        </div>
                                        <hr/>
                                        <div className="mt-4">
                                            <a href='/activities' className="btn btn-outline-danger rounded-0 col-md-6">Cancel</a>
                                            <button className="btn btn-success rounded-0 col-md-6" type="submit" >Submit</button>
                                        </div>        
                                        </Form>
                                    )}
                                   
                                </Formik>
                            </div>
                        </div>      
                    </div>
                </div>

            </div>
        </div>
    );
})