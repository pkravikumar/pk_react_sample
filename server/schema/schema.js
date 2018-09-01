const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList
} = graphql;

// dummy data
var Empdetails = [
    {
        id: "1",
        Name: "Tiger Nixon",
        Position: "System Architect",
        Office: "Edinburgh",
        Age: "61",
        Startdate: "2011/04/25",
        Salary: "$320,800"
    },
    {
        id: "2",
        Name: "Angelica Ramos",
        Position: "Chief Executive Officer (CEO)",
        Office: "London",
        Age: "47",
        Startdate: "2009/10/09",
        Salary: "$1,200,000"
    },
    {
        id: "3",
        Name: "Ashton Cox",
        Position: "Junior Technical Author",
        Office: "San Francisco",
        Age: "66",
        Startdate: "2009/01/12",
        Salary: "$86,000"
    },
    {
        id: "4",
        Name: "Bradley Greer",
        Position: "Software Engineer",
        Office: "London",
        Age: "41",
        Startdate: "2012/10/13",
        Salary: "$132,000"
    },
    {
        id: "5",
        Name: "Brenden Wagner",
        Position: "Software Engineer",
        Office: "San Francisco",
        Age: "28",
        Startdate: "2011/06/07",
        Salary: "$206,850"
    },
    {
        id: "6",
        Name: "Brielle Williamson",
        Position: "Integration Specialist",
        Office: "New York",
        Age: "61",
        Startdate: "2012/12/02",
        Salary: "$372,000"
    },
    {
        id: "7",
        Name: "Bruno Nash",
        Position: "Software Engineer",
        Office: "London",
        Age: "38",
        Startdate: "2011/05/03",
        Salary: "$163,500"
    },
    {
        id: "8",
        Name: "Caesar Vance",
        Position: "Pre-Sales Support",
        Office: "New York",
        Age: "21",
        Startdate: "2011/12/12",
        Salary: "$106,450"
    },
    {
        id: "9",
        Name: "Cara Stevens",
        Position: "Sales Assistant",
        Office: "New York",
        Age: "46",
        Startdate: "2011/12/06",
        Salary: "$145,600"
    },
    {
        id: "10",
        Name: "Cedric Kelly",
        Position: "Senior Javascript Developer",
        Office: "Edinburgh",
        Age: "22",
        Startdate: "2012/03/29",
        Salary: "$433,060"
    }
];

const EmpdetailsType = new GraphQLObjectType({
    name: 'Emp',
    fields: () => ({
        id: { type: GraphQLID },
        Name: { type: GraphQLString },
        Position: { type: GraphQLString },
        Office: { type: GraphQLString },
        Age: { type: GraphQLString },
        Startdate: { type: GraphQLString },
        Salary: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        Employee: {
            type: EmpdetailsType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from db / other source
                return _.find(Empdetails, { id: args.id });
            }
        },
        Employees: {
            type: new GraphQLList(EmpdetailsType),
            resolve(parent, args) {
                return _.find({ Empdetails });
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
