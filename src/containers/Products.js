import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { fetchProducts } from '../actions';

const mapStateToProps = (state) => {
  return {
    token: state.default.token,
    products: state.default.products
  };
};

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchProducts();
  }

  renderItems() {
    return this.props.products.map(p => (
      <TableRow key={p.productID}>
        <TableRowColumn>{p.productID}</TableRowColumn>
        <TableRowColumn>{p.name}</TableRowColumn>
        <TableRowColumn>{p.price}</TableRowColumn>
        <TableRowColumn>{p.description}</TableRowColumn>
      </TableRow>
    ));
  }

  render() {
    return(
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.renderItems()}
          </TableBody>
        </Table>
      </div>
    );
  }
}

Products.propTypes = {
  products: PropTypes.array,
  fetchProducts: PropTypes.func
};

export default connect(mapStateToProps, { fetchProducts })(Products);
