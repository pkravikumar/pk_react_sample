import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './react-app.css'
import EmployeeList from './components/EmployeeList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">

          <nav className="navbar navbar-expand navbar-dark bg-dark static-top">

            <a className="navbar-brand mr-1" href="index.html">GraphQL React sample App</a>

            <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
              <i className="fas fa-bars"></i>
            </button>

            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
              <div className="input-group">
                {/* <input type="text" className="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"> */}
                <div className="input-group-append">
                  {/* <button className="btn btn-primary" type="button">
                    <i className="fas fa-search"></i>
                  </button> */}
                </div>
              </div>
            </form>
          </nav>
          <div id="wrapper">

            <ul className="sidebar navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">
                  <i className="fas fa-fw fa-tachometer-alt"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" >
                  <i className="fas fa-fw fa-folder"></i>
                  <span>Pages</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="charts.html">
                  <i className="fas fa-fw fa-chart-area"></i>
                  <span>Charts</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="tables.html">
                  <i className="fas fa-fw fa-table"></i>
                  <span>Tables</span></a>
              </li>
            </ul>

            <div id="content-wrapper">

              <div className="container-fluid">

                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Overview</li>
                </ol>

                <div className="row">
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-primary o-hidden h-100">
                      <div className="card-body">
                        <div className="card-body-icon">
                          <i className="fas fa-fw fa-comments"></i>
                        </div>
                        <div className="mr-5">26 New Messages!</div>
                      </div>
                      <a className="card-footer text-white clearfix small z-1" href="#">
                        <span className="float-left">View Details</span>
                        <span className="float-right">
                          <i className="fas fa-angle-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-warning o-hidden h-100">
                      <div className="card-body">
                        <div className="card-body-icon">
                          <i className="fas fa-fw fa-list"></i>
                        </div>
                        <div className="mr-5">11 New Tasks!</div>
                      </div>
                      <a className="card-footer text-white clearfix small z-1" href="#">
                        <span className="float-left">View Details</span>
                        <span className="float-right">
                          <i className="fas fa-angle-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-success o-hidden h-100">
                      <div className="card-body">
                        <div className="card-body-icon">
                          <i className="fas fa-fw fa-shopping-cart"></i>
                        </div>
                        <div className="mr-5">123 New Orders!</div>
                      </div>
                      <a className="card-footer text-white clearfix small z-1" href="#">
                        <span className="float-left">View Details</span>
                        <span className="float-right">
                          <i className="fas fa-angle-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-danger o-hidden h-100">
                      <div className="card-body">
                        <div className="card-body-icon">
                          <i className="fas fa-fw fa-life-ring"></i>
                        </div>
                        <div className="mr-5">13 New Tickets!</div>
                      </div>
                      <a className="card-footer text-white clearfix small z-1" href="#">
                        <span className="float-left">View Details</span>
                        <span className="float-right">
                          <i className="fas fa-angle-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-header">
                    <i className="fas fa-chart-area"></i>
                    Area Chart Example</div>
                  <div className="card-body">
                    <canvas id="myAreaChart" width="100%" height="30">
                    </canvas>
                  </div>
                  <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>

                <div className="card mb-3">
                  <div className="card-header">
                    <i className="fas fa-table"></i>
                    Data Table Example</div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered" id="dataTable" width="100%" >
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                          </tr>
                        </thead>
                        <tfoot>
                          <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                          </tr>
                        </tfoot>
                       <EmployeeList/>
                      </table>
                    </div>
                  </div>
                  <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>

              </div>

              <footer className="sticky-footer">
                <div className="container my-auto">
                  <div className="copyright text-center my-auto">
                    <span>Copyright © Your Website 2018</span>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
