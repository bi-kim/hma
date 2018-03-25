import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Transition, Modal, Input, Button } from 'semantic-ui-react';
import { hideTaskCreateDialog } from "../actions";

class DialogTaskCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onChangeDiff = this.onChangeDiff.bind(this);
    }
    onChangeDiff(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <Transition visible={this.props.visible} animation='scale' duration={500}>
                <Modal size="mini" open={this.props.visible} onClose={this.props.hideTaskCreateDialog}>
                <Modal.Header>
                    <h1>Task Create</h1>
                </Modal.Header>
                <Modal.Content>
                    <Input name="task_name" fluid label='이름' placeholder='이름을 설정해주세요.' value={this.state.task_name} onChange={this.onChangeDiff}/>
                    <Input name="task_number" style={{ marginTop: "5px" }} fluid label='개수' value={this.state.task_number} placeholder='생성할 개수를 입력해주세요.' onChange={this.onChangeDiff}/>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={this.props.hideTaskCreateDialog}>No</Button>
                    <Button positive icon='checkmark' labelPosition='right' content='Apply' onClick={this.onApply}/>
                </Modal.Actions>
                </Modal>
            </Transition>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        hideTaskCreateDialog: () => dispatch(hideTaskCreateDialog()),
        // onAddTask: (name, num) => dispatch(addTask(
        //     {"name": name, "ip": num}
        // ))
    }
}

DialogTaskCreate = connect(undefined, mapDispatchToProps)(DialogTaskCreate);

let mapStateToProps = (state) => {
    console.log(state);
    return {
        visible : state.dialogReducers.taskCreateDialogVisible
    };
}
DialogTaskCreate = connect(mapStateToProps)(DialogTaskCreate);
export default DialogTaskCreate;