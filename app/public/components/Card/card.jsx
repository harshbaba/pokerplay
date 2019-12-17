class Card extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let cardValue = this.props.cardValue;

        return <React.Fragment>
        {(cardValue == '1' || cardValue == 'all') &&
            <div class="card-in-wrapper">
                <input type="radio" name="card-check" value="1"  className="card-checkbox" />
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
            <input type="radio" name="card-check" value="2"  className="card-checkbox" />
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
                <input type="radio" name="card-check" value="3"  className="card-checkbox" />
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

        {(cardValue == '4' || cardValue == 'all') &&
        <div class="card-in-wrapper">
            <input type="radio" name="card-check" value="4"  className="card-checkbox" />
            <section class="card card--spade" value="4">
            <div class="card__inner">
            <div class="card__column">
            <div class="card__symbol"></div>
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

        {(cardValue == '5' || cardValue == 'all') &&
        <div class="card-in-wrapper">
            <input type="radio" name="card-check" value="5"  className="card-checkbox" />
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

        {(cardValue == '6' || cardValue == 'all') &&
        <div class="card-in-wrapper">
            <input type="radio" name="card-check" value="6"  className="card-checkbox" />
            <section class="card card--spade" value="6">
            <div class="card__inner">
            <div class="card__column">
            <div class="card__symbol"></div>
            <div class="card__symbol"></div>
            <div class="card__symbol"></div>
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

        {(cardValue == '7' || cardValue == 'all') &&
        <div class="card-in-wrapper">
        <input type="radio" name="card-check" value="7"  className="card-checkbox" />
        <section class="card card--spade" value="7">
        <div class="card__inner">
        <div class="card__column">
        <div class="card__symbol"></div>
        <div class="card__symbol"></div>
        <div class="card__symbol"></div>
        </div>
        <div class="card__column card__column--centered">
        <div class="card__symbol card__symbol--huge"></div>
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

        {(cardValue == '8' || cardValue == 'all') &&
        <div class="card-in-wrapper">
        <input type="radio" name="card-check" value="8"  className="card-checkbox" />
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

        {(cardValue == '9' || cardValue == 'all') &&
        <div class="card-in-wrapper">
        <input type="radio" name="card-check" value="9"  className="card-checkbox" />
        <section class="card card--spade" value="9">
        <div class="card__inner">
        <div class="card__column">
        <div class="card__symbol"></div>
        <div class="card__symbol"></div>
        <div class="card__symbol card__symbol--rotated"></div>
        <div class="card__symbol"></div>
        </div>
        <div class="card__column card__column--centered">
        <div class="card__symbol card__symbol"></div>
        </div>
        <div class="card__column">
        <div class="card__symbol"></div>
        <div class="card__symbol"></div>
        <div class="card__symbol card__symbol--rotated"></div>
        <div class="card__symbol"></div>
        </div>
        </div>
        </section>
        </div>
        }

        {(cardValue == '10' || cardValue == 'all') &&
        <div class="card-in-wrapper">
        <input type="radio" name="card-check" value="10"  className="card-checkbox" />
        <section class="card card--spade" value="10">
        <div class="card__inner">
        <div class="card__column">
        <div class="card__symbol"></div>
        <div class="card__symbol"></div>
        <div class="card__symbol card__symbol--rotated"></div>
        <div class="card__symbol"></div>
        </div>
        <div class="card__column card__column--centered">
        <div class="card__symbol card__symbol--big"></div>
        <div class="card__symbol card__symbol--big"></div>
        </div>
        <div class="card__column">
        <div class="card__symbol"></div>
        <div class="card__symbol"></div>
        <div class="card__symbol card__symbol--rotated"></div>
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
        
        </React.Fragment>
    }
}

