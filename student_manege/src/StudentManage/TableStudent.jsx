import React, { Component } from 'react'
import { connect } from 'react-redux'

export class TableStudent extends Component {
    render() {

        let { arrayStudentReducer } = this.props;
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
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {arrayStudentReducer.map((student, index) => {
                        return <tr key={index}>
                            <td>{student.IDStudent}</td>
                            <td>{student.Name}</td>
                            <td>{student.PhoneNumber}</td>
                            <td>{student.Email}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => {
                                    const action = {
                                        type: 'DELETE_STUDENT',
                                        payload: student
                                    }
                                    console.log('action of deleteStudent',action);
                                    this.props.dispatch(action);
                                }}>
                                    <i className="fa fa-trash"></i>
                                </button>
                                <button className="btn btn-primary mx-2" onClick={() => {
                                    const action = {
                                        type: 'UPDATE_STUDENT',
                                        payload: student
                                    }
                                    console.log(action);
                                    this.props.dispatch(action);
                                }}>
                                    <i className="fa fa-edit"></i>
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => ({
    // arrayStudentReducer: state.arrayStudentReducer
    arrayStudentReducer: state.arrayStudentReducer.arrayDefaultStudents
})

export default connect(mapStateToProps)(TableStudent)
