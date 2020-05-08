import React, { Component} from 'react';
import CustomerEditor from './CustomerEditor';
import CustomerList from './CustomerList';

let ConfiguredData = {};
let ActionMode = '';
class CustomerDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageStatus: true
        };
        this.handleCustomerPages = this.handleCustomerPages.bind(this);
    };

    handleCustomerPages(val, mode, configData) {
        ConfiguredData = configData;
        ActionMode = mode;
        this.setState({pageStatus: val});
    };

    render() {
        return (
            <div>
                {
                    this.state.pageStatus ? <CustomerList customerPageVal={this.handleCustomerPages}/> : 
                    <CustomerEditor customerPageVal={this.handleCustomerPages} configuredData={ConfiguredData} actionMode={ActionMode}/>
                }
            </div>
        );
    }
}

export default CustomerDetails;