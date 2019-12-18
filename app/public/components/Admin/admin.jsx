class Admin extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    passVotingAllow = () =>{
        this.props.doVotingAllow(true);
        setTimeout(() => {
            this.props.doVotingAllow(false);
        }, 45000);
    }

    passReset = () => {
        this.props.doReset(true);
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
                            <button type="button" onClick={this.passVotingAllow}>Start Voting</button>
                        </div>
                        <div className="control-list-ind">
                            <button type="button">Show Result</button>
                        </div>
                        <div className="control-list-ind">
                            <button type="button">Declare Result</button>
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