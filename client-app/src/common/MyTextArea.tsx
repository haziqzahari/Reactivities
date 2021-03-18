import { useField } from 'formik';
import * as React from 'react';
import { Component } from 'react';
import { Form, Label } from 'semantic-ui-react';

interface Props
{
    placeholder: string;
    name: string;
    label?: string;
    type?: string;
    rows: number;
}

export default function MyTextArea(props: Props) 
{
    const [field, meta] = useField(props.name);
    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <label >{props.label}</label>
            <textarea className="my-4 form-control" {...field} {...props}/>
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </Form.Field>
    )
}