import React from 'react';

import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
const tilesData = [
  {
    img: '/images/home/cutecate6.jpg',
    title: 'Cute Cat, Mr. Tom',
    author: 'jill111',
    featured: true,
  },
  {
    img: '/images/home/cutecate2.jpg',
    title: 'Cute Cat, Miss. Jerry',
    author: 'pashminu',
  },
  {

    img: '/images/home/horse1.jpg',
    title: 'Cute Animal',
    author: 'jill111',
  },
  {

    img: '/images/home/horse2.jpg',
    title: 'Cute Cat, Mr. James',
    author: 'fancycrave1',
    featured: true,
  },
  {

    img: '/images/home/cutecate4.jpg',
    title: 'Cute Cat, Miss. Rose',
    author: 'Hans',
  },
  {
    img: '/images/home/cutecate1.jpg',
    title: 'Cute Cat, Mr. Jack',
    author: 'fancycravel',
  }, {
    img: '/images/home/metro.jpg',
    title: 'GuangZhou Metro',
    featured: true,
    author: 'anonymous'
  }, {
    img: '/images/home/dinner3.jpg',
    title: 'Dinner 1',
    author: 'anonymous'
  }, {
    img: '/images/home/dinner4.jpg',
    title: 'Dinner 2',
    author: 'anonymous'
  }, {
    img: '/images/home/dinner5.jpg',
    title: 'Dinner 3',
    author: 'anonymous'
  }, {
    img: '/images/home/tower.jpg',
    title: 'GuangZhou Tower',
    author: 'anonymous'
  }, {
    img: '/images/home/nightscene.jpg',
    title: 'Night Scene',
    featured: true,
    author: 'anonymous'
  }, {
    img: '/images/home/nightscene2.jpg',
    title: 'Night Scene2',
    author: 'anonymous'
  },
  {

    img: '/images/home/cutecate5.jpg',
    title: 'Cute Animal2',
    author: 'BkrmadtyaKarki',
  }
];

const GridListExampleComplex = () => (
<div style={ { textAlign: "center" } }>
  <h3>Photo Gallery</h3>
  <GridList cols={ 2 } cellHeight={ 300 } padding={ 1 } style={ { width: 640, overflowY: 'auto', margin: "auto" } }>
    { tilesData.map((tile, id) => (
      <GridTile key={ id } title={ tile.title } actionIcon={ <IconButton>
                                                               <StarBorder color="white" />
                                                             </IconButton> } actionPosition="left" titlePosition="top" titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        cols={ tile.featured ? 2 : 1 } rows={ tile.featured ? 2 : 1 }>
        <img src={ tile.img } />
      </GridTile>
      )) }
  </GridList>
</div>
);
const GridListExampleSingleLine = () => (
<div>
  <h3>Photo Gallery</h3>
  <GridList cellHeight={ 300 } style={ { display: 'flex', flexWrap: 'nowrap', overflowX: 'auto' } } cols={ 2.2 }>
    { tilesData.map((tile, id) => (
      <GridTile key={ id } title={ tile.title } actionIcon={ (<IconButton>
                                                                <StarBorder color="rgb(0, 188, 212)" /> </IconButton>) } titleStyle={ { color: 'rgb(0, 188, 212)', } } titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
        <img src={ tile.img } />
      </GridTile>
      )) }
  </GridList>
</div>
);
var Welcome = React.createClass({
  render() {
    return (
      <div>
        <GridListExampleSingleLine />
        <GridListExampleComplex />
      </div>
      );
  }
});
module.exports = Welcome