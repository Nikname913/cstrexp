  let logo = "img/logo.png";
  let bgc = "#D1C4E9";
  let targetBgc = "#E0E0E0";
  let targetBgcAddBtn = "#9575CD";

  const appBlock = {
    boxSizing: "border-box",
    display: "block",
    position: "absolute",
    width: "400px",
    height: "100%",
    top: "0",
    left: "0",
    backgroundColor: bgc,
    boxShadow: "0px 0px 5px grey",
    overflow: 'hidden',
    borderRadius: '0px'
  }
  const appBlockTarget = {
    boxSizing: "border-box",
    display: "block",
    position: "absolute",
    width: "400px",
    height: "100%",
    top: "0",
    left: "0",
    marginLeft: '420px',
    backgroundColor: bgc,
    boxShadow: "0px 0px 5px grey",
    overflow: 'hidden',
    borderRadius: '0px'
  }
  const appBlockAuth = {
    boxSizing: "border-box",
    display: "block",
    position: "absolute",
    width: "400px",
    height: "100%",
    top: "0",
    left: "0",
    marginLeft: '840px',
    backgroundColor: bgc,
    boxShadow: "0px 0px 5px grey",
    overflow: 'hidden',
    borderRadius: '0px'
  }
  const appBlockAuthForm = {
    display: 'block',
    position: 'relative',
    width: '320px',
    height: 'auto',
    minHeight: '100px',
    borderRadius: '10px',
    border: '1px solid white',
    marginTop: '100px',
    marginLeft: '38px',
    boxSizing: 'border-box',
    padding: '14px'
  }
  const appBlockAuthFormTextInput = {
    display: 'block',
    position: 'relative',
    width: '100%',
    height: '40px',
    outline: 'none',
    border: '1px solid grey',
    borderRadius: '5px',
    marginBottom: '10px',
    fontSize: '13px',
    paddingLeft: '12px',
    boxSizing: 'border-box'
  }
  const appBlockTopMenu = {
    boxSizing: "border-box",
    display: "block",
    position: "absolute",
    width: "100%",
    height: "60px",
    top: "0",
    left: "0",
    borderBottom: "2px solid white",
    lineHeight: "60px",
    paddingLeft: "14px"
  }
  const appBlockTopMenuSpec = {
    boxSizing: "border-box",
    display: "block",
    position: "absolute",
    width: "100%",
    height: "60px",
    top: "0",
    left: "0",
    borderBottom: "2px solid white",
    lineHeight: "60px",
    paddingLeft: "58px"
  }
  const appBlockTopMenuLogo = {
    display: "block",
    position: "absolute",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    top: "50%",
    marginTop: "-19px",
    left: "0",
    marginLeft: "10px",
    backgroundImage: "url(" + logo + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepaet: "no-repeat"
  }
  const appBlockTargetTopMenu = {
    boxSizing: "border-box",
    display: "block",
    position: "absolute",
    width: "100%",
    height: "60px",
    top: "0",
    left: "0",
    borderBottom: "2px solid white",
    lineHeight: "60px",
    paddingLeft: "14px",
    fontSize: '13px',
    fontStyle: 'italic'
  }
  const appBlockTopMenuSpan = {
    boxSizing: "border-box",
    display: "block",
    position: "absolute",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "1px solid white",
    top: "50%",
    marginTop: "-16px",
    left: "100%",
    marginLeft: "-58px"
  }
  const appBlockTopMenuSpanTwo = {
    boxSizing: "border-box",
    display: "block",
    position: "absolute",
    width: "30px",
    height: "30px",
    borderRadius: "50px",
    border: "1px solid white",
    top: "50%",
    marginTop: "-16px",
    left: "100%",
    marginLeft: "-102px"
  }
  const appBlockMainGoalsWindow = {
    boxSizing: "border-box",
    display: "block",
    position: "relative",
    width: "100%",
    height: "auto",
    minHeight: '300px',
    borderBottom: "2px solid white",
    marginTop: "80px",
    paddingBottom: '20px'
  }
  const appBlockMainGoalsWindowScroll = {
    boxSizing: "border-box",
    display: "block",
    position: "relative",
    width: "110%",
    height: "500px",
    borderBottom: "2px solid white",
    marginTop: "80px",
    paddingBottom: '20px',
    overflowY: 'scroll',
    overflowX: 'hidden'
  }
  const appBlockMainGoalsWindowAdded = {
    display: 'block',
    position: 'absolute',
    width: '160px',
    height: 'auto',
    minHeight: '40px',
    backgroundColor: 'white',
    left: '100%',
    marginLeft: '-180px',
    marginTop: '0px',
    'border-bottom-right-radius': '10px',
    'border-bottom-left-radius': '10px',
    paddingTop: '6px',
    paddingBottom: '9px',
    'z-index': '5'
  }
  const appBlockMainGoalsWindowScrollAdded = {
    display: 'block',
    position: 'relative',
    width: '362px',
    height: 'auto',
    minHeight: '100px',
    backgroundColor: 'white',
    marginLeft: '18px',
    borderRadius: '5px',
    padding: '12px',
    paddingLeft: '16px',
    paddingRight: '20px',
    lineHeight: '20px',
    fontSize: '11px',
    boxSizing: 'border-box',
    overflow: 'hidden'
  }
  const appBlockMainGoalsWindowLine = {
    display: 'block',
    position: 'relative',
    width: '100%',
    height: 'auto',
    fontSize: '12px'
  }
  const appBlockMainGoalsWindowLineDeleteGoal = {
    display: 'block',
    position: 'absolute',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    border: '1px solid grey',
    left: '100%',
    marginLeft: '-52px',
    top: '0',
    marginTop: '11px',
    cursor: 'pointer'
  }
  const alert = {
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(105,105,105,0.5)',
    top: '0',
    left: '0',
    zIndex: '10'
  }
  const alertMes = {
    display: 'block',
    position: 'absolute',
    width: '240px',
    height: 'auto',
    minHeight: '40px',
    borderRadius: '5px',
    backgroundColor: 'white',
    color: 'grey',
    left: '50%',
    marginLeft: '-120px',
    top: '200px',
    boxSizing: 'border-box',
    padding: '18px',
    paddingTop: '16px',
    paddingBottom: '17px',
    paddingLeft: '20px',
    paddingRight: '24px',
    lineHeight: '18px',
    fontSize: '13px'
  }
  const targetElem = {
    display: 'block',
    position: 'relative',
    width: '100%',
    height: 'auto',
    margin: '0 auto',
    minHeight: '40px',
    paddingLeft: '14px',
    paddingRight: '16px',
    paddingTop: '6px',
    paddingBottom: '5px',
    boxSizing: 'border-box',
    lineHeight: '20px',
    backgroundColor: targetBgc
  }
  const targetElems = {
    display: 'block',
    position: 'relative',
    width: '100%',
    height: 'auto',
    margin: '0 auto',
    minHeight: '40px',
    borderTop: '2px solid white',
    borderBottom: '2px solid white',
    paddingLeft: '14px',
    paddingRight: '16px',
    paddingTop: '6px',
    paddingBottom: '5px',
    boxSizing: 'border-box',
    lineHeight: '20px',
    marginTop: '20px',
  }
  const targetElemCounterInput = {
    display: 'block',
    position: 'relative',
    width: '100%',
    height: '40px',
    fontSize: '13px',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    borderTop: '2px solid white',
    textAlign: 'center',
    padding: '0',
    paddingTop: '2px',
    marginTop: '20px'
  }
  const targetElemGoalInput = {
    display: 'block',
    position: 'relative',
    width: '80%',
    height: '40px',
    fontSize: '13px',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    borderTop: '2px solid white',
    textAlign: 'center',
    padding: '0',
    paddingTop: '2px',
    marginLeft: '10%'
  }
  const targetElemGoalAddUnvalid = {
    display: 'block',
    position: 'relative',
    width: '220px',
    height: '40px',
    borderRadius: '5px',
    marginTop: '5px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '14px',
    textAlign: 'center',
    lineHeight: '40px',
    cursor: 'pointer',
    fontSize: '11px',
    color: 'white',
    backgroundColor: '#9E9E9E',
    boxShadow: '0px 0px 6px 1px grey'
  }
  const targetElemGoalAddValid = {
    display: 'block',
    position: 'relative',
    width: '220px',
    height: '40px',
    borderRadius: '5px',
    marginTop: '5px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '14px',
    textAlign: 'center',
    lineHeight: '40px',
    cursor: 'pointer',
    fontSize: '11px',
    color: 'white',
    backgroundColor: targetBgcAddBtn,
    boxShadow: '0px 0px 6px 1px grey'
  }
  const goalsCounter = {
    display: 'block',
    position: 'absolute',
    width: '40px',
    height: '40px',
    borderRadius: '5px',
    border: '2px solid grey',
    left: '100%',
    marginLeft: '-60px',
    top: '100%',
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '16px',
    lineHeight: '42px',
    cursor: 'pointer'
  }
  const goalsCounterMarker = {
    display: 'block',
    position: 'absolute',
    width: '10px',
    height: '10px',
    backgroundColor: 'red',
    borderRadius: '50%',
    top: '0',
    marginTop: '-5px',
    left: '100%',
    marginLeft: '-5px'
  } 
  const startMes = {
    display: 'block',
    position: 'absolute',
    width: '300px',
    height: 'auto',
    lineHeight: '18px',
    fontSize: '13px',
    color: 'grey',
    textAlign: 'center',
    marginLeft: '50px'
  }
  const addButtonsGroup = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    width: '300px',
    border: '1px solid white',
    borderRadius: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '14px',
    paddingLeft: '12px',
    paddingRight: '12px',
    boxSizing: 'border-box'
  }
  const addButtonsGroupPublic = {
    display: 'block',
    position: 'relative',
    width: '129px',
    height: '36px',
    backgroundColor: '#4CAF50',
    borderRadius: '5px',
    lineHeight: '37px',
    fontSize: '11px',
    textAlign: 'center',
    cursor: 'pointer',
    color: 'white',
    boxShadow: '0px 0px 6px 1px grey'
  }
  const addButtonsGroupPublicError = {
    display: 'block',
    position: 'relative',
    width: '129px',
    height: '36px',
    backgroundColor: '#9E9E9E',
    borderRadius: '5px',
    lineHeight: '37px',
    fontSize: '11px',
    textAlign: 'center',
    cursor: 'pointer',
    color: 'white',
    boxShadow: '0px 0px 6px 1px grey'
  }
  const copyTextCode = {
    display: 'block',
    position: 'relative',
    width: '159px',
    height: '36px',
    backgroundColor: '#4CAF50',
    color: 'white',
    boxShadow: '0px 0px 6px 1px grey',
    borderRadius: '5px',
    lineHeight: '37px',
    fontSize: '11px',
    textAlign: 'center',
    cursor: 'pointer',
    marginLeft: '18px',
    marginTop: '15px'
  }
  const addButtonsGroupReg = {
    display: 'block',
    position: 'relative',
    width: '169px',
    height: '36px',
    backgroundColor: '#4CAF50',
    color: 'white',
    boxShadow: '0px 0px 6px 1px grey',
    borderRadius: '5px',
    lineHeight: '37px',
    fontSize: '11px',
    textAlign: 'center',
    cursor: 'pointer',
    marginTop: '20px'
  }
  const addButtonsGroupAuth = {
    display: 'block',
    position: 'relative',
    width: '169px',
    height: '36px',
    backgroundColor: '#4CAF50',
    color: 'white',
    boxShadow: '0px 0px 6px 1px grey',
    borderRadius: '5px',
    lineHeight: '37px',
    fontSize: '11px',
    textAlign: 'center',
    cursor: 'pointer',
    marginTop: '14px'
  }
  const goalsCodeComment = {
    fontSize: '13px',
    width: '340px',
    marginLeft: '18px',
    marginTop: '14px',
    lineHeight: '20px',
    color: 'grey'
  }
  const cpcSystemType = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    width: '180px',
    marginLeft: '-180px',
    marginTop: '0px',
    height: '42px',
    borderRadius: '5px',
    top: '0'
  }
  const cpcSystemTypeButton = {
    display: 'block',
    position: 'relative',
    width: '66px',
    height: '30px',
    borderRadius: '20px',
    border: '1px solid grey'
  }
  const cpcSystemTypeGreenButton = {
    display: 'block',
    position: 'absolute',
    width: '14px',
    height: '14px',
    backgroundColor: '#9575CD',
    borderRadius: '50%',
    top: '50%',
    marginTop: '-7px',
    marginLeft: '8px'
  }
  const cpcSystemTypeButtonTitle = {
    fontSize: '14px',
    marginLeft: '10px'
  }

  const clases = {
    appBlock: "appBlock",
    appBlockTopMenu: "appBlockTopMenu",
    appBlockTopMenuSpan: "appBlockTopMenuSpan",
    appBlockTopMenuSpanTwo: "appBlockTopMenuSpanTwo",
    appBlockMainGoalsWindow: "appBlockMainGoalsWindow"
  }

  class GoalsWindow extends React.Component {

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

    render() {

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

          <div style={cpcSystemType}> 
            
            <span style={cpcSystemTypeButton}>
              <span style={cpcSystemTypeGreenButton}></span>
            </span>
            <p style={cpcSystemTypeButtonTitle}>Метрика</p>
          
          </div>
          
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

  class Celestaver extends React.Component {

    constructor(props) {
      
      super(props);

      this.state = {
        goalsPackParent: [],
        publicPack: '',
        showGoal1: false,
        login: '',
        password: '',
        authButton: false,
        authShow: false,
        authCorrect: false,
        popUpShow: false,
        popUpMessage: 'no message no message no message no message',
        publicButtonInner: 'ОПУБЛИКОВАТЬ',
        exportHashLine: '',
        goalsCodeComment: false,
        authColor: true,
        aboutGoals: 'подробно',
        addedGoals: null,
        showAddedGoals: false
      }

      this.setGoalsState = this.setGoalsState.bind(this);
      this.testFunc = this.testFunc.bind(this);

    }

    testFunc() {
      this.setState({
        showGoal1: !this.state.showGoal1
      });
    }

    componentWillMount() {
      localStorage.setItem('cstr', 'ready');
      localStorage.removeItem('nodeData');
      if ( localStorage.getItem('nodeData') == null ) {
        localStorage.setItem('nodeData', '{"attr":["class::appBlock"],"tagname":"NULLNODE"}');
        // console.log(localStorage.getItem('nodeData'));
      }

    }

    componentDidMount() {

      localStorage.setItem('exportGoalData', '');
      localStorage.setItem('clearState', 'false');
      
      let token = localStorage.getItem('cstrhash');

      fetch(`http://cq52508.tmweb.ru/celestaver/get.php?data=${token}`)
      .then(res => res.text())
      .then(data => {
        if ( data !== '' ) {

          let jsonData = JSON.parse(data);
          this.setState({
            addedGoals: jsonData
          });

        }
      })
    
    }

    setGoalsState(value) {

      console.log(value);

      this.setState({
        goalsPackParent: value
      });

    }

    render() {

      return(

        <React.Fragment>

        <section
          className={clases.appBlock}
          style={appBlock}
        >
          <div
            className={clases.appBlockTopMenu}
            style={appBlockTopMenuSpec}
          >
            <span style={appBlockTopMenuLogo}></span>
            celestaver
            <span className={clases.appBlockTopMenuSpan} style={appBlockTopMenuSpan}></span>
            <span className={clases.appBlockTopMenuSpanTwo} style={appBlockTopMenuSpanTwo}></span>
          </div>
          
          <GoalsWindow goalsTransport={this.setGoalsState}></GoalsWindow>
        
        </section>

        <section
          className={clases.appBlock}
          style={appBlockTarget}
        >
          <div
            className={clases.appBlockTopMenu}
            style={appBlockTargetTopMenu}
          >
            созданные цели 
            <i
              style={{
                marginLeft: '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
              onClick={this.testFunc}
              onMouseDown={() => {
                this.state.aboutGoals === 'подробно' 
                ? this.setState({ aboutGoals: 'кратко' })
                : this.setState({ aboutGoals: 'подробно' })
              }}
            >
              {this.state.aboutGoals}
            </i>
            <i
              style={{
                marginLeft: '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
              onClick={() => {
                this.setState({
                  showAddedGoals: !this.state.showAddedGoals
                });
              }}
            >
              цели на сайте
            </i>

            { this.state.showAddedGoals === true ? (

              <article style={appBlockMainGoalsWindowAdded}>

              { this.state.addedGoals !== null ? this.state.addedGoals.map(item => {

                if ( typeof(item) === 'string' ) { return(

                  <p
                    style={{
                      fontSize: '13px',
                      height: '22px',
                      lineHeight: '21px',
                      paddingLeft: '13px',
                      fontStyle: 'italic',
                      margin: '0'
                    }}
                  >
      
                    { item.split('**')[0] }
    
                  </p>

                ); }

              }) : null }

              </article>

            ) : null }  

          </div>
          
          <div
            style={appBlockMainGoalsWindowScroll}
          >  

          { this.state.goalsCodeComment === true ? (

          <React.Fragment>

          <code
            style={appBlockMainGoalsWindowScrollAdded}
            id="goalcode"
          >
            
            { `<script type="text/javascript" src="http://cq52508.tmweb.ru/celestaver/goals.js"/>
               <script>localStorage.setItem('cstrhash', '${this.state.exportHashLine}');let roundLocal=setInterval(()=>{let ls=localStorage.getItem('cstrhash');
               if(ls!==null&&ls!==''){fetch("http://cq52508.tmweb.ru/celestaver/get.php?data="+localStorage.getItem('cstrhash')).then(res => res.text()).then(data=>{let newData=JSON.parse(data);cstrGoalsMaker(newData);}); 
               clearInterval(roundLocal);}else{console.log('Вы не авторизованы');clearInterval(roundLocal);}},1000);<\/script>` }

          </code>

          <p style={goalsCodeComment}>Скопируйте этот код и разместите его на вашем сайте. Сделать это нужно один раз, при дальнейшей работе с сервисом просто публикуйте новые цели</p>

          <span 
            style={copyTextCode}
            onClick={() => {
              
              this.setState({
                goalsCodeComment: false
              });

            }}
          >
            ПРОДОЛЖИТЬ РАБОТУ
          </span>

          </React.Fragment>

          ) : null }

          { 0 === 0 ? this.state.goalsPackParent.map(function(item, i) {

            // console.log(item);

            return(
              <article
                style={appBlockMainGoalsWindowLine}
              >
                { (i + 1) % 2 === 0 ? (
                
                  <p 
                    style={{ 
                      marginBottom: '0px', 
                      marginTop: '-2px',
                      height: '36px',
                      lineHeight: '34px', 
                      width: '160px',
                      backgroundColor: 'rgb(76, 175, 80, 0.3)',
                      borderRadius: '20px',
                      textAlign: 'center',
                      marginLeft: '14px',
                      marginBottom: '12px'
                    }}
                  >
                    {item.split('**')[0]}
                  </p>
              
                ) : (

                  <p 
                    style={{ 
                      marginBottom: '0px',
                      marginTop: '0px',
                      height: 'auto',
                      lineHeight: '38px',
                      paddingLeft: '12px',
                      marginBottom: '14px',
                      borderTop: '1px solid rgb(224, 224, 224)'
                    }}
                  >
                    <span style={{ height: '0px' }}></span>
                    
                    { this.state.showGoal1 === true ? (

                      <article
                        style={{
                          display: 'block',
                          position: 'relative',
                          width: '100%',
                          height: 'auto',
                          minHeight: '30px',
                          fontStyle: 'italic',
                          marginLeft: '-12px',
                          marginTop: '0.5px'
                        }}  
                      >
                        <p 
                          style={{ 
                            width: '80%',
                            height: '36px',
                            lineHeight: '36px', 
                            backgroundColor: 'rgb(76, 175, 80, 0.3)',
                            paddingLeft: '12px',
                            'border-top-right-radius': '15px',
                            'border-bottom-right-radius': '15px',
                          }}
                        >
                          
                          {item.tagname}
                        
                        </p>
                        
                        { item.attr.map(attrs => {
                          
                          return(

                            <p 
                              style={{ 
                                height: '32px',
                                lineHeight: '30px', 
                                backgroundColor: 'rgb(224, 224, 224)',
                                margin: '0',
                                paddingLeft: '14px',
                                'border-top-left-radius': '15px',
                                'border-bottom-left-radius': '15px',
                                marginLeft: '14px',
                                marginBottom: '12px' 
                              }}
                            >
                              
                              {`${attrs.split("::")[0]} - ${attrs.split("::")[1]}`}
                            
                            </p>
                          
                          );

                        }) }
                        
                        { item.inner !== undefined ? (
                          
                          <p 
                            style={{ 
                              height: '32px',
                              lineHeight: '30px', 
                              backgroundColor: 'rgb(224, 224, 224)',
                              margin: '0',
                              paddingLeft: '14px',
                              'border-top-left-radius': '15px',
                              'border-bottom-left-radius': '15px',
                              marginLeft: '14px'
                            }}
                          >

                            {`Иннер - ${item.inner}`}
                          
                          </p>

                        ) : null }

                      </article>

                    ) : null }
                    
                  </p>

                ) }
                
              </article>
            );

          }, this) : null }

          </div>

          <div style={addButtonsGroup}>
            <span 
              style={
                this.state.authColor === true 
                ? addButtonsGroupPublic 
                : addButtonsGroupPublicError 
              }
              onClick={() => {

                let check = false;

                // console.log(JSON.stringify(this.state.goalsPackParent));
                
                localStorage.setItem('exportGoalData', JSON.stringify(this.state.goalsPackParent));

                if ( localStorage.getItem('cstrhash') == null || localStorage.getItem('cstrhash') == '' ) {

                  this.setState({
                    authButton: true,
                    publicButtonInner: 'AUTH ERROR',
                    authColor: false
                  });

                } else {

                  check = true;

                  // console.log(`${JSON.stringify(this.state.goalsPackParent)} - goalsPackParent`);

                  fetch(`http://cq52508.tmweb.ru/celestaver/add.php?data=${localStorage.getItem('cstrhash')}AND${JSON.stringify(this.state.goalsPackParent)}`)
                  .then(res => res.text())
                  .then(data => {
                    //
                  })

                  this.setState({
                    exportHashLine: localStorage.getItem('cstrhash'),
                    goalsCodeComment: true,
                    goalsPackParent: []
                  });

                  localStorage.setItem('clearState', 'true');

                }

                if ( check === true ) { 

                  setTimeout(() => {
                    
                    this.setState({
                      goalsPackParent: []
                    });

                  }, 200);

                }

              }}
            >
              
              { this.state.publicButtonInner }
            
            </span>

            { this.state.authButton === true ? (

            <span 
              style={addButtonsGroupPublic}
              onClick={() => {
                
                this.setState({
                  authShow: true
                });

              }}
            >
              МОЙ ЛОГИН
            </span>  

            ) : null }

          </div>

        </section>

        { this.state.authShow === true ? (

        <section
          className={clases.appBlock}
          style={appBlockAuth}
        >

          { this.state.popUpShow === true ? (

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
            className={clases.appBlockTopMenu}
            style={appBlockTargetTopMenu}
          >
            работа с учетной записью
          </div>

          { this.state.authCorrect === false ? (

          <React.Fragment>

          <div style={appBlockAuthForm}>
          
            <input 
              style={appBlockAuthFormTextInput}
              type="text"
              placeholder="create or write login*"
              onKeyUp={(e) => {
                this.setState({
                  login: e.target.value
                });
              }}
            />
            <input 
              style={appBlockAuthFormTextInput}
              type="text"
              placeholder="create or write password*"
              onKeyUp={(e) => {
                this.setState({
                  password: e.target.value
                });
              }}
            />
            
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop: '17px'
              }} 
            >
              <input
                style={{
                  display: 'block',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  cursor: 'pointer'
                }}
                type="checkbox"
                checked="false"
              />
              <span
                style={{
                  display: 'block',
                  fontSize: '13px',
                  marginTop: '1px',
                  marginLeft: '4px',
                  textDecoration: 'underline',
                  cursor: 'pointer'
                }}
              >
                Пользовательское соглашение
              </span>
            </div>

            <span 
              style={addButtonsGroupReg}
              onClick={() => {
                
                if (
                  this.state.login !== '' &&
                  this.state.password !== ''
                ) {

                let authData = `${this.state.login}::${this.state.password}`;
                fetch(`http://cq52508.tmweb.ru/celestaver/index.php?data=${authData}`)
                .then(res => res.text())
                .then(data => {
                
                  if ( data.indexOf('true') !== (-1) ) {

                    this.setState({
                      // authCorrect: true
                      authShow: false,
                      authButton: false,
                      publicButtonInner: 'ОПУБЛИКОВАТЬ',
                      authColor: true
                    });

                    const hashline = data.split('.')[1];
                    localStorage.setItem('cstrhash', hashline);

                  }

                })

                } else {

                  this.setState({
                    popUpShow: true,
                    popUpMessage: 'Не все поля формы регистрации заполнены. Проверьте оба поля, они должны быть заполнены в соответствии с правилами'
                  });

                }

              }}
            >
              ЗАРЕГИСТРИРОВАТЬСЯ
            </span>
            
            <span 
              style={addButtonsGroupAuth}
              onClick={() => {
                
                if (
                  this.state.login !== '' &&
                  this.state.password !== ''
                ) {

                  fetch(`http://cq52508.tmweb.ru/celestaver/auth.php?data=${this.state.login}$$${this.state.password}`)
                  .then(res => res.text())
                  .then(data => {
                    
                    console.log(data);

                    if ( data !== 'Неверные логин или пароль' ) {

                      localStorage.setItem('cstrhash', data);

                      this.setState({
                        // authCorrect: true
                        authShow: false,
                        authButton: false,
                        publicButtonInner: 'ОПУБЛИКОВАТЬ',
                        authColor: true
                      });

                    }

                  })

                }
              
              }}
            >
              АВТОРИЗОВАТЬСЯ
            </span>
            
          </div>

          </React.Fragment>          

          ) : null }

        </section>
        
        ) : null }

        </React.Fragment>

      );
    }
  }
  ReactDOM.render(
    <Celestaver />,
    document.getElementById('cstr')
  );