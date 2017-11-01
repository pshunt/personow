import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
export default class YourShifts extends Component {
  // static PropTypes = {
  //  shifts: PropTypes.array
  // }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: '',
  //     events: props.events || []
  //   }
  // }

  render() {

    const { shifts = [], error = '' } = this.props;
    return (
      <div>
        {
          !!shifts.length ?
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Role</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                </tr>
              </thead>
              <tbody>
                {
                  shifts.map(shift => {
                    return (
                      <tr key={shift.id}>
                        <td><Link to={`/events/${shift.event_id}`} params={{id: shift.event_id}}>{shift.event_title}</Link></td>
                        <td>{shift.role_title}</td>
                        <td>{shift.start_time}</td>
                        <td>{shift.end_time}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table> :
            <div>Loading</div>
        }
        {error && <div>{error}</div>}
      </div>
    );
  }
}