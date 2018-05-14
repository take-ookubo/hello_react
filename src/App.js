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

import {GridList, GridTile} from 'material-ui/GridList';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {FlatButton} from 'material-ui/FlatButton'

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
  constructor (props) {
    super(props);
    // const country = '韓国';
    // const city = 'ソウル';
    // const number = '大人1名';
    // this.state = {
    //   destination: `目的地(${country},${city})`,
    //   schedule: `日程(5/1〜5/3)`,
    //   guest_number: `人数(${number})`
    // }
  }

  render () {
    return(
      <div>
        <div className="CatchCopy" onClick={this.props.onClick}>国内&海外のホテル・宿泊検索</div>
        <div>
          <AutoComplete
            className='AutoComplete'
            hintText="シンガポール マリーナベイサンズ"
            dataSource={colors}
            menuProps={menuProps}
            floatingLabelText="都市名 ホテル名を入力してください"
            fullWidth={true}
          />
          <span className='labelMap japan' onClick={this.props.onClick}>日本</span>
          <MapInteractionCSS>
            <div className='ClickableMap'>
              <span className='labelMap japan'>日本</span>
              <img className='Map' src={Map} onClick={this.props.onClick}/>
            </div>
          </MapInteractionCSS>
          <Card
            initiallyExpanded={true}
          >
            <CardHeader
              title="人気都市から探す"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <GridList cellHeight={40}>
                <Link to='/hotels/asia/tai/bankoku'>
                  <GridTile title='バンコク' />
                </Link>
                <Link to='/hotels/asia/korea/seoul'>
                  <GridTile title='ソウル' />
                </Link>
                <Link to='/hotels/asia/tai/bankoku'>
                  <GridTile title='ホノルル' />
                </Link>
                <Link to='/hotels/asia/korea/seoul'>
                  <GridTile title='ロサンゼルス' />
                </Link>
                <GridTile title='パリ' />
                <GridTile title='ミラノ' />
                <GridTile title='台北' />
                <GridTile title='香港' />
                <GridTile title='ニューヨーク' />
                <GridTile title='オーランド' />
                <GridTile title='ロンドン' />
                <GridTile title='フィレンツェ' />
              </GridList>
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    // firebase.initializeApp(FirebaseConfig);
    this.clickMap = this.handleClick.bind(this)
  }
  componentWillMount() {
    // let postsRef = firebase.database().ref('posts');
    //   console.log('1');
    //
    // let _this = this;
    //
    //   console.log('2');
    // postsRef.on('value', function(snapshot) {
    //     console.log(snapshot.val());
    //
    //     _this.setState({
    //         posts: snapshot.val(),
    //         loading: false
    //     });
    // });
  }

  handleClick() {
    alert('日本をクリックしました');
  }
  render() {
    return (
        <BrowserRouter>
          <MuiThemeProvider>
            <div className="App">
              <AppBar title="AppliePie" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
              <div>
                <Switch>
                  <Route exact path='/' render={()=><Top onClick={this.clickMap} />} />
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
