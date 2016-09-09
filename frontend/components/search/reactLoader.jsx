 "use strict";

var reactLoader = React.createClass({
    
      displayName:'ReactLoader',
      
      getInitialState: function() {
       return   {
            pos:'fixed',// Default Position
            top:'0px',  // Default Top value
            left:'0px', // Default Left value
            width:'100%', // Default width 
            height:'100%', // Default Height
            zIndex: '999',  // Default zIndex 
        }
      },
      getDefaultProps: function() {
        return {
          bgColor: '#2ecc71', // Default background color
          spinner: 1
        };
      },
    
      spinner: function (spinnerType,style) {
      
        switch(spinnerType){
          case 1:
              return <div className="fl spinner1" style={style}>
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                      </div>;
            break;
          case 2:
              return <div className="fl spinner2" style={style}>
                        <div className="spinner-container container1">
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                            <div className="circle3"></div>
                            <div className="circle4"></div>
                          </div>
                          <div className="spinner-container container2">
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                            <div className="circle3"></div>
                            <div className="circle4"></div>
                            </div>
                          <div className="spinner-container container3">
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                            <div className="circle3"></div>
                            <div className="circle4"></div>
                          </div>
                        </div>;
            break;
          case 3:
              return <div className="fl spinner3" style={style}>
                        <div className="dot1"></div>
                        <div className="dot2"></div>
                      </div>
            break;
          case 4:
              return <div className="fl spinner4" style={style}></div>
            break;
          case 5:
              return  <div className="fl spinner5" style={style}>
                        <div className="cube1"></div>
                        <div className="cube2"></div>
                      </div>
            break;
          case 6:
              return <div className="fl spinner6" style={style}>
                        <div className="rect1"></div>
                        <div className="rect2"></div>
                        <div className="rect3"></div>
                        <div className="rect4"></div>
                        <div className="rect5"></div>
                      </div>; 
            break;
          case 7:
            return <div className="fl spinner7" style={style}>
                      <div className="circ1"></div>
                      <div className="circ2"></div>
                      <div className="circ3"></div>
                      <div className="circ4"></div>
                    </div>
            break;
        }
      
      },
      render: function () {
      
         var initStyles = {
               'position':this.state.pos,
                  'width':this.state.width,
                 'height':this.state.height,
                    'top':this.state.top,
                   'left':this.state.left,
        'backgroundColor':this.props.bgColor,
                 'zIndex':this.state.zIndex
               };
         
           var winW = window.innerWidth;
           var winH = window.innerHeight;
   
           var spinnerW = 50;
           var spinnerH = 50;
           
           return <div style={initStyles}>
                       {this.spinner(this.props.spinner,{ 'position':'absolute',
                                                              'left':(winW/2)-(spinnerW/2),
                                                               'top':(winH/2)-(spinnerH/2)
                                                          })}
                 </div>;
         }
         
    });
  }