import React, { Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const headRows = [
    { id: 'customerId', numeric: true, disablePadding: false, label: 'Customer Id' },
    { id: 'customerName', numeric: false, disablePadding: false, label: 'Customer Name' },
    { id: 'mobileNum', numeric: false, disablePadding: false, label: 'Mobile No' },
    { id: 'action', numeric: false, disablePadding: false, label: 'Action' }
];

const Customer_List = [
    { customerId: 1, customerName: "Barkha", mobileNum: "989898989"},
    { customerId: 2, customerName: "Barkha", mobileNum: "989898989"},
    { customerId: 3, customerName: "Barkha", mobileNum: "989898989"},
    { customerId: 4, customerName: "Barkha", mobileNum: "989898989"},
    { customerId: 5, customerName: "Barkha", mobileNum: "989898989"},
    { customerId: 6, customerName: "Barkha", mobileNum: "989898989"},
    { customerId: 7, customerName: "Barkha", mobileNum: "989898989"},
    { customerId: 8, customerName: "Barkha", mobileNum: "989898989"},
]

class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Customer_List: []
        };
    }

    getServiceList() {
        this.setState({ Customer_List: Customer_List})
    };

    componentDidMount() {
        this.getServiceList()
    };
    
    render() {
        return (
            <Paper className="custom_table_style">
                <Toolbar>
                    <Typography variant="h6" id="tableTitle">Customer Details</Typography>
                    
                    <div style={{flex: '1 1 10%'}} />
                    
                    <div className="right-panel-action">
                        <button type="button" className="btn btn-sm btn-primary" onClick={() => this.props.customerPageVal(false, 'ADD')}>
                            + Add New
                        </button>
                    </div>
                </Toolbar>
        
                <div className="tableWrapper">
                    <Table aria-labelledby="tableTitle" size='medium'>
                        <TableHead>
                            <TableRow>
                                {headRows.map(row => (
                                    <TableCell key={row.id} align={row.numeric ? 'right' : 'left'} padding={row.disablePadding ? 'none' : 'default'}>
                                        {row.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        
                        <TableBody>
                            {
                                this.state.Customer_List.map((data, index) => {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={data.customerId}
                                        >
                                            <TableCell align="right">{data.customerId}</TableCell>
                                            <TableCell>{data.customerName}</TableCell>
                                            <TableCell>{data.mobileNum}</TableCell>
                                            <TableCell>
                                                <a onClick={() => this.props.customerPageVal(false, 'EDIT', data)}>
                                                    <i className="glyphicon glyphicon-pencil" />
                                                </a>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })
                            }
                        </TableBody>
                    </Table>
                </div>
            </Paper>
        );
    }
}

export default CustomerList;