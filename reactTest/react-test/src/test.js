import React, {Component} from 'react';
import './test.css';

class ReactTest extends Component {
    constructor(props){
        super(props);
        this.state={
         id0: false,
         id1: false,
         id2: false,
         id3: false,
         id4: false
        }
    }

    handleClick0 = () => {
        const {id0} = this.state
        if(id0 === false){
            this.setState({
                id0: true,
                id1:false,
                id2:false,
                id3:false,
                id4:false
            })
    }
}

    handleClick1 = () => {
        const {id1} = this.state
        if(id1 === false){
            this.setState({
                id1:true,
                id0:false,
                id2:false,
                id3:false,
                id4:false
            })
    }
}

    
    handleClick2 = () => {
        const {id2} = this.state
        if(id2 === false){
            this.setState({
                id2:true,
                id0:false,
                id1:false,
                id3:false,
                id4:false
            })
    }
}   

handleClick3 = () => {
    const {id3} = this.state
    if(id3 === false ) {
        this.setState ({
            id3:true,
            id0:false,
            id1:false,
            id2:false,
            id4:false
        })
    } 
}

handleClick4 = () => {
    const {id4} = this.state
    if(id4 === false ) {
        this.setState ({
            id4: true,
            id0: false,
            id1:false,
            id2:false,
            id3:false
        })
    } 
}

  render(){
    console.log("this.state", this.state)
    let {id0, id1, id2, id3, id4} = this.state
  return (
    <div className="container">
        <div id="apps" className="boxes" tabIndex="0" value={id0} onClick={()=>this.handleClick0()}>
            <span>Apps</span>
            {id0 === true ? <span className="arrow" > > </span> : null}
        </div>
        <div id="games" className="boxes" tabIndex="1"  value={id1} onClick={()=>this.handleClick1()}>
            <span>Games</span>
            {id1 === true ? <span className="arrow"> > </span> : null}
        </div>
        <div id="movies" className="boxes" tabIndex="2" value={id2} onClick={()=>this.handleClick2()}>
            <span>Movies</span>
            {id2 === true ? <span className="arrow"> > </span> : null}
        </div>
        <div id="books" className="boxes" tabIndex="3" value={id3} onClick={()=>this.handleClick3()}>
            <span>Books</span>
            {id3 === true ? <span className="arrow"> > </span> : null}
        </div>
        <div id="newspaper" className="boxes" tabIndex="4" value={id4} onClick={()=>this.handleClick4()}>
            <span>Newspapers</span>
            {id4 === true ? <span className="arrow"> > </span> : null}
        </div>
    </div>
  )
}
}
export default ReactTest;