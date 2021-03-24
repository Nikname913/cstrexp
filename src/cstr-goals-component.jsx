export class GoalsWindow extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        targetElem: JSON.parse(localStorage.getItem('nodeData')),
        addedElems: 0,
        goalsPack: [],
        goalName: '',
        counterName: '',
        startMessage: 'выберите элемент, на который хотите поставить цель, нажав на него правой кнопкой мыши',
        popUpMessage: 'no message no message no message no message',
        popUpShow: false,
        addValidate: false
      }
    }

    componentDidMount() {
      let goalRound = setInterval(() => {
        this.setState({
          targetElem: JSON.parse(localStorage.getItem('nodeData'))
        });
      }, 100);

      let clearState = setInterval(() => {
        
        if ( localStorage.getItem('clearState') === 'true' ) {

          this.setState({
            goalsPack: [],
            addedElems: 0
          });

          localStorage.setItem('clearState', 'false');

        } 

      }, 1000);
    }

    render = () => {

      return(

        <React.Fragment>

        { this.state.popUpShow == true ? (

          <section 
            style={alert}
            onClick={() => {

              this.setState({
                popUpShow: false,
                popUpMessage: 'no message no message no message no message'
              });

            }}
          >

            <span style={alertMes}>{this.state.popUpMessage}</span>
          
          </section>

        ) : null }

        <div
          className={clases.appBlockMainGoalsWindow}
          style={appBlockMainGoalsWindow}
        >

        { this.state.targetElem.tagname == 'NULLNODE' ? (

          <p style={startMes}>{this.state.startMessage}</p>

        ) : null }

        <span 
          style={goalsCounter}
          onClick={() => {

            if ( this.state.addedElems != 0 ) {

              //

            } else {
              
              this.setState({
                popUpShow: true,
                popUpMessage: 'Список триггеров пуст. Вы не создали ни одной цели. Выберите нужный элемент на сайте, заполните поле с ID цели и попробуйте снова'
              });

            }

          }}
        >
          
          { this.state.addedElems }

          { this.state.addedElems > 0 ? (

            <span style={goalsCounterMarker}></span>

          ) : null }

        </span>

        { this.state.targetElem.tagname != 'NULLNODE' ? (
          
          <React.Fragment>
          <div style={targetElem}>
            <p>{this.state.targetElem.tagname}</p>
            <p>{this.state.targetElem.attr.map(
              attribute => {
                if ( attribute.split('::')[0] !== 'style' ) { 
                  return(
                    <p>{`${attribute.split('::')[0]}`} - <span>{`${attribute.split('::')[1]}`}</span></p>
                  )
                }
              }
            )}</p> 
            <input 
              style={targetElemGoalInput}
              type="text"
              placeholder="Идентификатор цели*"
              maxlength="13"
              onKeyUp={(e) => {
                let tval = e.target.value;
                this.setState({
                  goalName: tval
                });

                if ( tval.length > 4 && this.state.counterName.length >=6 ) {
                  this.setState({
                    addValidate: true
                  });
                } else {
                  this.setState({
                    addValidate: false
                  });
                }
              }}
            /> 
            <span
              style={ 
                this.state.addValidate === false
                ? targetElemGoalAddUnvalid
                : targetElemGoalAddValid  
              }
              onClick={() => {

                if ( this.state.goalName.length > 4 && this.state.counterName.length >= 6 ) {

                let goalData = JSON.parse(localStorage.getItem('nodeData'));
                if ( goalData.tagname != 'NULLNODE' ) {

                  let locGoalsPack = this.state.goalsPack;
                  let addCorrect = true;

                  locGoalsPack.forEach(item => {

                    if ( typeof(item) == 'string' ) {

                    if ( item.split('**')[0] == this.state.goalName ) {

                      addCorrect = false;
                      this.setState({
                        popUpShow: true,
                        popUpMessage: 'Цель с таким ID уже создана, введите другой ID. Идентификатор должен быть уникальным для корректного сбора статистики'
                      });

                    }}

                  });

                  if ( addCorrect == true ) {

                    locGoalsPack.push(goalData);
                    locGoalsPack.push(`${this.state.goalName}**${this.state.counterName}`);
                    localStorage.setItem('nodeData', '{"attr":["class::appBlock"],"tagname":"NULLNODE"}');
                    this.setState({
                      addedElems: this.state.addedElems + 1,
                      goalsPack: locGoalsPack,
                      goalName: '',
                      counterName: '',
                      addValidate: false
                    });
                    
                    this.props.goalsTransport(locGoalsPack);
                    locGoalsPack = [];

                  }
                
                } 

                else {
                  //
                }

                } else {

                  this.setState({

                    popUpShow: true,
                    popUpMessage: 'Введите ID цели, длиной не менее 5 знаков. Идентификатор это уникальное имя цели в Метрике, по нему распределяются данные'

                  });

                }

              }}
            >
              ДОБАВИТЬ
            </span>
          </div>
          <div>
          
            <input 
              style={targetElemCounterInput}
              type="text"
              placeholder="Номер счетчика*"
              maxlength="10"
              onKeyUp={(e) => {
                let tval = e.target.value;
                this.setState({
                  counterName: tval
                });

                if ( tval.length >= 6 && this.state.goalName.length > 4 ) {
                  this.setState({
                    addValidate: true
                  });
                } else {
                  this.setState({
                    addValidate: false
                  });
                }
              }}
            />
            
          </div>
          </React.Fragment>

        ) : null }

        </div>

        </React.Fragment>

      );
    }
  }