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
    { id: 'productId', numeric: true, disablePadding: false, label: 'Product Id' },
    { id: 'productName', numeric: false, disablePadding: false, label: 'Product Name' },
    { id: 'price', numeric: false, disablePadding: false, label: 'Price' },
    { id: 'action', numeric: false, disablePadding: false, label: 'Action' }
];

const Product_List = [
    { productId: 1, productName: "Whisky", price: "2000" },
    { productId: 2, productName: "Chakhna", price: "500" },
    { productId: 3, productName: "Soda", price: "200" }
]

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Product_List: []
        };
    }

    getServiceList() {
        this.setState({ Product_List: Product_List})
    };

    componentDidMount() {
        this.getServiceList()
    };
    
    render() {
        return (
            <Paper className="custom_table_style">
                <Toolbar>
                    <Typography variant="h6" id="tableTitle">Product Details</Typography>
                    
                    <div style={{flex: '1 1 10%'}} />
                    
                    <div className="right-panel-action">
                        <button type="button" className="btn btn-sm btn-primary" onClick={() => this.props.productPageVal(false, 'ADD')}>
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
                                this.state.Product_List.map((data, index) => {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={data.productId}
                                        >
                                            <TableCell align="right">{data.productId}</TableCell>
                                            <TableCell>{data.productName}</TableCell>
                                            <TableCell>{data.price}</TableCell>
                                            <TableCell>
                                                <a onClick={() => this.props.productPageVal(false, 'EDIT', data)}>
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

export default ProductList;