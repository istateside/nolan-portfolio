import React from 'react'
import 'css/about.css'

export default class About extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = { text: "Aubrey Nolan is a visual artist specializing in " + 
      "watercolor-and-ink illustrations and comics of commonplace, yet " +
      "whimsical, scenes.  She graduated from SUNY New Paltz with a BFA in " +
      "Painting + Drawing in 2012 and is based in Brooklyn."
      
      + "\nYou can email her for freelance work or just to say hi at " + 
      "aubreygnolan@gmail.com."
      
      + "\nYou can take a look at how put together she truly can be on " +
      "Linkedin."
      
      + "\nYou can follow her Instagram for her most current work as well as " +
      " snapshots of works in progress."
      
      + "\nYou can take a look at the far-from-cohesive thought dump that " +
      "is her Twitter."
    }
  }
  
  render() {
    const text = this.state.text.split("\n").map(
      (text, idx) => <p className='about--paragraph' key={idx}>{text}</p>
    );
    
    return (
      <div className="about">
        <div className='about--header'>
          <div className="title about--header__block">
            <h3 className="about--header__text -color-gray">About</h3>
            <span className="about--header__text -color-gray">/</span>
            <h3 className="about--header__text -color-pink">Contact</h3>
          </div>
          <div className="about--header__block">
            <img className="about--header__img" src="/houses.jpg"/>
          </div>
        </div>
        
        <div className="about--text">
          {text}
        </div>
      </div>
    )
  }
}