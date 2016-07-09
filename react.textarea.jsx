import React from 'react';

class ReactTextArea extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			styles:{
				overflow: 'hidden',
				padding: 0,
				outline: 'none',
				resize: 'none',
			}
		}
	}

	componentDidMount(){
		if(this.props.readOnly == true){
			this.state.readOnlyStyle ={
				cursor:'default'
			}
		}
		this.updateHeigt();
	}

	updateHeigt(){

		var element = this.refs.ta;

		this.state.actualHeight = {
			height: "auto"
		};

		this.forceUpdate();

		this.state.actualHeight = {
			height: element.scrollHeight
		};
		this.forceUpdate();
	}

	onChange(e){
		this.updateHeigt();
	}

	onKeyPress(e){
		setTimeout(()=>
			this.updateHeigt()
		,0);
	}

	render(){
		return <textarea
				ref="ta"
				className="react-textArea"
				style={Object.assign({}, this.state.styles, this.state.actualHeight, this.state.readOnlyStyle)}
				cols={this.props.cols}
				defaultValue = {this.props.defaultValue || ""}
				rows={this.props.rows}
				onChange={this.onChange.bind(this)}
				onKeyDown={this.onKeyPress.bind(this)} readOnly={this.props.readOnly ? 'readOnly' : ''}>
			</textarea>

	}
}
ReactTextArea.defaultProps = {rows:1, cols:30};

export default ReactTextArea;
