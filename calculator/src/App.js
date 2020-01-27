import React from 'react';

class App extends React.Component{
	constructor() {
		super()
		this.state= {
			count:'0'
		}
	}
    
    Handle=(digit)=>{
       const{count}=this.state
       this.setState({
     	  count: count==='0'?String(digit):count+digit
       })
	}
      
    addDot=()=>{
		const{count}=this.state
		if (count.indexOf('.')===-1) {
			this.setstate({
				count:count+'.'
			})
		}
	}

  	reset=()=>{
		const{count}=this.state
		this.setState({
			count:'0'
		})
	}

	Calculator=()=>{
		const{count}=this.state
		this.setState({
			count:eval(count)
		})
	}

	render(){
		return(
			<div>
			    <div class="flex-container">
			    <input type="text" value={this.state.count}/>
			    </div>

                < div class="flex-container">
                <button onClick={()=>this.Handle(1)}>1</button>
				<button onClick={()=>this.Handle(2)}>2</button>
				<button onClick={()=>this.Handle(3)}>3</button>
				</div>

				<div class="flex-container">
                <button onClick={()=>this.Handle(4)}>4</button>
				<button onClick={()=>this.Handle(5)}>5</button>
				<button onClick={()=>this.Handle(6)}>6</button>
				</div>

			    <div class="flex-container">
                <button onClick={()=>this.Handle(7)}>7</button>
				<button onClick={()=>this.Handle(8)}>8</button>
				<button onClick={()=>this.Handle(9)}>9</button>
				</div>

				<div class="flex-container">
				<button onClick={()=>this.Handle('+')}>+</button>
				<button onClick={()=>this.Handle(0)}>0</button>
				<button onClick={()=>this.Handle('-')}>-</button>
				</div>

				<div class="flex-container">
				<button onClick={()=>this.Handle('*')}>*</button>
				<button onClick={()=>this.Handle('/')}>/</button>
				<button onClick={()=>this.reset()}>c</button>
				</div>

				<div class="flex-container">
				<button onClick={()=>this.addDot()}>.</button>
				<button onClick={()=>this.Calculator()}>=</button>
				</div>
	        </div>
		);
     }

}
export default App
