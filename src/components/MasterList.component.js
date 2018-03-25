import React, { Component } from 'react';
import { List, Label } from 'semantic-ui-react';
import withComputing from './withComputing.hoc';

class MasterList extends Component {
    render() {
        return (
            <List divided relaxed>
                <List.Item key={0}>
                    <List.Icon name='computer' size='large' verticalAlign='middle' />
                    <List.Content>
                        <List.Header as='a'>Master<Label size="tiny" color="green">Health</Label></List.Header>
                        <List.Description as='a'>
                        </List.Description>
                    </List.Content>
                </List.Item>
            </List>
        )
    }
}
export default withComputing("MasterList", "")(MasterList);