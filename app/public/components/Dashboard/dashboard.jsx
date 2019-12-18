class Dashboard extends React.Component{
    constructor (props){
      super(props);
      console.log('0constructor');
      console.log(props);
      this.state = {
        users: props.data.users
      }
    }

    UNSAFE_componentWillReceiveProps(props){
      console.log('recieve  props');
      console.log(props);
      this.setState({users: props.data.users});
    }

    getFlipCardList = () => {
      const users = this.state.users;
      const flipCardList = users.map((user) =>
        
          <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              &nbsp;
            </div>

            <div class="flip-card-back">
              <Card cardValue={user.vote}/>
            </div>
            <div>
            
            </div>
          </div>
        </div>
        );
      

      return flipCardList;
    }

    doVotingAllow = (param) =>{
      $methods.handleAdminControls('isStartVoting', param, 'Update');
    }

    doReset = (param) =>{
      $methods.handleAdminControls('reset', param, 'Reset');
    }
    

    render() {
      const users = this.state.users;
      return <React.Fragment>
              <div className={"main dashboard-main " + (this.props.data.isAdmin ? 'admin ' : 'user')}>
                <div className="main-col">
                  {this.props.data.isAdmin &&
                    <div className="card-list-box">
                      { users ? this.getFlipCardList() : ''}
                    </div>
                  }

                  {!this.props.data.isAdmin &&
                    <div class="card-list-outer">
                    <div className="card-list">
                      <Card cardValue="all"/>
                    </div>
                    {this.props.data.groupInfo.isStartVoting &&
                      <div className="vote-btn-wrap">
                        <button type="button">Vote</button>
                      </div>
                    }
                    </div>
                    
                  }
                </div>

                {this.props.data.isAdmin &&
                  <div className="admin-bar-wrap">
                    <Admin doVotingAllow={this.doVotingAllow} doReset={this.doReset} />
                  </div>
                }
                <div className="online-users-wrap">
                  <OnlineUsers data={this.state.users} /> 
                </div>
            </div>
        </React.Fragment>
    };
}

