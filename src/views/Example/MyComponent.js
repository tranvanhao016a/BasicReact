import React from "react";
import ChildComponent from "./ChildComponent";
// Component lớp MyComponent kế thừa từ React.Component
class MyComponent extends React.Component {
    
    state = {
        name:'',
        password:'',
        arrJobs: [
            {
                id: 1,
                name: 'Frontend',
                salary: 1000,
            },
            {
                id: 2,
                name: 'Backend',
                salary: 2000,
            },
            {
                id: 3,
                name: 'Fullstack',
                salary: 3000,
            }
        ]
     
    }

    btnSumit = (event) => {
      //lấy giá trị từ form
      event.preventDefault();
       alert('Name: ' + this.state.name + ' Password: ' + this.state.password)

       
    }
   handleChange = (e) => {
         this.setState({
              //lấy giá trị từ form
                name: e.target.value,
               
         })
        
    }
    handlePassword = (e) => {
        this.setState({
            //lấy giá trị từ form
            password: e.target.value,
        })
    }

    render() {
        console.log('call render ', this.state )
        return (
            <>
               {/* form */}
                <form>
                      <label>
                            Name:
                            <input type="text" name="name" value={this.state.name}
                            onChange={(event)=> this.handleChange(event)}
                            
                            />
                      </label>
                        <br />
                        <label>
                            Password:
                            <input type="password" name="password" value={this.state.password}
                             onChange={(event)=> this.handlePassword(event)}
                            />
                        </label>
                      <input type="submit"  onClick={(event)=>this.btnSumit(event)} />
                 </form>
                 <ChildComponent name={this.state.name}
                 age={'20'}
                 address={'HCM'}
                 arrJobs={this.state.arrJobs}
                 
                 
                 />
               

            </>
        );
    }
}

// Ví dụ về các cách viết component khác (đã comment):
/*
1. Function component:
function MyComponent() {
    const name = 'Hào';
    return (
        <div className="MyComponent">
            {console.log('My name', name)}
            <p>Hello World My friend! {name}.</p>
        </div>
    );
}

2. Arrow function component:
const MyComponent = () => {
    return (
        <div className="MyComponent">
            <p>Hello World My friend! Arrow.</p>
        </div>
    );
}

3. Sử dụng React.Fragment:
function MyComponent() {
    const name = 'Hào';
    return (
        <React.Fragment>
            <div className="MyComponent">
                {console.log('My name', name)}
            </div>
            <p>Hello World My friend! {name}.</p>
        </React.Fragment>
    );
}
*/

export default MyComponent;