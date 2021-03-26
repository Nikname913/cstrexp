  let roundLocal=setInterval(()=>{let ls=localStorage.getItem('cstrhash');
  if(ls!==null&&ls!==''){fetch("http://cq52508.tmweb.ru/celestaver/get.php?data="+localStorage.getItem('cstrhash')).then(res => res.text()).then(data=>{let newData=JSON.parse(data);cstrGoalsMaker(newData);}); 
  clearInterval(roundLocal);}else{console.log('Вы не авторизованы');clearInterval(roundLocal);}},1000);

  let outerPart = () => {
    let pastLogic = new Promise((res, err) => {
      
      let start = setInterval(() => {
        let starting = localStorage.getItem('cstr');
        if ( starting == 'ready' ) {
          clearInterval(start);
          res('ready');
        }
        else {
          //
        }
      }, 40);

    });

    pastLogic
    .then(answer => {
      const answ = answer;
      if ( answ == 'ready' ) { 

        document.oncontextmenu = () => false;
        let DOM = document.body.querySelectorAll('*');
        for ( let i = 0; i < DOM.length; i++ ) {
          DOM[i].oncontextmenu = (e) => {
            let domItem = {}
            let itemAttr = [...e.target.attributes];
            let itemArrItem = [];
            itemAttr.forEach(item => {
              if ( item.name != 'style' ) {
                itemArrItem.push(`${item.name}::${item.value}`);
              }
            });
            domItem.attr = itemArrItem;
            domItem.tagname = e.target.tagName;

            if ( e.target.children.length == 0 && e.target.innerHTML != '' ) {
              domItem.inner = e.target.innerHTML.toLowerCase();
            }

            if ( /* localStorage.getItem('nodeData') == 'null' */ true ) {
              localStorage.setItem('nodeData', `${JSON.stringify(domItem)}`);
            }
            else {
              let locNodeData = localStorage.getItem('nodeData');
              localStorage.getItem('nodeData').indexOf(JSON.stringify(domItem)) == (-1) ? localStorage.setItem('nodeData', `${locNodeData}${JSON.stringify(domItem)}AND`) : null;
            }
          
          }
        }

      }
    })
  }

  outerPart();