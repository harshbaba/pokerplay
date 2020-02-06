class Admin extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    startVoting = () =>{
        this.props.updateVotingStatus('VOTING IN PROGRESS');
        
        setTimeout(() => {
            if(this.props.data.groupInfo.votingStatus == "VOTING IN PROGRESS"){
                this.props.updateVotingStatus('VOTING DONE');
            }
        }, 45000);
    }

    passReset = () => {
        this.props.doReset('NOT STARTED');
        
    }

    passDeclareResult = () =>{
        this.props.declareResult('RESULT DECLARED');
        
    }

    render(){
        return <React.Fragment> 
            <div className="admin-bar">
                <div className="user-icon">
                    <img src="../images/user-profile-male.png" />
                    <span className="admin-title">(Admin)</span>
                </div>
                <ul className="control-list">
                    <li>
                        <div className="control-list-ind">
                                <button type="button" onClick={this.startVoting}>Start Voting</button>
                        </div>
                        <div className="control-list-ind">
                                <button type="button" onClick={this.passDeclareResult}>Declare Result</button>
                        </div>
                        <div className="control-list-ind">
                                <button type="button" onClick={this.passReset}>Reset</button>
                            </div>
                        {/*
                        {this.props.data.groupInfo.votingStatus == "NOT STARTED" && !this.state.isStartVoting &&
                            <div className="control-list-ind">
                                <button type="button" onClick={this.startVoting}>Start Voting</button>
                            </div>
                        }
                        {this.props.data.groupInfo.votingStatus == "VOTING IN PROGRESS" 
                            <div className="control-list-ind">
                                <button type="button" onClick={this.passReset} >Stop Voting</button>
                            </div>
                        }
                        {this.props.data.groupInfo.votingStatus == "VOTING DONE" &&
                            <div className="control-list-ind">
                                <button type="button" onClick={this.passDeclareResult}>Declare Result</button>
                            </div>
                            
                        }
                        {this.props.data.groupInfo.votingStatus == "VOTING DONE" || this.props.data.groupInfo.votingStatus == "RESULT DECLARED" &&
                        <div className="control-list-ind">
                                <button type="button" onClick={this.passReset}>Reset</button>
                            </div>
                        }
                        */}
                    </li>
                </ul>
            </div>
        </React.Fragment>
    };
}