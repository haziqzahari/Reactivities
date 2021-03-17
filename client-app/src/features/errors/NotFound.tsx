import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Segment, SegmentInline } from 'semantic-ui-react';

export default function NotFound() {
    return (
        <div className="container pt-5">
        <Segment placeholder>
            <Header icon>
                <Icon name='search'></Icon>
                Oops - we've looked everywhere and could not find this.
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activities' primary>
                    Return to activites page
                </Button>
            </Segment.Inline>
        </Segment>
        </div>
    );
}