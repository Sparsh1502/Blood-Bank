import React, { useState, useEffect } from 'react';
import axios from "axios";
import { NavLink, Link, useLocation, useNavigate, json } from 'react-router-dom'
import '../css/style.css';
import Navbar from './Navbar';
import Footer from './footer';
import header from './header';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';

export default function LabProfile(props) {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [maxquantity, setmaxquantity] = useState(0);

    const handleClose = () => setShow(false);
    const handleClose1 = () => setShow1(false);
    const [name, setname] = useState('');
    const [quantity, setquantity] = useState(0);
    const [change, setchange] = useState(false)
    //   const handleShow = () => setShow(true);
    const handleShow = async (name) => {
        setShow(true);
        setname(name);
        
    };
    
    
    const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'http://localhost:5001/lab/show-profile/',
      );

      setData(result.data);
    }

    fetchData();
  });
//   fetchData();
//   console.log(data[0].length);
    const val = new Map([
        ["a+", 0],
        ["a-", 0],
        ["b+", 0],
        ["b-", 0],
        ["o+", 0],
        ["o-", 0],
        ["ab+", 0],
        ["ab-", 0],
    ]);

    if(data.blood_group){
    for (let i = 0; i < data.blood_group.length; i++) {
        let str1 = data.blood_group[i]['name'];
        //  console.log(name);
        if (str1 === 'a+') {
            let blood_groupss = data.blood_group.find((blood_groups) =>
                blood_groups['name'] === 'a+'
            );
            val.set("a+", blood_groupss.quantity);
            // setval({ ...val, a1: blood_groupss.quantity})
        }
        else if (str1 === 'a-') {
            let blood_groupss = data.blood_group.find((blood_groups) =>
                blood_groups['name'] === 'a-'
            );
            val.set("a-", blood_groupss.quantity);
            // setval({ ...val, a1: blood_groupss.quantity})
        }
        else if (str1 === 'b+') {
            let blood_groupss = data.blood_group.find((blood_groups) =>
                blood_groups['name'] === 'b+'
            );
            val.set("b+", blood_groupss.quantity);
            // setval({ ...val, a1: blood_groupss.quantity})
        }
        else if (str1 === 'b-') {
            let blood_groupss = data.blood_group.find((blood_groups) =>
                blood_groups['name'] === 'b-'
            );
            val.set("b-", blood_groupss.quantity);
            // setval({ ...val, a1: blood_groupss.quantity})
        }
        else if (str1 === 'o+') {
            let blood_groupss = data.blood_group.find((blood_groups) =>
                blood_groups['name'] === 'o+'
            );
            val.set("o+", blood_groupss.quantity);
            // setval({ ...val, a1: blood_groupss.quantity})
        }
        else if (str1 === 'o-') {
            let blood_groupss = data.blood_group.find((blood_groups) =>
                blood_groups['name'] === 'o-'
            );
            val.set("o-", blood_groupss.quantity);
            // setval({ ...val, a1: blood_groupss.quantity})
        }
        else if (str1 === 'ab+') {
            let blood_groupss = data.blood_group.find((blood_groups) =>
                blood_groups['name'] === 'ab+'
            );
            val.set("ab+", blood_groupss.quantity);
            // setval({ ...val, a1: blood_groupss.quantity})
        }
        else if (str1 === 'ab-') {
            let blood_groupss = data.blood_group.find((blood_groups) =>
                blood_groups['name'] === 'ab-'
            );
            val.set("ab-", blood_groupss.quantity);
            // setval({ ...val, a1: blood_groupss.quantity})
        }


    }
}
const handleShow1 = async (name) => {
    setShow1(true);
    setname(name);
    setmaxquantity(val.get(name))
};

    const clickSubmit = async (e) => {
        setShow(false);
        e.preventDefault();
        const response = await fetch('http://localhost:5001/lab/add-bloodsample/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ quantity: quantity, name: name })
        })
        console.log(await response.json());
        // setShow(false);
        setchange(true);
    }

    const clickSubmit1 = async (e) => {
        setShow1(false);
        e.preventDefault();
        const response = await fetch('http://localhost:5001/lab/decrease-bloodsample/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ quantity: quantity, name: name })
        })
        console.log(await response.json());
        // setShow(false);
        setchange(true);
    }
    //   const [show, setShow] = useState(false);
    //   const handleClose = () => setShow(false);
    //   const handleShow = () => setShow(true);

    return (
        <>
        <Navbar/>
        <section id = "lab">
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>
                                    Manage <b>Blood Record</b>
                                </h2>
                            </div>
                            {/* <div className="col-sm-6">
                                <a
                                    href="#addEmployeeModal"
                                    className="btn btn-success"
                                    data-toggle="modal"
                                >
                                    <i className="material-icons"></i> <span>Add New Employee</span>
                                </a>
                                <a
                                    
                                    className="btn btn-danger"
                                    data-toggle="modal" onClick = {handleShow}
                                >
                                    <i className="material-icons"></i> <span>Delete</span>
                                </a>
                            </div> */}
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                {/* <th>
                                    <span className="custom-checkbox">
                                        <input type="checkbox" id="selectAll" />
                                        <label htmlFor="selectAll" />
                                    </span>
                                </th> */}
                                <th className="col-sm-6">Blood group</th>
                                <th className="col-sm-6">Quantity</th>
                                <th className="col-lg-6">Action</th>
                            </tr>
                        </thead>


                        <tbody>
                            <tr>
                                <td>A+</td>
                                <td>{val.get('a+')}</td>

                                <td>
                                    <a className="edit" data-toggle="modal" onClick={() => { handleShow('a+') }}>
                                        <i class="fas fa-plus-circle"></i>
                                    </a>
                                    <a className="delete" data-toggle="modal" onClick={() => { handleShow1('a+') }}>
                                        <i class="fas fa-minus-circle"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>A-</td>
                                <td>{val.get('a-')}</td>

                                <td>
                                    <a  className="edit" data-toggle="modal" onClick={() => { handleShow('a-') }}>
                                        <i class="fas fa-plus-circle"></i>
                                    </a>
                                    <a className="delete" data-toggle="modal" onClick={() => { handleShow1('a-') }}>
                                        <i class="fas fa-minus-circle"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>B+</td>
                                <td>{val.get('b+')}</td>

                                <td>
                                    <a  className="edit" data-toggle="modal" onClick={() => { handleShow('b+') }}>
                                        <i class="fas fa-plus-circle"></i>
                                    </a>
                                    <a className="delete" data-toggle="modal" onClick={() => { handleShow1('b+') }}>
                                        <i class="fas fa-minus-circle"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>B-</td>
                                <td>{val.get('b-')}</td>

                                <td>
                                    <a  className="edit" data-toggle="modal" onClick={() => { handleShow('b-') }}>
                                        <i class="fas fa-plus-circle"></i>
                                    </a>
                                    <a className="delete" data-toggle="modal" onClick={() => { handleShow1('b-') }}>
                                        <i class="fas fa-minus-circle"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>O+</td>
                                <td>{val.get('o+')}</td>

                                <td>
                                    <a className="edit" data-toggle="modal" onClick={() => { handleShow('o+') }}>
                                        <i class="fas fa-plus-circle"></i>
                                    </a>
                                    <a className="delete" data-toggle="modal" onClick={() => { handleShow1('o+') }}>
                                        <i class="fas fa-minus-circle"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>O-</td>
                                <td>{val.get('o-')}</td>

                                <td>
                                    <a className="edit" data-toggle="modal" onClick={() => { handleShow('o-') }}>
                                        <i class="fas fa-plus-circle"></i>
                                    </a>
                                    <a className="delete" data-toggle="modal" onClick={() => { handleShow1('o-') }}>
                                        <i class="fas fa-minus-circle"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>AB+</td>
                                <td>{val.get('ab+')}</td>

                                <td>
                                    <a  className="edit" data-toggle="modal" onClick={() => { handleShow('ab+') }}>
                                        <i class="fas fa-plus-circle"></i>
                                    </a>
                                    <a className="delete" data-toggle="modal" onClick={() => { handleShow1('ab+') }}>
                                        <i class="fas fa-minus-circle"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>AB-</td>
                                <td>{val.get('ab-')}</td>

                                <td>
                                    <a className="edit" data-toggle="modal" onClick={() => { handleShow('ab-') }}>
                                        <i class="fas fa-plus-circle"></i>
                                    </a>
                                    <a className="delete" data-toggle="modal" onClick={() => { handleShow1('ab-') }}>
                                        <i class="fas fa-minus-circle"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            {/* Edit Modal HTML */}

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Dialog>

                    <Form>
                        <Modal.Header>
                            <Modal.Title>Manage Blood Stock</Modal.Title>
                            <Button type="button" className="close" data-dismiss="modal" area-hidden="true" onClick={handleClose}><i class="fa fa-window-close" aria-hidden="true"></i>
                            </Button>
                        </Modal.Header>
                        <Modal.Body>
                            {/* <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" required="" />
        </Form.Group> */}
                            <Form.Group>
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="number" required="" min = "1" onChange={(e) => setquantity(e.target.value)} />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" onClick={clickSubmit}>Add</Button>
                            <Button type="submit" className="btn btn-success" defaultValue="Add" onClick={handleClose}>Cancel</Button>
                        </Modal.Footer>
                    </Form>


                </Modal.Dialog>
            </Modal>
            <Modal
                show={show1}
                onHide={handleClose1}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Dialog>

                    <Form>
                        <Modal.Header>
                            <Modal.Title>Manage Blood Stock</Modal.Title>
                            <Button type="button" className="close" data-dismiss="modal" area-hidden="true" onClick={handleClose1}><i class="fa fa-window-close" aria-hidden="true"></i>
                            </Button>
                        </Modal.Header>
                        <Modal.Body>
                            {/* <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" required="" />
        </Form.Group> */}
                            <Form.Group>
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="number" required="" min = "1" max = {maxquantity} onChange={(e) => setquantity(e.target.value)} />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" onClick={clickSubmit1}>Decrease</Button>
                            <Button type="submit" className="btn btn-success" defaultValue="Add" onClick={handleClose1}>Cancel</Button>
                        </Modal.Footer>
                    </Form>


                </Modal.Dialog>
            </Modal>

            {/* Edit Modal HTML */}

            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Employee</h4>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-hidden="true"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" required="" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required="" />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea
                                        className="form-control"
                                        required=""
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" required="" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input
                                    type="button"
                                    className="btn btn-default"
                                    data-dismiss="modal"
                                    defaultValue="Cancel"
                                />
                                <input type="submit" className="btn btn-info" defaultValue="Save" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Delete Modal HTML */}
            

            <div id="deleteEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Delete Employee</h4>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-hidden="true"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete these Records?</p>
                                <p className="text-warning">
                                    <small>This action cannot be undone.</small>
                                </p>
                            </div>
                            <div className="modal-footer">
                                <input
                                    type="button"
                                    className="btn btn-default"
                                    data-dismiss="modal"
                                    defaultValue="Cancel"
                                />
                                <input
                                    type="submit"
                                    className="btn btn-danger"
                                    defaultValue="Delete"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal> */}
      </section>
      <Footer/>
        </>

    )
}