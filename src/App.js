import React, { Component } from 'react';
import './App.css';
// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar,RaisedButton,AutoComplete} from 'material-ui';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import NotFound from './components/NotFound';

// TOPページで使用している
import Map from './map.png';
import { MapInteractionCSS } from 'react-map-interaction';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Destination extends Component {
  render () {
    return(
      <div>{this.props.myFunc()}目的地入力</div>
    );
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

const colors = [
  'シンガポール マリーナベイサンズ',
  'シンガポール ペニンシュラエクセルシオール',
  'シンガポール リッツカールトン',
  'シンガポール ブギス ホテルボス',
  'シンガポール リゾート・ワールド・セントーサ',
  'シンガポール イビス',
];

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};


class Top extends Component {
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

  render () {
    return(
      <div>
        <div className="CatchCopy">国内&海外のホテル・宿泊検索</div>
        <div>
          <AutoComplete
            className=''
            hintText="シンガポール マリーナベイサンズ"
            dataSource={colors}
            menuProps={menuProps}
            floatingLabelText="都市名 ホテル名を入力してください"
            fullWidth={true}
          />
          <MapInteractionCSS>
            <img src={Map} />
          </MapInteractionCSS>
          <Card>
            <CardHeader
              title="人気都市から探す"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <Link to='/hotels/asia/tai/bankoku'>
                <FlatButton label="バンコク" />
              </Link>
              <Link to='/hotels/asia/korea/seoul'>
                <FlatButton label="ソウル" />
              </Link>
              <Divider />
              <FlatButton label="ホノルル" />
              <FlatButton label="ロサンゼルス" />
              <Divider />
              <FlatButton label="パリ" />
              <FlatButton label="ミラノ" />
              <Divider />
              <FlatButton label="台北" />
              <FlatButton label="香港" />
              <Divider />
              <FlatButton label="ニューヨーク" />
              <FlatButton label="オーランド" />
              <Divider />
              <Divider />
              <FlatButton label="ロンドン" />
              <FlatButton label="フィレンツェ" />
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

class App extends Component {
  handleChildFunc () {
    return '';
    //  自分自身の要素を非表示にするのか、
  }
  render() {
    return (
        <BrowserRouter>
          <MuiThemeProvider>
            <div className="App">
              <AppBar title="BestTrip" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
              <div>
                <Switch>
                  <Route exact path='/' component={Top} />
                  <Route exact path='/destination' render={()=><Destination myFunc={this.handleChildFunc.bind(this)} />} />
                  <Route exact path='/schedule' component={Schedule} />
                  <Route exact path='/guest_number' component={GuestNumber} />
                  <Route component={NotFound}/>
                </Switch>
              </div>
            </div>
          </MuiThemeProvider>
        </BrowserRouter>
    );
  }
}

export default App;
