import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class addMeeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            building: '',
            date: '',
            startTime: '',
            endTime: '',
        }
    };

    setbuildingData = () => {
        this.props.onSetBuldingList(this.state)
    }

    updateValue = (e) => {
        switch (e.target.name) {
            case "building":
                this.setState({building: e.target.value});
                break;
            case "date":
                this.setState({date: e.target.value});
                break;
            case "startTime":
                this.setState({startTime: e.target.value});
                break;
            case "endTime":
                this.setState({endTime: e.target.value});
                break;
        }
    }

    render() {
        const { BuildingList } = this.props;

        return (
            <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="card">
                    <div className="card-header">Add Meeting</div>

                    <div className="card-body text-left">
                        <form className="row">
                            <div className="col-sm-12 col-md-6 col-lg- f6orm-group">
                                <label>Building</label>

                                <select
                                    className="form-control"
                                    autoComplete="off"
                                    name="building"
                                    value={this.state.building}
                                    onChange={this.updateValue}
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

                            <div className="col-sm-12 col-md-6 col-lg-6 form-group">
                                <label>Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    className="form-control"
                                    value={this.state.date}
                                    onChange={this.updateValue}
                                />
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6 form-group">
                                <label>Start Time</label>
                                <input
                                    type="time"
                                    name="startTime"
                                    className="form-control"
                                    value={this.state.startTime}
                                    onChange={this.updateValue}
                                />
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6 form-group">
                                <label>End Time</label>
                                <input
                                    type="time"
                                    name="endTime"
                                    className="form-control"
                                    value={this.state.endTime}
                                    onChange={this.updateValue}
                                />
                            </div>
                        </form>

                        <div className="col-sm-12 col-md-6 col-lg-12">
                            <Link to="/building" style={{ color: "#fff" }}>
                                <button className="btn btn-primary" onClick={this.setbuildingData}>
                                    Submit
                                </button>
                            </Link>
                        </div>

                    </div>

                    <div className="card-footer text-muted">Room details</div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        BuildingList: state.BuildingList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetBuldingList: (val) => dispatch({ type: 'MeetingData', value: val })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addMeeting);