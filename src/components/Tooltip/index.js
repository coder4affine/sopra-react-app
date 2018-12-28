/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

class Tooltip extends Component {
    state = {
        active: false
    }

    constructor(props) {
        super(props);
        this.spanRef = React.createRef();
        const id = 'tooltip';
        this.domNode = document.querySelector(`#${id}`);
        if(!this.domNode) {
        this.domNode = document.createElement("div");
        this.domNode.setAttribute("id", id);
        document.body.appendChild(this.domNode);
        }
    }

    showTooltip = () => {
        this.setState({active: true});
    }

    hideTooltip = () => {
        this.setState({active: false});
    }

    renderToolTip = () => {
        if (!this.state.active) return null;
        const { top, left, width } = this.spanRef.current.getBoundingClientRect();
        const tooltip = {
            position: "absolute",
            bottom: window.innerHeight - top + 8 - window.scrollY,
            left: left + width / 2 + window.scrollX
          };
          return ReactDOM.createPortal(<div style={tooltip}>
            <div id="tooltipDiv"
          role="tooltip"
          style={{
            position: "relative",
            left: "-50%",
            padding: "8px 16px",
            borderRadius: 4,
            background: "#424242",
            color: "white"
          }}>
              {this.props.text}
          </div>
        </div>, this.domNode)
    }
    
  render() {
    const source = <span 
    ref={this.spanRef}
    tabIndex="0"
        role="button"
        key="0"
        area-describedby="tooltip-content"
        onMouseEnter={this.showTooltip}
        onMouseLeave={this.hideTooltip}
        onFocus={this.showTooltip}
        onBlur={this.hideTooltip}
        >
        {this.props.children}
    </span>
    return  [source, this.renderToolTip()];
  }
}

Tooltip.propTypes = {};

export default Tooltip;
