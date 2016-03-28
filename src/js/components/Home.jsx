import React from 'react'
import 'css/home.css'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { promos: [
      {
        className: '-size-tall',
        src: "/src/img/panels.jpeg",
        caption_html: "Monthly comic readings in NYC. /  host, curator."
      },
      {
        className: '-size-tall',
        src: "/src/img/what-type.jpeg",
        caption_html: "What Type of Girl / three longform comics displayed" + 
          " in a solo show at Babycastles (art, music, & independent video " + 
          "game venue in NYC) on February 4, 2016."
      },
      {
        className: '-size-wide',
        src: "/src/img/publicity.gif",
        caption_html: "Publicity art for Yesterday Was Beautiful / play by " + 
          "Andy Boyd & Blythe Roberson, featured at New York Fringe Festival." +
          "\nGIF design by Jordan Rosenberg."
      }
    ] }
  }
  
  render() {
    const promos = this.state.promos.map(
      (promo, id) => <HomePromo className={promo.className} src={promo.src} caption_html={promo.caption_html} key={id} />
    )
    
    return (
      <div className='page-content home'>
        <h2 className="home--title">Recently...</h2>
        
        <div className='home--promos'>
          {promos}
        </div>
      </div>
    )
  }
}

export class HomePromo extends React.Component {
  render() {
    const classStr = `home--promo ${this.props.className}`;
    return (
      <figure className={classStr}>
        <img className="home--promo_img" src={this.props.src} />
        <figcaption className="home--promo__caption">{this.props.caption_html}</figcaption>
      </figure>
    )
  }
}