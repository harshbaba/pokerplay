class Dashboard extends React.Component{
    constructor (props){
      super(props);
      console.log('0constructor');
      console.log(props);
      this.state = {
        users: props.data.users,
        isVoteDone: false,
        isDeclareResult: false 
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
        
          
          <div className={"flip-card " + (this.state.isDeclareResult ? 'active ' : '')}>
          <div class="flip-card-inner">
            <div class="flip-card-front">
              &nbsp;
            </div>

            <div class="flip-card-back">
              <Card cardValue={user.vote}/>
            </div>
          </div>
          <div class="user-info-ind">
              <p>({user.name})</p>
            </div>
        </div>
      );
      
      return flipCardList;
    }

    updateVotingStatus = (param) =>{
      $methods.handleAdminControls('votingStatus', param, 'Update');
    }

    doReset = (param) =>{
      $methods.handleAdminControls('votingStatus', param, 'Reset');
    }

    doVote = () =>{
      let checkedCardEle = document.querySelector('.card-checkbox:checked');
      if(checkedCardEle == null){
        alert('please select a card');
      }else{
        let checkedValue = parseInt(checkedCardEle.value);
        $methods.doVote(checkedValue);
        this.setState({isVoteDone: true});
      }
    }

    doDeclareResult = (param) =>{
      this.setState({isDeclareResult: true});
      $methods.handleAdminControls('votingStatus', param, 'Update');
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
                      <Card cardValue="all" isVoteDone={this.state.isVoteDone} />
                    </div>
                    {this.props.data.groupInfo.votingStatus == "USER VOTING IN PROGRESS" && !this.state.isVoteDone &&
                      <div className="vote-btn-wrap">
                        <button type="button" onClick={this.doVote} id="do-vote-btn">Vote</button>
                      </div>
                    }
                    </div>
                    
                  }
                </div>

                {this.props.data.isAdmin &&
                  <div className="admin-bar-wrap">
                    <Admin updateVotingStatus={this.updateVotingStatus} doReset={this.doReset} declareResult={this.doDeclareResult}/>
                  </div>
                }
                <div className="online-users-wrap">
                  <OnlineUsers data={this.state.users} /> 
                </div>
            </div>
        </React.Fragment>
    };
}

