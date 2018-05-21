import React, { Component } from 'react';
import './App.css';
// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// app 全体で使用している
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Header で使用している
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import SearchIcon from 'material-ui/svg-icons/action/search';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import NotFound from './components/NotFound';

// TOPページで使用している
import Map from './map.png';
import TopBeach from './top_beach.png';
import { MapInteractionCSS } from 'react-map-interaction';

import {GridList, GridTile} from 'material-ui/GridList';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {FlatButton} from 'material-ui/FlatButton'
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

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
  '現在地(GPS使用)',
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


class Cities extends Component {
  render () {
    return(
      <div>{this.props.myFunc()}目的地入力</div>
    );
  }
}

class Hotels extends Component {
  render () {
    return(
      <div>
        <ListHeaders />
        <ListConditions />
        <ListSortMenues />
        <ListCounts />
      </div>
    );
  }
}

const ListSortMenues = () => {
  return(
    <ul>
      <li>おすすめ</li>
      <li>距離</li>
      <li>安い順</li>
      <li>高い順</li>
    </ul>
  );
};

const ListCounts = () => {
  return(
    <div>
      <span>1,234軒</span>
      &nbsp;
      <spafn><a>1泊平均料金表示</a></spafn>
    </div>
  );
};

class ListHotels extends Component {
  render () {
    const hotels = [1, 2, 3, 4, 5];
    return(
      <ListHotel hotel={hotels} />
    );
  }
}

class ListHotel extends Component {
  render (props) {
    return(
      <div>
        <span></span>
      </div>
    );
  }

}

class ListConditions extends Component {
  render () {
    return(
      <section className="keyvisual">
        <div className="slider">
          <img src="images/hotel2.jpg"></img>
        </div>
      </section>
    );
  }
}

class ListHeaders extends Component {
  render () {
    return(
      <div className="header_block">
        <div className="search-box">
          <span className="hotel-name">ロサンゼルス周辺のホテル…</span>
        </div>
        <a href="#" className="icon-box">
          <div>5月20日〜2泊, 宿泊者2名</div>
        </a>
        <a href="#" className="icon-box">
          <div>条件変更</div>
        </a>
      </div>
    );
  }
}


class Top extends Component {
  constructor (props) {
    super(props);
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
        <div className='TopHeader'>
          {/*<img className='TopBeach' src={TopBeach}/>*/}
          <div className="TopBeachTitle">世界中、どこでも。</div>
          <div className='TopBeachSearchBox'>
            <Paper zDepth={2}>
            <IconButton className='TopBeachSearchBoxIcon'><SearchIcon /></IconButton>
              <AutoComplete
                hintText="どこに出かけますか？"
                searchText={this.state.searchText}
                onUpdateInput={this.handleUpdateInput}
                onNewRequest={this.handleNewRequest}
                dataSource={colors}
                filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
                openOnFocus={true}
              />            {/*<AutoComplete*/}
              {/*className='AutoComplete'*/}
              {/*hintText="シンガポール マリーナベイサンズ"*/}
              {/*dataSource={colors}*/}
              {/*menuProps={menuProps}*/}
              {/*floatingLabelText="どこに出かけますか？"*/}
            {/*/>*/}
            </Paper>
          </div>
        </div>
        <Tabs>
          <Tab label="エリアから探す" >
            <div className='ClickableMap'>
              <Link to='/asia/japan'>
                <span className='labelMap japan'>日本</span>
              </Link>
              <img className='Map' src={Map} onClick={this.props.onClick}/>
            </div>
          </Tab>
        </Tabs>
        <Tabs>
          <Tab label="人気都市から探す" >
            <Card
              initiallyExpanded={true}
            >
              <CardText expandable={true}>
                <GridList cellHeight={40}>
                  <Link to='/hotels/asia/thai/bangkok'>
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
          </Tab>
        </Tabs>
      </div>
    );
  }
}

class Country extends Component{
  render () {
    return(
      <Card
        initiallyExpanded={true}
      >
        <CardHeader
          title="日本から探す"
          actAsExpander={true}
        />
        <CardText expandable={true}>
          <GridList cellHeight={40}>
            <Link to='/hotels/asia/japan/kyoto'>
              <GridTile title='京都' />
            </Link>
            <Link to='/hotels/asia/japan/osaka'>
              <GridTile title='大阪' />
            </Link>
            <Link to='/hotels/asia/japan/tokyo'>
              <GridTile title='東京' />
            </Link>
            <Link to='/hotels/asia/korea/nara'>
              <GridTile title='奈良' />
            </Link>
            <GridTile title='沖縄' />
            <GridTile title='北海道' />
          </GridList>
        </CardText>
      </Card>
    );
  }

}

const Logged = () => (
  <IconMenu
    iconButtonElement={
      <IconButton><MenuIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="お気に入り" />
    <MenuItem primaryText="ログイン" />
  </IconMenu>
);

const muiTheme = getMuiTheme({
  appBar: {
    height: 60,
    color: '#fff',
    textColor: '#000',
    titleFontWeight: 'bold'
  }
});


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
    alert('国をクリックしました');
  }
  render() {
    return (
        <BrowserRouter>
          <MuiThemeProvider muiTheme={muiTheme}>
            <div className="App">
              <AppBar
                className='Header'
                title="BesTrip"
                iconElementRight={<Logged />}
                showMenuIconButton={false}
              >
                <span className='Subtitle'>国内・海外ホテル検索</span>
              </AppBar>
              <div>
                <Switch>
                  <Route exact path='/' render={()=><Top onClick={this.clickMap} />} />
                  <Route exact path='/destination' render={()=><Destination myFunc={this.handleChildFunc.bind(this)} />} />
                  <Route exact path='/schedule' component={Schedule} />
                  <Route exact path='/guest_number' component={GuestNumber} />
                  <Route exact path='/asia/japan' component={Country} />
                  <Route exact path='/hotels/:area/:country/:city/' component={Hotels} />
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
