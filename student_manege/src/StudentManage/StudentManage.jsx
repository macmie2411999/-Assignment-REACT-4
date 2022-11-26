import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TableStudent } from './TableStudent'

export class StudentManage extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let taiKhoan = document.getElementById('taiKhoan').value;
        let matKhau = document.getElementById('matKhau').value;
        let nguoiDung = { taiKhoan, matKhau };

        // tao ra action dua du lieu len reducer
        const action = {
            type: 'ADD_NEW_STUDENT',
            payload: nguoiDung
        }

        // dung ham dispatch de dua len reducer
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                <hr style={{ marginBottom: '30px' }}></hr>
                <h3 className="mt-2">Bai Tap Quan Ly Nguoi Dung</h3>
                <form className='form' onClick={this.handleSubmit}>
                    <div className='card'>

                        {/* Header */}
                        <div className="card-header bg-dark text-white">
                            Student Information
                        </div>

                        {/* Body */}
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <p>Student ID</p>
                                    <input className='form-control' id="idStudent" name="idStudent"></input>
                                </div>
                                <div className="col-6">
                                    <p>Name</p>
                                    <input className='form-control' id="nameStudent" name="nameStudent"></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p>Phone Number</p>
                                    <input className='form-control' id="phoneNumber" name="phoneNumber"></input>
                                </div>
                                <div className="col-6">
                                    <p>Email</p>
                                    <input className='form-control' id="email" name="email"></input>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="card-footer">
                            <button className='btn btn-success' type='submit'>Add Student</button>
                        </div>
                    </div>
                </form>
                <TableStudent />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(StudentManage)