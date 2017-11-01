import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class UpcomingEvents extends Component {
  // static PropTypes = {
  //   shifts: PropTypes.array
  // }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: '',
  //     events: props.events || []
  //   }
  // }

  render() {

    const { upcomingEvents = [], error = '' } = this.props;
    return (
      <div>
        {
          upcomingEvents.length === 0 ? <div>No Events Currently Scheduled</div> :
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
              </thead>
              <tbody>
                {
                  upcomingEvents.map(event => {
                    return (
                      <tr key={event.id}>
                        <td><Link to={`/events/${event.id}`} params={{id: event.id}}>{event.title}</Link></td>
                        <td>{event.description}</td>
                        <td>{event.start_date}</td>
                        <td>{event.end_date}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>

        }
        {error && <div>{error}</div>}
      </div>
    );
  }
}