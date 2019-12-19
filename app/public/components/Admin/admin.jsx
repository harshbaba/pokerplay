class Admin extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    startVoting = () =>{
        this.props.updateVotingStatus('USER VOTING IN PROGRESS');
        setTimeout(() => {
            this.props.updateVotingStatus('ADMIN VOTING IN PROGRESS');

            setTimeout(() => {
                this.props.updateVotingStatus('VOTING DONE');
            }, 30000);

        }, 30000);
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
                            <button type="button" onClick={this.passReset} >Reset</button>
                        </div>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    };
}