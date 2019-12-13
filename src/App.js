import React,{Component} from 'react';
import { TabContent, TabPane,  Row, Col, Navbar,  NavbarBrand, Nav, NavItem, NavLink,   NavbarText } from 'reactstrap';
import logo from './logo.svg';
import classnames from 'classnames';
import TableComp from './table.js';
import './App.css';

class App extends Component {
     constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '6',
          sideTab:[{name:"Products",key:'1'},{name:"Demo Scripts",key:'2'},{name:"Customers",key:'3'},{name:"Sales Team",key:'4'},{name:"Demos",key:'5'},{name:"Settings",key:'6'},]
        };
      }

      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

    render(){
      return(
              <div>
                <Navbar color="light" light className="nav-border">
                  <NavbarBrand href="/" className="mr-auto App-header">
                    <img src={logo} className="App-logo" alt="logo" /> 
                    <NavbarText className="mr-2">My Application</NavbarText>
                  </NavbarBrand>
                  
                  <img src="https://media.licdn.com/dms/image/C4E03AQGzC60F5Z4TnA/profile-displayphoto-shrink_100_100/0?e=1581552000&v=beta&t=dewDfOUS8Xdf8GUdRh8p8CTWG16-u-fqnok_5Qocr9s" className="App-img" alt="logo" /> 
                  <NavbarText className="mx-2">
                    Parmod Singhal
                  </NavbarText>
                </Navbar>
                <Row>
                  <Col xs="6" sm="4" md="2" >
                    <Nav tabs vertical pills className="border-right" style={{height:window.innerHeight}}>
                      {this.state.sideTab.map(tab =>{
                            return (<NavItem key={tab.key}>
                                        <NavLink
                                          className={classnames({'py-4': true,active: this.state.activeTab === tab.key})}
                                          onClick={() => {
                                            this.toggle(tab.key);
                                          }}
                                        >
                                          {tab.name}
                                        </NavLink>
                                      </NavItem>)
                          })}
                    </Nav>
                  </Col>
                  <Col xs="6" sm="6" md="9">
                    <TabContent activeTab={this.state.activeTab}>

                      {this.state.sideTab.map(tab =>{
                            return (
                                    <TabPane tabId={tab.key}  key={tab.key}>
                                      {(tab.key!=="6")?<h4  className="mt-5">{tab.name}</h4>:<TableComp />}
                                    </TabPane>
                                    )
                          })}
                    </TabContent>
                  </Col>
                </Row>
              </div>
        )
    }

}

export default App;
