import React, { Component } from 'react';
import { Card, Button, Loader, Dimmer } from 'semantic-ui-react';
import { connect } from 'react-redux';
import store from '../store';
import { onloadAgent, onloadTask } from '../actions';

let mapStateToProps = (state) => {
  return {
    socket: state.socketReducers
  };
}

const withComputing = (title, url) => (WrappedComponent) => {
  return connect(mapStateToProps)(class extends Component {
    constructor(props) {
      super(props);
      let self = this;
      this.state = {
        title: title,
        loader: false
      };
      this.props.socket.on('jobs', function (data) {
        store.dispatch(onloadTask(data));
        self.setState({ loader: true });
      });
      this.props.socket.on('cluster-states', function (data) {
        store.dispatch(onloadAgent(data));
        self.setState({ loader: true });
      });
      this.props.socket.emit('cluster-states');
      this.props.socket.emit('jobs');
    }
    render() {
      return (
        <Card fluid>
          <Card.Content extra>
            <Card.Header>
              <span className="title">{this.state.title}</span>
              <Button positive icon='refresh' labelPosition='right'
                content='Refresh' floated='right'
                onClick={this.handleClickRefreshBtn} />
            </Card.Header>
          </Card.Content>
          <Card.Content textAlign="left">
            <Dimmer active disabled={this.state.loader}>
                <Loader size="small" disabled={this.state.loader} />
            </Dimmer>
            <WrappedComponent {...this.props} />
          </Card.Content>
        </Card>
      )
    }
  });
}

export default withComputing;