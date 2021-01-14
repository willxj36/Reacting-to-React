import React, {Component} from 'react';

// let App = (props) => <h1>{props.title}</h1>;

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ' and then some words n stuff',
            input: '',
            hasLoaded: false
        }
        this.handleType = this.handleType.bind(this);
    }

    handleType(value) {
        this.setState({
            input: value
        })
    }

    handleBtnClick() {
        if (this.state.hasLoaded) {
            this.setState({
                hasLoaded: false
            })
        } else {
            this.setState({
                hasLoaded: true
            })
        }
    }

    componentDidMount() {
        this.setState({
            hasLoaded: true
        })
    }

    render() {
        if(this.state.hasLoaded) {
            return(
                <React.Fragment>
                    <h1>{this.props.title} {this.state.text}</h1>
                    <input onChange={(event) => this.handleType(event.target.value)}
                    type="text" 
                    placeholder={this.state.placeholder}
                    value={this.state.input} />
                    <button onClick={() => this.handleBtnClick()}>Click me</button>
                </React.Fragment>
            )
        } else {
            return(
                <React.Fragment>
                    <h1>Loading...</h1>
                    <button onClick={() => this.handleBtnClick()}>Click me</button>
                </React.Fragment>
            )
        }
    }
}   

export default App