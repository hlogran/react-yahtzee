import React, { Component } from 'react';
import './styles.css'

class RuleRow extends Component {
  render() {
    const { score, name, doScore, description } = this.props;
    const disabled = Boolean(this.props.score);
    return (
      <tr className={"RuleRow RuleRow-" + (disabled ? "disabled" : "active")} onClick={disabled ? null : doScore}>
        <td className="RuleRow-name">{name}</td>
        <td className='RuleRow-score'>{disabled ? score : description}</td>
      </tr>
    )
  }
}

export default RuleRow;