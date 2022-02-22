import React from 'react';
import './test1.css';

class Test1 extends React.Component {
    constructor(props){
        console.clear();
        console.log('constructor');
        console.log(props);
        super();
        this.state = {
            s1 : 0
        }
    }

    buttonHandler = () => {
        let val = this.state.s1;
        val++;
        this.setState({s1 : val});
    }

    static getDerivedStateFromProps(props, state){
        console.log('get derived state')
        return null;/* (
            {s1 : props.arg}
        )         */
    }

    componentDidMount(){
        console.log('component did mount');
    }

    componentDidUpdate() {
        console.log('component did update'); 
    }

 
    render () {
        console.log('render1');
            return(
                <>
                {console.log('render2')}
                <div>
                    Class component
                </div>
                <div>
                    <button className = 'test' onClick = {this.buttonHandler}>Press</button>
                </div>
                <div className = "counter">
                    {this.state.s1}

                </div>
                </>
            )
    }
}

export default Test1;