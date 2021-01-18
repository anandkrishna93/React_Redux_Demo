import React, { Component} from 'react';

class CustomerEditor extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(this.props.actionMode === 'EDIT') {
            console.log(this.props.configuredData);
        }
    }

    render() {
        return (
            <div className='wizard-style'>
                <div className="col-xs-12 col-xs-12 col-sm-12 col-lg-12">
                    <h1>Editor</h1>
                </div>

                <div className="col-xs-12 col-xs-12 col-sm-12 col-lg-12 form-footer text-right">
                    <button type="button" className="btn btn-sm btn-default mr5" onClick={() => this.props.customerPageVal(true)}>Cancel</button>
                    <button type="button" className="btn btn-sm btn-primary">Save</button>
                </div>
            </div>
        );
    }
}

export default CustomerEditor;