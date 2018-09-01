import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getItemsQuery = gql`
{
  Employees{
    Name
    id
    Position
    Office
    Age
    Startdate
    Salary
  }
}
`
class EmployeList extends Component {
  displaySites() {
    var data = this.props.data;
    console.log(this.props.data.loading)
    if (data.loading) {
    }
    else {
      return data.Employees.map(Employee => {
        return (
          <tr key={Employee.id}>
            <td>{Employee.Name}</td>
            <td>{Employee.Position}</td>
            <td>{Employee.Office}</td>
            <td>{Employee.Age}</td>
            <td>{Employee.Startdate}</td>
            <td>{Employee.Salary}</td>
          </tr>
        );
      })
    }
  }
  render() {
    console.log(this.props);
    return (
      <tbody>
        {this.displaySites()}
      </tbody>
    );
  }
}

export default graphql(getItemsQuery)(EmployeList);
