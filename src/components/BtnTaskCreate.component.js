import React from 'react';
import { connect } from 'react-redux';
import { openTaskCreateDialog } from '../actions';
import { Button, Icon } from 'semantic-ui-react';

class BtnTaskCreate extends React.Component {
    render() {
        return (
            <Button primary onClick={ this.props.openTaskCreateDialog }>
              <Icon name='add' />
              <span>Task Create</span>
            </Button>
        )
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        openTaskCreateDialog: () => dispatch(openTaskCreateDialog()),
    }
}
BtnTaskCreate = connect(undefined, mapDispatchToProps)(BtnTaskCreate);
export default BtnTaskCreate;
