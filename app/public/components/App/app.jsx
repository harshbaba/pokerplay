class App extends React.Component{
    constructor(props){
      super(props);
      console.log('=================App.jsx constructor===========');
      console.log(props.data);
    }

    componentDidMount(){
      
    }

    render() {

      return <div className="full-page">
            <Header data={this.props.data} />
            {this.props.data.pageName == "dashboard" &&
              <Dashboard data={this.props.data} />
            }
            {this.props.data.pageName == "landing" &&
              <Landing data={this.props.data} />
            }
            <div className="page-bg" id="page-bg"></div>
      </div>;
    };
}