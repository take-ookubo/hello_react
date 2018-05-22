import React, { Component } from 'react';
import './App.css';
// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// app 全体で使用している
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// redux 関連
import { createStore,combineReducers } from 'redux';


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

// class Hotels extends Component {
//   render () {
//     return(
//       <div id='count'>
//         <h1>0</h1>
//         {/*<ListHeaders />*/}
//         {/*<ListConditions />*/}
//         {/*<ListSortMenues />*/}
//         {/*<ListCounts />*/}
//         {/*<ListHotels />*/}
//       </div>
//     );
//   }
// }

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
    const hotels = [
      {
        code: '0000001',
        name: 'ハレクラニホテル',
        city_code: '001',
        score: 8.1,
        viewed: false,
        favorite: false,
        spot_distance: 'ワイキキビーチからの500m',
        bed_type: 'キングベッド',
        meals_type: '朝・夕',
        image_url: 'https://media-cdn.tripadvisor.com/media/photo-s/12/58/f4/fd/pool.jpg',
        // API で空室紹介の最新情報を取得してくる
        plan: {
          price: 32249,
          before_price: 60500,
          site_name: 'DeNAトラベル',
          plan_url: 'https://www.skygate.co.jp/hotel/detail?regionId=&hotelCode=20727&AgentCode=HTLTP&checkin=2018%2F05%2F23&checkout=2018%2F05%2F25&rooms=2',
        }
      },
      {
        code: '0000002',
        name: 'ヒルトンハワイアンビレッジ',
        city_code: '001',
        score: 5.5,
        viewed: true,
        favorite: true,
        spot_distance: 'ワイキキビーチからの500m',
        bed_type: 'ツインベッド',
        meals_type: '朝',
        image_url: 'http://hiltonhotels.jp/static/upload/hotel_main_20140630191906_lg_pc.jpg',
        // API で空室紹介の最新情報を取得してくる
        plan: {
          price: 32249,
          before_price: 0,
          site_name: 'Booking.com',
          plan_url: 'https://www.booking.com/hotel/us/halekulani.ja.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGh1iAEBmAEVuAEHyAEP2AEB6AEB-AELkgIBeagCAw;sid=ad2d1201fb794d6c29c671bbae1ec3ea;all_sr_blocks=24531403_117521058_2_2_0;bshb=2;checkin=2018-06-02;checkout=2018-06-03;dest_id=20030916;dest_type=city;dist=0;group_adults=2;hapos=1;highlighted_blocks=24531403_117521058_2_2_0;hpos=1;room1=A%2CA;sb_price_type=total;srepoch=1526955595;srfid=4ab091e7569e28e899f04aa243c8a96748b37402X1;srpvid=77b21064bd7603ef;type=total;ucfs=1&#hotelTmpl',
        }
      },
    ];
    return(
      hotels.map((hotel) =>
        <ListHotel hotel={hotel} />
      )
    );
  }
}

class ListHotel extends Component {
  constructor(props) {
    super(props);
    this.state = { hotel: props.hotel };
  }

  render () {
    const hotel = this.state.hotel;
    return(
      <ul>
        <li>
          <Link to={"/hotels/" + hotel.code}>
            <img src={hotel.image_url} height='200' width='200' />
            <span>{hotel.name}</span>
            <span>{hotel.score}</span>
            <span>{hotel.spot_distance}</span>
            <span>お気に入り{hotel.favorite}</span>
            <ListHotelPlan plan={hotel.plan} />
          </Link>
        </li>
      </ul>
    );
  }

}

