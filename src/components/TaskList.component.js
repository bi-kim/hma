import React, { Component } from 'react';
import { List, Label } from 'semantic-ui-react';
import withComputing from './withComputing.hoc';
import { connect } from 'react-redux';

class TaskList extends Component {
    render() {
        return (
            <List divided relaxed>
                {
                    this.props.datas.map((task, i) => {
                        task = JSON.parse(task)
                        return (<List.Item key={i}>
                            <List.Icon name='cloud' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>{task.taskName} - {task.jobName} <Label size="tiny" color="green">{task.status}</Label></List.Header>
                                <List.Description as='a'>
                                    <div>
                                        <span><b>Slave IP: </b></span>
                                        <span>{task.targetIp}</span>
                                    </div>
                                    <div>
                                        <div><b>CPU: </b><span>{task.cpus}</span></div>
                                        <div><b>MEM: </b><span>{task.mem}</span></div>
                                    </div>
                                </List.Description>
                            </List.Content>
                        </List.Item>)
                    })
                }
            </List>
        )
    }
}
let mapStateToProps = (state) => {
    console.log(state.modeReducers.agent);
    return {
        datas: (function () {
            let temp = [];
            for(var i = 0; i < state.tasksReducers.length; i++) {
                for(var j = 0; j < state.tasksReducers[i].length; j++) {
                    test.push(state.tasksReducers[i][j]);
                }
            }
            console.log(test);
            return temp;
        }()),
        mode: state.modeReducers.agent
    };
}
TaskList = connect(mapStateToProps)(TaskList);

export default withComputing("TaskList", "")(TaskList);