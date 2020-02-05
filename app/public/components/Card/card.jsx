class Card extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let cardValue = this.props.cardValue;
        let isVoteDone = this.props.isVoteDone;
        return <React.Fragment>
        {(cardValue == '1' || cardValue == 'all') &&
            <div class="card-in-wrapper">
                {!isVoteDone &&
                <input type="radio" name="card-check" value="1"  className="card-checkbox" />
                }
                <section class="card card--spade" value="1">
                    <div class="card__inner card__inner--centered">
                    
                    <div class="card__column card__column--centered">
                    <div class="card__symbol"></div>
                    </div>
                    
                    </div>
                </section>
            </div>
        }
        {(cardValue == '2' || cardValue == 'all') &&
            <div class="card-in-wrapper">
            {!isVoteDone &&
            <input type="radio" name="card-check" value="2"  className="card-checkbox" />
            }
            <section class="card card--spade" value="2">
                <div class="card__inner card__inner--centered">
                <div class="card__column">
                <div class="card__symbol"></div>
                <div class="card__symbol"></div>
                </div>
                </div>
            </section>
            </div>
        }

        {(cardValue == '3' || cardValue == 'all') &&
            <div class="card-in-wrapper">
                {!isVoteDone &&
                <input type="radio" name="card-check" value="3"  className="card-checkbox" />
                }
                <section class="card card--spade" value="3">
                <div class="card__inner card__inner--centered">
                <div class="card__column">
                <div class="card__symbol"></div>
                <div class="card__symbol"></div>
                <div class="card__symbol"></div>
                </div>
                </div>
                </section>
            </div>
        }
        

        {(cardValue == '5' || cardValue == 'all') &&
        <div class="card-in-wrapper">
            {!isVoteDone &&
            <input type="radio" name="card-check" value="5"  className="card-checkbox" />
            }
            <section class="card card--spade" value="5">
                <div class="card__inner">
                <div class="card__column">
                <div class="card__symbol"></div>
                <div class="card__symbol"></div>
                </div>
                <div class="card__column card__column--centered">
                <div class="card__symbol"></div>
                </div>
                <div class="card__column">
                <div class="card__symbol"></div>
                <div class="card__symbol"></div>
                </div>
                </div>
            </section>
        </div>
        }

        

        

        {(cardValue == '8' || cardValue == 'all') &&
        <div class="card-in-wrapper">
        {!isVoteDone &&
        <input type="radio" name="card-check" value="8"  className="card-checkbox" />
        }
        <section class="card card--spade" value="8">
        <div class="card__inner">
        <div class="card__column">
        <div class="card__symbol"></div>
        <div class="card__symbol"></div>
        <div class="card__symbol"></div>
        </div>
        <div class="card__column card__column--centered">
        <div class="card__symbol card__symbol--big"></div>
        <div class="card__symbol card__symbol--big"></div>
        </div>
        <div class="card__column">
        <div class="card__symbol"></div>
        <div class="card__symbol"></div>
        <div class="card__symbol"></div>
        </div>
        </div>
        </section>
        </div>
        }


        {cardValue == undefined &&
            <div className="joker_card">
                &nbsp;
            </div>
        }

        {cardValue == 0 &&
            <div className="joker_card">
                &nbsp;
            </div>
        }
        
        </React.Fragment>
    }
}

