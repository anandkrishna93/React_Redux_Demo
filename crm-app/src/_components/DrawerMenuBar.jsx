import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import Collapse from '@material-ui/core/Collapse';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Modal from '@material-ui/core/Modal';
import Icon from '@material-ui/core/Icon';
import menuListItems from '../_json/drawer-menu.json';

const styles = {
  list: {
    width: 250,
  },
  links: {
    textDecoration:'none',
  },
  menuHeader: {
    paddingLeft: '30px'
  }
};

class DrawerMenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
      helpModalStatus: false,
      activeMenuStatus: ''
    }
  }

  handleClick( item, e ) {
    e.stopPropagation();
    this.setState( prevState => ( 
      { [ item.name ]: !prevState[ item.name ] } 
    ) )
  }

  handleActiveMenu( item ) {
    this.setState({ activeMenuStatus: item })
  }

  toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState(state => ({ left: open }));
  };

  handleOpenModal = () => {
    this.setState({ helpModalStatus: true })
  };

  handleCloseModal = () => {
    this.setState({ helpModalStatus: false })
  };
  
  handler( children ) {
    const { classes } = this.props
    const { state } = this
    
    return children.map( ( subOption ) => {
      if ( !subOption.subMenus ) {
        return (
          <div key={ subOption._id }>
            <ListItem button component={Link} to={ subOption.url } style={{ paddingLeft: subOption.padding}} 
               onClick={ (e) => this.handleActiveMenu( subOption.name ) } className={subOption.name === this.state.activeMenuStatus ? 'activeMenu' : null}>
              <ListItemIcon className="listItemIconStyle"><Icon>chevron_right</Icon></ListItemIcon>

              <ListItemText inset primary={ subOption.name} />
            </ListItem>
          </div>
        )
      }

      return (
        <div key={ subOption._id }>
          <ListItem button onClick={ (e) => this.handleClick( subOption, e ) } style={{ paddingLeft: subOption.padding}}>
            <ListItemIcon className="listItemIconStyle">{state[ subOption.name ] ? <ExpandMore /> : <Icon>chevron_right</Icon>}</ListItemIcon>
            
            <ListItemText inset primary={ subOption.name } />
          </ListItem>
          
          <Collapse in={ state[ subOption.name ] } timeout="auto" unmountOnExit>
            { this.handler( subOption.subMenus ) }
            {
              subOption.subMenus.subMenus ? this.handler( subOption.subMenus.subMenus ) : null
            }
          </Collapse>
        </div>
      )
    } )
  }


  render() {
    const { classes } = this.props
    
    return (
      <div>
        <div className="mdl-layout__drawer-button" onClick={this.toggleDrawer('left', true)}>
          <i className="material-icons"></i>
        </div>

        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div className="material_drawer_style" role="presentation" onClick={this.toggleDrawer('left', false)} onKeyDown={this.toggleDrawer('left', false)}>

            <span className="mdl-layout-title">
              <span>Menu</span> <i className="material-icons bar-icon"></i>
            </span>
            
            <List>
              { this.handler( menuListItems ) }

              <div className="helpMenu_style">
                <ListItem button onClick={(e) => this.handleOpenModal()}>
                  <ListItemIcon className="listItemIconStyle"><Icon>help</Icon></ListItemIcon>

                  <ListItemText inset primary="Help" />
                </ListItem>
              </div>
            </List>
          </div>
        </Drawer>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.helpModalStatus}
        >
        <div className="custom_modal_style modal_xl" style={{background: '#ccc'}}>
          <a onClick={(e) => this.handleCloseModal()} className="modal_close">
            <Icon>close</Icon>
          </a>

          <div className="help_content">
              <h1>Help</h1>
          </div>
        </div>
      </Modal>
      </div>
    );
  }
};

export default withStyles(styles)(DrawerMenuBar)