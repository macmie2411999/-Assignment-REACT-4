import React, { Component } from 'react'
import { connect } from 'react-redux'

export class TableStudent extends Component {
    render() {
        
        let {arrayStudentReducer} = this.props;
        console.log(this.props);
        console.log(arrayStudentReducer);
        return (
            <table className="table mt-2">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                {/* {arrayStudentReducer.map((student, index) => {
                        return <tr key={index}>
                        <td>{student.IDStudent}</td>
                        <td>{student.Name}</td>
                        <td>{student.PhoneNumber}</td>
                        <td>{student.Email}</td>
                    </tr>})} */}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => ({
    arrayStudentReducer: state.arrayStudentReducer
})

export default connect(mapStateToProps)(TableStudent)
