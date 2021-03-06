class OnlineUsers extends React.Component{
    constructor (props){
        super(props);
        console.log('child');
        console.log(props);
        this.state = {
            onlineUsers: props.data
        }
    }

    UNSAFE_componentWillReceiveProps(props){
        console.log('child recieve  props');
        console.log(props);
        this.setState({onlineUsers: props.data});
    }

    getUserlist = () => {
        let users = this.state.onlineUsers;
        if(!users) return;
        users = _.sortBy(users, 'name');
        const usersList = users.map((user) =>
            <li>
                <div className="online-user-ind">
                    <p>{user.name}</p>
                </div>
            </li>
        );
        return usersList;
    }

    getOnlineusersCount = (users) =>{
        if(!users) return "0";
        return users.length;
    }

    render() {
      return <div className="online-user-main">
                <h3>Online Users ({this.getOnlineusersCount(this.state.onlineUsers)})</h3>
                <ul className="user-list">
                    {this.getUserlist()}
                </ul>
            </div>
    };
  }

