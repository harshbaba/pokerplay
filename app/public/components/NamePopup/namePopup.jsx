class NamePopup extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    setName = () =>{
        let elem = document.getElementById('your-name');
        if(elem == ""){
            alert('Please fill required field');
        }
        else{
            localStorage.setItem('name', elem.value);
            this.props.closePopup();
        }
    }

    render() {
        return (
            <div className="popup-wrapper active" id="popup-wrapper">
                <div className="popup-overlay">
                    &nbsp;
                </div>
                <div className="popup-main">
                    <div className="popup-inner">
                        <h2> Enter Your Name</h2>
                        <div class="input-ind">
                            <input type="text" name="your-name" placeholder="Enter Your Name" id="your-name" onKeyDown={(e) => $utils.alphaOnly(e)} />
                        </div>
                        <div className="input-ind">
                            <button type="button" onClick={this.setName}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}