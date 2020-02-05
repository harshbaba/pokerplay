class Dashboard extends React.Component{
    constructor (props){
      super(props);
      console.log('0constructor');
      console.log(props);
      if(props.data.groupInfo.votingStatus == "VOTING DONE"){
          this.setState({isVoteDone:false});
      }
      if(props.data.groupInfo.votingStatus == "NOT STARTED"){
        this.setState({isDeclareResult:false});
      }
      
      
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
      if(props.data.groupInfo.votingStatus == "VOTING DONE"){
          this.setState({isVoteDone:false});
      }

      if(props.data.groupInfo.votingStatus == "NOT STARTED"){
        this.setState({isDeclareResult:false});
      }
      
    }

    getFlipCardList = () => {
      const users = this.state.users;
      const flipCardList = users.map((user) =>
        
          
          <div className={"flip-card " + (this.state.isDeclareResult ? 'active ' : '')}>
          <div class="flip-card-inner">
            <div class="flip-card-front">
              &nbsp;
            </div>
            {user.isVoteDone &&
              <div class="vote-done-mark">
              </div>
            }
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
                  <div className={"header-status-bar " + (this.props.data.groupInfo.votingStatus ==  "VOTING IN PROGRESS" ? 'active' : 'user')}>
                    <h3 class="status-msg"><marquee>Voting In Progress</marquee></h3>
                  </div>

                  {this.props.data.isAdmin &&
                    <div className="card-list-box">
                      { users ? this.getFlipCardList() : ''}
                    </div>
                  }

                  {!this.props.data.isAdmin && this.props.data.groupInfo.votingStatus == "NOT STARTED" &&
                    
                      <div class="user-update-box">
                        <h3><span>Voting has not started.</span>Stay active at this page, once admin will open voting then here you will see voting options.</h3>
                        <h4>#KeepCalmAndWaitToVote</h4>
                      </div>

                  }

                  {!this.props.data.isAdmin && this.props.data.groupInfo.votingStatus == "VOTING IN PROGRESS" && !this.state.isVoteDone &&
                    
                    <div class="card-list-outer">
                    <div className="card-list">
                      <Card cardValue="all" isVoteDone={this.state.isVoteDone} />
                    </div>
                    
                      <div className="vote-btn-wrap">
                        <button type="button" onClick={this.doVote} id="do-vote-btn">Vote</button>
                      </div>
                    
                    </div>
                    
                  }

                  {!this.props.data.isAdmin && this.props.data.groupInfo.votingStatus == "VOTING IN PROGRESS" && this.state.isVoteDone &&

                    <div class="user-update-box">
                        <h3><span>Your Wait has been stored with us.</span>Stay active at this page, once admin will declare result, result will be load here.</h3>
                        <h4>#KeepCalmAndWaitForResult</h4>
                        <h4>#AchheDinAayenge</h4>
                      </div>
                  }

                  {!this.props.data.isAdmin && this.props.data.groupInfo.votingStatus == "VOTING DONE" &&

                    <div class="user-update-box">
                        <h3><span>Voting has been closed.</span>Stay active at this page, once admin will declare result, result will be load here.</h3>
                        <h4>#KeepCalmAndWaitForResult</h4>
                        <h4>#AchheDinAayenge</h4>
                      </div>
                  }

                  {!this.props.data.isAdmin && this.props.data.groupInfo.votingStatus == "RESULT DECLARED" &&

                    <div class="user-update-box">
                        <h3><span>Result has been declared!</span></h3>
                        <h4>#KyaAchheDinAaGaye</h4>
                      </div>
                  }
                </div>

                {this.props.data.isAdmin &&
                  <div className="admin-bar-wrap">
                    <Admin updateVotingStatus={this.updateVotingStatus} doReset={this.doReset} declareResult={this.doDeclareResult} data={this.props.data}/>
                  </div>
                }
                <div className="online-users-wrap">
                  <OnlineUsers data={this.state.users} /> 
                </div>
            </div>
        </React.Fragment>
    };
}

