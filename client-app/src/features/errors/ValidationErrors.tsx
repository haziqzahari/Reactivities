import * as React from 'react';
import { Component } from 'react';
import { Message } from 'semantic-ui-react';


interface Props {
    errors: String[] | null;
}

export default function ValidationErrors({errors}: Props)
{
    return ( 
        <div className="container">
            <Message error>
                {errors && (
                    <Message.List>
                        {errors.map((err: any, i) => (
                            <Message.Item key={i}>{err}</Message.Item>
                        ))}
                    </Message.List>
                )}
            </Message>
        </div>
    );
}