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
import { browserHistory } from 'react-router';
import { fetchProducts, loginFailed } from '../actions';

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
    if(!this.props.token) {
      this.props.loginFailed('Please login first');
      browserHistory.push('/');
    } else {
      this.props.fetchProducts(this.props.token);
    }
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
  fetchProducts: PropTypes.func,
  token: PropTypes.string
};

export default connect(mapStateToProps, { fetchProducts, loginFailed })(Products);
