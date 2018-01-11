import React from 'react'
import { PieChart } from 'react-easy-chart'
import ToolTip from '../../components/ToolTip'

const initialWidth = window.innerWidth > 0 ? window.innerWidth : 500

class SkillGraph extends React.Component {
  constructor (props) {
    super(props)

    this.mouseOverHandler = this.mouseOverHandler.bind(this)
    this.mouseOutHandler = this.mouseOutHandler.bind(this)
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this)
    this.state = {
      showToolTip: false,
      windowWidth: initialWidth - 100,
      componentWidth: 300
    }

    this.styles = {
      '.pie-chart-lines': {
        stroke: 'rgba(0, 0, 0, 1)',
        strokeWidth: 1
      },
      '.pie-chart-text': {
        fontSize: '10px',
        fill: 'white'
      }
    }
  }

  mouseOverHandler (d, e) {
    this.setState({
      showToolTip: true,
      top: e.y,
      left: e.x,
      y: d.y,
      x: d.x,
      value: d.value,
      key: d.data.key})
  }

  mouseMoveHandler (e) {
    if (this.state.showToolTip) {
      this.setState({top: `${e.y - 10}px`, left: `${e.x + 10}px`})
    }
  }

  mouseOutHandler () {
    this.setState({showToolTip: false})
  }

  createTooltip () {
    if (this.state.showToolTip) {
      return (
        <ToolTip
          top={this.state.top}
          left={this.state.left}>
          The value of {this.state.key} is {this.state.value}
        </ToolTip>
      )
    }
    return false
  }
  render () {
    return (
      <div className='skillGraph'>
        {this.createTooltip()}
        <h1> Overall Skill Set </h1>
        <PieChart
          labels
          styles={{
            '.pie-chart-label': {
              fill: '#B72346',
              fontSize: '.9em'
            },
            '.pie-chart-label:hover': {
              fontSize: '1.15em'
            }
          }}
          data={[
            {key: 'Java', value: 125, color: '#aaac84'},
            {key: 'Java EE', value: 125, color: '#aaac84'},
            {key: 'ExtJS', value: 100, color: '#dce7c5'},
            {key: 'ReactJS', value: 50, color: '#dce7c5'},
            {key: 'Angular', value: 25, color: '#dce7c5'},
            {key: 'Other JS', value: 25, color: '#dce7c5'},
            {key: 'C/C++', value: 25, color: '#A7CAB9'},
            {key: 'Git/SVN', value: 30, color: '#e3a51a'},
            {key: 'Grails', value: 25},
            {key: 'REST', value: 25},
            {key: 'HTML/CSS', value: 100, color: '#dce7c5'}
          ]}
          mouseOverHandler={this.mouseOverHandler}
          mouseOutHandler={this.mouseOutHandler}
          mouseMoveHandler={this.mouseMoveHandler}
        />
      </div>
    )
  }
}

export default SkillGraph
