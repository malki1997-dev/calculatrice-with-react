import React, { Component } from 'react'




export class Calcul extends Component {

constructor()
{
    super();
    this.state={res:'',
                res1:'',
                plus:0,
                moins:0,
                mult:1,
                divis:1,
                op:'',
                resultat:0

               }

     this.butt_0=this.butt_0.bind(this);
     this.butt_1=this.butt_1.bind(this);
     this.fg=this.fg.bind(this);

}

 butt_0()
{
    const x= document.getElementById('result').textContent;
    if(x!='0')
    { 
           this.setState(prevstate=>{return{res:prevstate.res+'0'}});
           console.log(this.state.res);
           document.getElementById('result').innerHTML=this.state.res;
    }
   
}

butt_1()
{
           
           this.setState(prevstate=>{return{res:prevstate.res+'1'}});
           console.log(this.state.res);
           document.getElementById('result').innerHTML=this.state.res;
    
}

butt_2()
{
           
           this.setState(prevstate=>{return{res:prevstate.res+'2'}});
           console.log(this.state.res);
           document.getElementById('result').innerHTML=this.state.res;
    
}

butt_3()
{
           
           this.setState(prevstate=>{return{res:prevstate.res+'3'}});
           console.log(this.state.res);
           document.getElementById('result').innerHTML=this.state.res;
    
}

butt_4()
{
           
           this.setState(prevstate=>{return{res:prevstate.res+'4'}});
           console.log(this.state.res);
           document.getElementById('result').innerHTML=this.state.res;
    
}

butt_5()
{
           
           this.setState(prevstate=>{return{res:prevstate.res+'5'}});
           console.log(this.state.res);
           document.getElementById('result').innerHTML=this.state.res;
    
}

butt_6()
{
           
           this.setState(prevstate=>{return{res:prevstate.res+'6'}});
           console.log(this.state.res);
           document.getElementById('result').innerHTML=this.state.res;
    
}

butt_7()
{
           
           this.setState(prevstate=>{return{res:prevstate.res+'7'}});
           console.log(this.state.res);
           document.getElementById('result').innerHTML=this.state.res;
    
}

butt_8()
{
           
           this.setState(prevstate=>{return{res:prevstate.res+'8'}});
           console.log(this.state.res);
           document.getElementById('result').innerHTML=this.state.res;
    
}
butt_9()
{
           
           this.setState(prevstate=>{return{res:prevstate.res+'9'}});
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
fg()
{
    //this.setState({res1:'123'});
    //console.log(this.state.res);
    //alert('rs '+this.state.res);
    //alert('rs1 '+this.state.res1);
  var h=parseInt(this.state.res)+ parseInt(this.state.res1);
    document.getElementById('result').innerHTML=h;
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
       <button id="Normal_btn">/</button>
       <button id="Normal_btn">*</button>
     </div>

    <div className="buttons">
        <button id="Normal_btn">7</button>
        <button id="Normal_btn">8</button>
        <button id="Normal_btn">9</button>
        <button id="Normal_btn">-</button>
    </div>

    <div className="buttons">
       <button id="Normal_btn">4</button>
       <button id="Normal_btn">5</button>
       <button id="Normal_btn">6</button>
       <button id="Normal_btn">+</button>
    </div>

    <div className="buttons">
        <button id="Normal_btn" onClick={this.butt_1}>1</button>
        <button id="Normal_btn">2</button> 
        <button id="Normal_btn">3</button>
        <button id="Normal_btn">.</button>
    </div>

    <div className="buttons">
       <button id="Normal_btn" onClick={this.butt_0}>0</button>
       <button id="Normal_btn"  onClick={this.fg}>00</button>
       <button id="equalTo">=</button> 
     </div>

</div>
            </div>
        )
    }
}

export default Calcul
