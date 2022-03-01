import React, { Component } from "react"

class Back extends Component{
    render(){
        return (
            <>
            <div className="feedback-return">
                <div className="feed-head">
                    <h1>FeedBack Heading</h1>
                </div>
                <br /><br />

                <div className="feedBack-block">
                 {this.props.feedback.map((item,index)=>{
                     return (
                         <div className="result-values" >
                        Name:{item.name} || Dpt:{item.dept} || Rating :{item.rating}
                         </div>
                     )
                 })}
                </div>
                <div>
                <button onClick={this.props.Togglefun} className="btn-back">Click to go Back</button>
                </div>
            </div>
            </>
        )
    }
}
export default Back