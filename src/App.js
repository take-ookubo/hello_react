import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar,RaisedButton} from 'material-ui';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Destination extends Component {
  render () {
    return(
      <div>{this.props.myFunc()}目的地入力</div>
    );
  }
  hiddenParent(parent) {
    //  親要素を非表示にする
    // parent.hidden();
  }
}

Destination.propTypes = {
  myFunc: PropTypes.func,
};

class Schedule extends Component {
  render () {
    return(
      <div>日程入力</div>
    );
  }
}

class GuestNumber extends Component {
  render () {
    return(
      <div>人数入力</div>
    );
  }
}

class App extends Component {
  constructor () {
    super();
    const country = '韓国';
    const city = 'ソウル';
    const number = '大人1名';
    this.state = {
      destination: `目的地(${country},${city})`,
      schedule: `日程(5/1〜5/3)`,
      guest_number: `人数(${number})`
    }
  }

  handleChildFunc () {
    return '';
    //  自分自身の要素を非表示にするのか、
  }
  render() {
    return (
        <BrowserRouter>
          <MuiThemeProvider>
          <div className="App">
            <AppBar title="ApplePie" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
            <div>
              <div className="CatchCopy">あなたの旅行の最安価格を簡単に比較。</div>
              <Link to='/destination'>
                <RaisedButton label={this.state.destination} className="Button"/>
              </Link>
              <Link to='/schedule'>
                <RaisedButton label={this.state.schedule} className="Button"/>
              </Link>
              <Link to='/guest_number'>
                <RaisedButton label={this.state.guest_number} className="Button"/>
              </Link>
              <Route exact path='/destination' render={()=><Destination myFunc={this.handleChildFunc.bind(this)} />} />
              <Route exact path='/schedule' component={Schedule} />
              <Route exact path='/guest_number' component={GuestNumber} />
            </div>
          </div>
          </MuiThemeProvider>
        </BrowserRouter>
    );
  }
}

export default App;
