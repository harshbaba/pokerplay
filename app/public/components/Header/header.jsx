class Header extends React.Component{
    constructor (props){
      super(props);
      console.log(props);
    }

    UNSAFE_componentWillReceiveProps(props){
      console.log(props);
    }

    
    render() {
      return <div className="layout-header">

              <div class="main-header">
                <h2>PokerPlay</h2>
              </div>
      </div>;
    };
  }

