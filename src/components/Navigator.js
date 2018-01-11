import React from 'react'
import PropTypes from 'prop-types'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import HomeIcon from 'material-ui-icons/Home'
import InfoIcon from 'material-ui-icons/Info'
import ExperienceIcon from 'material-ui-icons/NextWeek'
import ExtensionIcon from 'material-ui-icons/Extension'
import SchoolIcon from 'material-ui-icons/School'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { navigationAction } from 'actions/navigationActions'

const mapStateToProps = state => ({
  state: state.handleChange
})

const mapDispatchToProps = dispatch => (bindActionCreators({
  navigationAction
}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
class Navigator extends React.Component {
  static propTypes = {
    state: PropTypes.number,
    navigationAction: PropTypes.func
  }

  action = (selectedSection) => {
    this.props.navigationAction(selectedSection)
  }

  render () {
    return (
      <BottomNavigation selectedIndex={this.props.state} >
        <BottomNavigationItem label='Home' value='title' icon={<HomeIcon />} onClick={() => this.action('title')} />
        <BottomNavigationItem label='Summary' value='summary' icon={<InfoIcon />} onClick={() => this.action('summary')} />
        <BottomNavigationItem label='Experience' value='timeline' icon={<ExperienceIcon />} onClick={() => this.action('timeline')} />
        <BottomNavigationItem label='Skills' value='skills' icon={<ExtensionIcon />} onClick={() => this.action('skills')} />
        <BottomNavigationItem label='Education' value='education' icon={<SchoolIcon />} onClick={() => this.action('education')} />
      </BottomNavigation>
    )
  }
}

export default Navigator
