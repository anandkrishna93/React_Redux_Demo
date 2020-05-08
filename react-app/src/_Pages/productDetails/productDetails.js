import React, { Component } from 'react';
import ProductEditor from './productEditor';
import ProductList from './productList';

let ConfiguredData = {};
let ActionMode = '';
class productDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cutomerPageVar: true
        };
        this.handleProductPages = this.handleProductPages.bind(this);
    };

    handleProductPages(val, mode, configData) {
        ConfiguredData = configData;
        ActionMode = mode;
        this.setState({cutomerPageVar: val});
    };

    render() {
        return (
            <div>
                {
                    this.state.cutomerPageVar ? <ProductList productPageVal={this.handleProductPages}/> : 
                    <ProductEditor productPageVal={this.handleProductPages} configuredData={ConfiguredData} actionMode={ActionMode}/>
                }
            </div>
        );
    }
}

export default productDetails;