import React, { Component } from 'react';
import { List, Label } from 'semantic-ui-react';
import withComputing from './withComputing.hoc';
import { connect } from 'react-redux';

class AgentList extends Component {
    render() {
        return (
            <List divided relaxed>
             {
                this.props.datas.map((task, i) =>
                    <List.Item key={i}>
                        <List.Icon name='computer' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Agent {task.running_tasks} <Label size="tiny" color="green">Health</Label></List.Header>
                            <List.Description as='a'>
                                <div>
                                    <span><b>Slave IP: </b></span>
                                    <span>{task.slave_ip}</span>
                                    <span><b> PORT: </b></span>
                                    <span>31000-32000</span>
                                </div>
                                <div>
                                    <div><b>CPU: </b><span>{task.used_resource.cpus + "/" + task.total_resource.cpus}</span></div>
                                    <div><b>DISK: </b><span>{task.used_resource.disk + "/" + task.total_resource.disk}</span></div>
                                    <div><b>MEM: </b><span>{task.used_resource.mem + "/" + task.total_resource.mem}</span></div>
                                    <div><b>GPU: </b><span>{task.used_resource.gpus + "/" + task.total_resource.gpus}</span></div>
                                </div>
                            </List.Description>
                        </List.Content>
                    </List.Item>
                )
            }
            </List>
        )
    }
}
let mapStateToProps = (state) => {
    console.log(state);
    return {
        datas : state.agentReducers
    };
}
AgentList = connect(mapStateToProps)(AgentList);

export default withComputing("AgentList", "")(AgentList);