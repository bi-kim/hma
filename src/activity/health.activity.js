import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import AgentList from '../components/AgentList.component';
import TaskList from '../components/TaskList.component';
import MasterList from '../components/MasterList.component';
export default class HealthActivity extends Component {
    render() {
        return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={16}>
                    <MasterList />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                    <Grid.Column width={8}>
                        <AgentList/>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <TaskList />
                    </Grid.Column>
            </Grid.Row>
        </Grid>
        );
    }
}