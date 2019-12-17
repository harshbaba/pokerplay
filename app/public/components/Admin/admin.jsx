class Admin extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        
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
                            <button type="button">Start Voting</button>
                        </div>
                        <div className="control-list-ind">
                            <button type="button">Show Result</button>
                        </div>
                        <div className="control-list-ind">
                            <button type="button">Declare Result</button>
                        </div>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    };
}