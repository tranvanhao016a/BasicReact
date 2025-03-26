import React from "react";

// Component lớp ChildComponent kế thừa từ React.Component
class ChildComponent extends React.Component {
 
    render() {
        console.log('>>> check props ', this.props);
        let {name, age, address, arrJobs} = this.props;
        return (
            <>
                <div className="job-lists">
                    {
                        arrJobs.map((job, index) => {
                            return (
                                <div key={index}>
                                    <p>ID: {job.id} - {job.name} - {job.salary} $</p>
                                   
                                </div>
                            );
                        })
                    }
                </div>
            </>
        );
    }
}

export default ChildComponent;