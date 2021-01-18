import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class building extends Component {
    constructor(props) {
        super(props);
        this.state = {
            building: ''
        }
    };

    render() {
        const { BuildingList, MeetingDetails } = this.props;

        return (
            <div>
                <div className="col-sm-12 col-md-12 col-lg-12 text-right">
                    <Link to="/addMeeting" className="btn btn-primary">Add Meeting</Link>
                </div>

                <div className="row justify-content-md-center">
                    <div className="col-sm-8 col-md-5 col-lg-5 form-group">
                        <select
                            className="form-control"
                            autoComplete="off"
                            type="text"
                            value={this.state.building}
                            onChange={(e) => this.setState({ building: e.target.value })}
                        >
                            <option value="">-- Select building --</option>
                            {
                                BuildingList.map(id =>
                                    <option key={id.buildngCode} value={id.buildngCode}>
                                        {id.buildngName}
                                    </option>
                                )
                            }
                        </select>
                    </div>
                </div>

                {
                    BuildingList.map(id => {
                        return (
                            id.buildngCode === this.state.building ?
                                <div className="col-sm-12 col-md-12 col-lg-12" key={id.buildngCode}>
                                    <div className="card text-center">
                                        <div className="card-header">{id.buildngName}</div>

                                        <div className="card-body">
                                            <h5 className="card-title">Total Floors - {id.floor}</h5>
                                            <h6 className="card-title">Total Rooms - {id.room}</h6>

                                            <p className="card-text">Free Rooms - {id.freeRoom}</p>
                                        </div>

                                        <div className="card-footer text-muted">
                                            Room details
                                        </div>
                                    </div>
                                </div> : null
                        )
                    }
                    )
                }

                {
                    MeetingDetails.length ?
                        <div>
                            <div class="alert alert-info" role="alert">
                                <h4 className="card-title">Meetings</h4>
                            </div>
                            
                            {
                                MeetingDetails.map(id =>
                                    <div className="col-sm-12 col-md-12 col-lg-12" key={id.building}>
                                        <div className="card text-center">
                                            <div className="card-header">Meeting Details</div>

                                            <div className="card-body">
                                                <h5 className="card-title">Building Name - {id.building}</h5>
                                                <h6 className="card-title">Meeting Date - {id.date}</h6>
                                                <h6 className="card-title">Start Time - {id.startTime}</h6>
                                                <h6 className="card-title">End Time - {id.endTime}</h6>
                                            </div>

                                            <div className="card-footer text-muted"></div>
                                        </div>
                                    </div>
                                )
                            }
                        </div> : null
                }
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        BuildingList: state.BuildingList,
        MeetingDetails: state.MeetingDetails,
    }
};

export default connect(mapStateToProps)(building);