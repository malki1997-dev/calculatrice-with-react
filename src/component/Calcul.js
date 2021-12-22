import React, { Component } from 'react'




export class Calcul extends Component {

constructor()
{
    super();
    this.state={res:'',
                res1:'',
                op:'',
                resultat:0

               }

     this.butt_0=this.butt_0.bind(this);
     this.butt_1=this.butt_1.bind(this);
     this.butt_2=this.butt_2.bind(this);
     this.butt_3=this.butt_3.bind(this);
     this.butt_4=this.butt_4.bind(this);
     this.butt_5=this.butt_5.bind(this);
     this.butt_6=this.butt_6.bind(this);
     this.butt_7=this.butt_7.bind(this);
     this.butt_8=this.butt_8.bind(this);
     this.butt_9=this.butt_9.bind(this);
     this.butt_plus=this.butt_plus.bind(this);
     this.butt_moins=this.butt_moins.bind(this);
     this.butt_mult=this.butt_mult.bind(this);
     this.butt_divis=this.butt_divis.bind(this);
     this.butt_egale=this.butt_egale.bind(this);

}

async butt_0()
{
   
   const x= document.getElementById('result').textContent;
    if(x!='0')
    { 
         await   this.setState(prevstate=>{return{res:prevstate.res+'0'}});
           console.log(this.state.res);
           document.getElementById('result').innerHTML=this.state.res;
    }
   
}

async butt_1() 
{
           
         await  this.setState(prevstate=>{return{res:prevstate.res+'1'}});
           console.log(this.state.res);
           document.getElementById('result').innerHTML=this.state.res;
    
}

async butt_2()
{
           
    await   this.setState(prevstate=>{return{res:prevstate.res+'2'}});
           console.log(this.state.res);
           document.getElementById('result').innerHTML=this.state.res;
    
}

async butt_3()
{
           
    await  this.setState(prevstate=>{return{res:prevstate.res+'3'}});
           console.log(this.state.res);
           document.getElementById('result').innerHTML=this.state.res;
    
}

async butt_4()
{
           
    await   this.setState(prevstate=>{return{res:prevstate.res+'4'}});
           console.log(this.state.res);
           document.getElementById('result').innerHTML=this.state.res;
    
}

async butt_5()
{
           
    await   this.setState(prevstate=>{return{res:prevstate.res+'5'}});
           console.log(this.state.res);
           document.getElementById('result').innerHTML=this.state.res;
    
}

async butt_6()
{
           
    await   this.setState(prevstate=>{return{res:prevstate.res+'6'}});
           console.log(this.state.res);
           document.getElementById('result').innerHTML=this.state.res;
    
}

async butt_7()
{
           
    await  this.setState(prevstate=>{return{res:prevstate.res+'7'}});
           console.log(this.state.res);
           document.getElementById('result').innerHTML=this.state.res;
    
}

async butt_8()
{
           
    await   this.setState(prevstate=>{return{res:prevstate.res+'8'}});
           console.log(this.state.res);
           document.getElementById('result').innerHTML=this.state.res;
    
}
async butt_9()
{
           
    await   this.setState(prevstate=>{return{res:prevstate.res+'9'}});
           console.log(this.state.res);
           document.getElementById('result').innerHTML=this.state.res;
    
}

butt_plus()
{
    document.getElementById('result').innerHTML='';
    this.setState({res1:this.state.res});
    this.setState({op:'plus'});
    this.setState({res:''});
}

butt_moins()
{
    document.getElementById('result').innerHTML='';
    this.setState({res1:this.state.res});
    this.setState({op:'moins'});
    this.setState({res:''});
}

butt_mult()
{           
    document.getElementById('result').innerHTML='';
    this.setState({res1:this.state.res});
    this.setState({op:'mult'});
    this.setState({res:''});
}

butt_divis()
{
    document.getElementById('result').innerHTML='';
    this.setState({res1:this.state.res});
    this.setState({op:'divis'});
    this.setState({res:''});
}

butt_egale()
{
    //****************************** PLUS **************************************/
           if(this.state.op=='plus')
              {
        var h=parseInt(this.state.res)+ parseInt(this.state.res1);
        document.getElementById('result').innerHTML=h;
              }

   //****************************** MOINS **************************************/
              if(this.state.op=='moins')
              {
        var h=parseInt(this.state.res1)- parseInt(this.state.res);
        document.getElementById('result').innerHTML=h;
              }
                  
    //****************************** MULTI **************************************/
              if(this.state.op=='mult')
              {
        var h=parseInt(this.state.res1)* parseInt(this.state.res);
        document.getElementById('result').innerHTML=h;
              }

    //****************************** DIVIS **************************************/
              if(this.state.op=='divis')
              {
                  if(this.state.res!=0)
                  {
        var h=parseInt(this.state.res1)/ parseInt(this.state.res);
        document.getElementById('result').innerHTML=h;
                  }
                  else
                  {
                    document.getElementById('result').innerHTML="imp divi sur 0!";
                    document.getElementById('result').style.color='red'
                  }
              }
            
  
              this.setState({res:''});

}


    render() {
        return (
            <div>
                 <h1>--------CALCULATOR--------</h1><br />
      <div className="main">
    <div className="display"> <button className="dark_mode_btn"><i className="fa fa-moon-o" aria-hidden="true"></i></button>
        <p id="history"><i className="fa fa-history" aria-hidden="true"></i>&nbsp;History</p>
        <h2 id="result"></h2>
    </div>

    <div className="buttons">
       <button id="clear">C</button>
       <button id="delete_single_num"><i className="fa fa-scissors" aria-hidden="true"></i></button>
       <button id="Normal_btn" onClick={this.butt_divis}>/</button>
       <button id="Normal_btn" onClick={this.butt_mult}>*</button>
     </div>

    <div className="buttons">
        <button id="Normal_btn" onClick={this.butt_7}>7</button>
        <button id="Normal_btn" onClick={this.butt_8}>8</button>
        <button id="Normal_btn" onClick={this.butt_9}>9</button>
        <button id="Normal_btn" onClick={this.butt_moins}>-</button>
    </div>

    <div className="buttons">
       <button id="Normal_btn" onClick={this.butt_4}>4</button>
       <button id="Normal_btn" onClick={this.butt_5}>5</button>
       <button id="Normal_btn" onClick={this.butt_6}>6</button>
       <button id="Normal_btn" onClick={this.butt_plus}>+</button>
    </div>

    <div className="buttons">
        <button id="Normal_btn" onClick={this.butt_1}>1</button>
        <button id="Normal_btn" onClick={this.butt_2}>2</button> 
        <button id="Normal_btn" onClick={this.butt_3}>3</button>
        <button id="Normal_btn">.</button>
    </div>

    <div className="buttons">
       <button id="Normal_btn" onClick={this.butt_0}>0</button>
       <button id="Normal_btn"  >00</button>
       <button id="equalTo" onClick={this.butt_egale}>=</button> 
     </div>

</div>
            </div>
        )
    }
}

export default Calcul