class ListHotelPlan extends Component {
  constructor(props) {
    super(props);
    this.state = { plan: props.plan };
  }
  render() {
    const plan = this.state.plan;
    return(
      <div>
        <a href={plan.plan_url}>
          <span>{plan.bed_type}</span>
          <span>{plan.meals_type}</span>
          <span>{plan.site_name}</span>
          <span>￥{plan.price}</span>
          <span><strike>￥{plan.before_price}</strike></span>
        </a>
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
    console.log(new Date());
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
    console.log('Country');
    console.log(new Date());
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


class Hotels extends Component {
  render () {
    return(
      <div>
        <h1>0</h1>
        {/*<ListHeaders />*/}
        {/*<ListConditions />*/}
        {/*<ListSortMenues />*/}
        {/*<ListCounts />*/}
        {/*<ListHotels />*/}
      </div>
    );
  }
}

const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

// ActionCreate
function AddFavorite(hotel_id) {
  return {
    type: ADD_FAVORITE,
    hotel_id
  }
}

function RemoveFavorite(hotel_id) {
  return {
    type: ADD_FAVORITE,
    hotel_id
  }
}

// Action
// const ActionAddFavorite = {
//   type: ADD_FAVORITE,
//   hotel_id: 0,
// };

// Reducer
const initialState = {
  favorites: [
    2,3,4,
  ],
};

const ReducerFavorite = (state = initialState, action) => {
  console.log(action.hotel_id);
  switch(action.type) {

    case ADD_FAVORITE:
      console.log("favorites: ");
      state.favorites.forEach(function(item, index, array) {
        console.log(item, index);
      });
      const new_favorites = state.favorites.push(action.hotel_id);
      return Object.assign({}, state, {
        favorites: [1],
      });

    case REMOVE_FAVORITE:
      // hotel_id = action.hotel_id;
      // const new_favorites = state.favorites.delete_if { |v| v == hotel_id }
      const pos = state.favorites.indexOf(action.hotel_id);
      return Object.assign({}, state, {
        favorites: state.favorites.splice(pos, 1),
      });

    default:
      return state;
  };
};

// storeにreducerを登録
const store = createStore(ReducerFavorite);

// // 初期ステートのログ
// const store_render = () => ReactDOM.render(
//   <h1>{store.getState().count}</h1>,
//   document.getElementById('root')
// );
// store_render();

store.subscribe(store_render);

AddFavorite('000001');

document.addEventListener('click', () =>
  store.dispatch(AddFavorite('000002')))
;

// storeが更新(dispatch実行時)されたら実行される
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

function reducerA(state = 'hoge', action) {
  switch (action.type) {
    case 'ACTION_X':
      return 'foobar';
  }
  return state;
}

function reducerB(state = { flag: false, items: [] }, action) {
  switch (action.type) {
    case 'ACTION_Y':
      return Object.assign({}, state, { flag: true });
  }
  return state;
}

let config = {
  expired: {
    hotel: '30.minute',
    hotels: '1.days',
  }
}

// store
let initial_store = {
  // URL での表記
  // /hotels/japan/tokyo/?check_in=2018-05-01&adult_count=2&hotel_rank=5
  // ホテル一覧
  histories: {
    limit: 50,

    hotel: [
      {code:1, created_at: '2018/05/22 12:00'}, {code:2}
    ],
    hotels: [
      [
        {code:1},{code:2}
      ],
      [
        {code:3},{code:4}
      ],
    ],
    urls: [
      '/hotels/japan',
      '/hotels/japan/tokyo',
    ],
    last_url_id: 1,
    // 優先順位: 1:直のURL, 2:webStorage, 3:onMemory
    params: [
      {
        check_in: '2018/05/01',
        adult_count: 2,
        created_at: '2018/05/22 12:00'
      },
      {
        check_in: '2018/05/02',
        adult_count: 3,
        created_at: '2018/05/22 13:00'
      },
      {
        check_in: '2018/05/03',
        adult_count: 3,
        created_at: '2018/05/22 14:00'
      },
    ],
    keywords: []
  },
  last_ids: {
    params_id: 49,
    hotel_id: 49,
    hotels_id: 49,
  },

    params:
      {
        check_in: '2018/05/01',
        adult_count: 2,
        hotel_rank: 5,
        keyword: '浅草'
      },
    keyword_histories: [
      'ホノルル',
      '東京'
    ],
    hotels: [
      {
        code: '00001',
        name: 'オークラ',
        image_url: 'http://booking.com/....'
      },
      {
        code: '00001',
        name: 'オークラ',
        image_url: 'http://booking.com/....'
      }
    ],
    hotel: {

    }

  // }
}


// let rootReducer = combineReducers();
//
// // stateとしてundefinedを渡して初期状態ツリーを取り出す
// console.log(rootReducer(undefined, { type: null }));

export default App;
