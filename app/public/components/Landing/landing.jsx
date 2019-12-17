class Landing extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      willNamePopupShow: false
    }
  }

  componentDidMount(){
    let isName = $utils.isNameSet();
    if(!isName.isNameSet){
      this.setState({willNamePopupShow: true});
    }
  }

  createGroup = () => {
      let groupId = this.isInputEmpty('create-grp-input');
      if(groupId.success){
        alert('Enter Group Id');
      }else{
        fetch('http://localhost:5000/createGroup/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName: localStorage.getItem('name'),
            groupId: groupId.value,
          })
        }).then(response => response.json())
        .then(data =>{
          console.log(data);
          localStorage.setItem('groupId', data.groupId);
          window.location.href = window.location.href+data.groupId;
        })
        .catch(error => {
          console.log(error);
        });
      } 
  }

  enterGroup = () => {
    let groupId = this.isInputEmpty('enter-grp-input');
    if(groupId.success){
      alert('Enter Group Id');
    }else{
      fetch('http://localhost:5000/enterGroup/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: localStorage.getItem('name'),
          groupId: groupId.value,
        })
      }).then(response => response.json())
      .then(data =>{
        console.log(data);
        if(data.success){
          localStorage.setItem('groupId', data.groupId);
          window.location.href = window.location.href+data.groupId;
        }
      })
      .catch(error => {
        console.log(error);
      });
    } 
  }

  isInputEmpty(elemId){
    let elem = document.getElementById(elemId);
    if(elem.value !== ''){
      return {success: false, value:elem.value};
    }
    return {success: true, value:''};
  }

  closeNamePopup = () =>{
    this.setState({willNamePopupShow: false});
  }

  render() {
    return (
      <React.Fragment>
          <div className="layout-landing">
            <div className="inp-grp-section enter-grp-section">
              <div className="flex-box">
                  <div class="inner-grp-main">
                    <h2>Would you like to Enter in a Group?</h2>
                    <div className="form-wrap">
                      <div className="input-ind">
                          <input type="text" name="enter-grp-input" placeholder="Enter Group Id" id="enter-grp-input"/>
                      </div>
                      <div className="input-ind">
                        <button type="button" onClick={this.enterGroup}>Enter</button>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="or-sec">
                <h3>Or</h3>
              </div>
            </div>
            <div className="inp-grp-section create-grp-section">
              <div className="flex-box">
                  <div class="inner-grp-main">
                    <h2>Would you like to Create a Group?</h2>
                    <div className="form-wrap">
                      <div className="input-ind">
                          <input type="text" name="create-grp-input" placeholder="Create Group Id" id="create-grp-input" />
                      </div>
                      <div className="input-ind">
                        <button type="button" onClick={this.createGroup}>Create</button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          {this.state.willNamePopupShow  &&
              <NamePopup closePopup={this.closeNamePopup} />
          }
      </React.Fragment>);
  };
}

