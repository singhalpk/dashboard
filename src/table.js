import React,{Component} from 'react';
import { Table, Row, Col,  Modal,} from 'reactstrap';
import User from './add-user.svg';
import Delete from './delete.svg';

window.users = [{key:1, name:"Suresh", last:"within 1 hour", role:"Owner"},{key:2, name:"Vikram", last:"2 days ago", role:"Admin"},{key:3, name:" ", last:" ", role:"Sales"},{key:4, name:" ", last:" ", role:"Sales"}];
class TableComp extends Component {
     constructor(props) {
        super(props);
        this.state = {
          toggleModal: false,
          email:'',
          role:'Admin',
          userData:window.users
        };
      }

    toggle =()=>{
      this.setState({toggleModal: !this.state.toggleModal})
    }

    onChange = (e) =>{
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    submit = () =>{
      let body = {
        key:window.users.length+1, 
        name:this.state.email, 
        last:" ", 
        role:this.state.role
      }
      window.users.push(body);
      this.toggle();
    }

    delete =(event, user) =>{
      let {userData } = this.state;
      let n = window.users.indexOf(user);
      delete userData[n];
      this.setState({userData});
    }

    render(){
      let {toggleModal,email,role} = this.state;
      return(
        <div className="mt-5">
          <div className="buttonuser"  onClick={() =>this.toggle()}>Add User</div>
           <Table bordered  className="mt-5">
              <thead>
                <tr className="bg-c1">
                  <th>#</th>
                  <th>User</th>
                  <th>Last Signed In</th>
                  <th>Role</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {
                this.state.userData.map(user=>{ 
                                  return (
                                            <tr key={user.key}>
                                                <th scope="row">{user.key}</th>
                                                <td>{user.name}</td>
                                                <td>{user.last}</td>
                                                <td>{user.role}</td>
                                                <td><button className="deletebtn" onClick={(e) =>{this.delete(e,user)}}><img className="user-delete" src={Delete} alt="user add"/></button></td>
                                              </tr>
                            )})
             }
              </tbody>
            </Table>
            <Modal isOpen={toggleModal} size="xl" toggle={this.toggle} >
              <Row>
                <Col md="6" className="bg-ff5 py-5">
                  <div className="text-center py-5">
                    <img className="user-logo" src={User} alt="user add"/>
                  </div>
                  <span className="text-center py-5 r-text-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </span>
                </Col>
                <Col  md="6" className="py-5 px-4">
                      <h1>User Information</h1>
                      <label className="pt-3">Email Id of User</label>
                      <input type="text"  value={email} name="email" onChange={this.onChange} />
                      <label  className="pt-3">Role</label>
                      <div>
                          <select onChange={this.onChange}  value={role} name="role">
                            <option value="Admin">Admin</option>
                            <option value="Owner">Owner</option>
                            <option value="Sales">Sales</option>
                          </select>
                      </div>
                      <Row className="py-5">
                        <Col md={{ size: 4, offset: 2 }}>
                          <button className="btn warning r-text-light" onClick={this.toggle}>Cancel</button>
                        </Col>
                        <Col  md="4">
                          <button  className="btn success r-text-light" onClick={this.submit}>Add</button>
                        </Col>
                      </Row>
                </Col>
              </Row>
            </Modal>
        </div>
        )
    }

}

export default TableComp;
