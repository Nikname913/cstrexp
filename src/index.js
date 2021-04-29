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

        let tb = {
          top: '40px',
          left: '40px',
          width: '200px',
          height: '80px',
          borderRadius: '5px',
          display: 'none'
        }

        let targetBorder = document.createElement('div');
        targetBorder.id = 'target-border';
        
        targetBorder.style.cssText = `
          display: ${tb.display};
          position: absolute;
          width: ${tb.width};
          height: ${tb.height};
          border: 6px solid rgb(76, 175, 80);
          z-index: 100;
          top: ${tb.top};
          left: ${tb.left};
          border-radius: ${tb.borderRadius};
          box-sizing: border-box;
          pointer-events: none;
        `;

        document.body.appendChild(targetBorder); 

        let targetBorderInfo = document.createElement('p');
        targetBorderInfo.innerHTML = 'Выбран элемент, перейдите в форму слева для продолжения';

        targetBorderInfo.style.cssText = `
          font-family: 'Roboto', sans-serif;
          font-weight: 200;
          font-size: 13px;
          display: block;
          position: absolute;
          width: 180px;
          height: auto;
          line-height: 18px;
          color: white;
          background-color: rgb(76, 175, 80);
          left: 50%;
          margin-left: -90px;
          top: 100%;
          box-sizing: border-box;
          padding: 10px 13px;
          padding-bottom: 11px;
          border-radius: 3.5px;
        `;

        targetBorder.appendChild(targetBorderInfo);

        document.oncontextmenu = () => false;
        let DOM = document.body.querySelectorAll('*');
        for ( let i = 0; i < DOM.length; i++ ) {
          DOM[i].oncontextmenu = (e) => {
            let domItem = {}
            let itemAttr = [...e.target.attributes];
            let itemArrItem = [];
            let coords = {}

            coords.top = e.target.getBoundingClientRect().top;
            coords.bottom = e.target.getBoundingClientRect().bottom;
            coords.left = e.target.getBoundingClientRect().left;
            coords.right = e.target.getBoundingClientRect().right;
            coords.height = e.target.offsetHeight;
            coords.width = e.target.offsetWidth;
            coords.radius = getComputedStyle(e.target).borderRadius;

            tb.left = coords.left + 'px';
            tb.top = coords.top + 'px';
            tb.height = coords.height;
            tb.width = coords.width;
            tb.borderRadius = coords.radius;

            if (

              e.target.tagName === 'SPAN' ||
              e.target.tagName === 'BUTTON' ||
              e.target.tagName === 'INPUT' ||
              e.target.tagName === 'DIV' ||
              e.target.tagName === 'FORM' ||
              e.target.tagName === 'TEXTAREA' ||
              e.target.tagName === 'A'
            
            ) {

              tb.display = 'block';

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

            } else { 

              tb.display = 'none';

             }

            targetBorder.style.cssText = `
              display: ${tb.display};
              position: absolute;
              width: ${tb.width}px;
              height: ${tb.height}px;
              border: 6px solid rgb(76, 175, 80);
              z-index: 100;
              top: ${tb.top};
              left: ${tb.left};
              border-radius: ${tb.borderRadius};
              box-sizing: border-box;
              pointer-events: none;
            `;
          
          }
        }

      }
    })
  }

  outerPart();