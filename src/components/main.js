import React, { Component } from 'react';
import { DesignSection } from './designSection';
import { DevSection } from './devSection';
import { ContactSection } from './contactSection';
import { HomeSection } from './homeSection';
import { FallingMoog } from './fallingmoog';

export function Main(props) {
  return (
    <div>
      <FallingMoog />
      <Portfolio {...props} />
    </div>
  );
}

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 'Home',
      transitioning: false, 
    };
  }

  renderSection() {
    const { currentSection, transitioning } = this.state;
    switch (currentSection) {
      case 'Home':
        return <HomeSection transitioning={transitioning} />;
      case 'Design':
        return <DesignSection transitioning={transitioning} />;
      case 'Development':
        return <DevSection transitioning={transitioning} />;
      case 'Contact':
        return <ContactSection transitioning={transitioning} />;
      default:
        return null;
    }
  }

  toggleSection(sectionName) {
    if (sectionName === this.state.currentSection) {
      this.changeSection('Home');
    } else {
      this.changeSection(sectionName);
    }
  }

  changeSection(sectionName) {

    this.setState({ transitioning: true });
    const backgroundColor = this.getBackgroundColor(sectionName);
  

    this.props.setBackgroundColor(backgroundColor);
  

    let hueRotateValue = 0; 
    switch (sectionName) {
      case 'Home':
        hueRotateValue = 0; 
        break;
      case 'Design':
        hueRotateValue = 120; 
        break;
      case 'Development':
        hueRotateValue = 240; 
        break;
      case 'Contact':
        hueRotateValue = 330; 
        break;
      default:
        break;
    }
  

    const logoElement = document.getElementById('logo');
    if (logoElement) {
      logoElement.style.filter = `hue-rotate(${hueRotateValue}deg)`;
    }
  

    setTimeout(() => {
      this.setState({ currentSection: sectionName, transitioning: false });
    }, 500); 
  }

  getBackgroundColor(sectionName) {

    const backgroundColors = {
      Home: '#2f353b',
      Design: '#3d252c', 
      Development: '#253d27', 
      Contact: '#1e3363', 
    };


    return backgroundColors[sectionName] || this.props.backgroundColor;
  }

  render() {
    return (
        <div className='mainBloc'>
          <div className='buttons'>
            <button
              className={`section-button ${this.state.currentSection === 'Design' ? 'active' : 'disabled'}`}
              id="design-button"
              onClick={() => this.toggleSection('Design')}
            >
              Design
            </button>
            <p>|</p>
            <button
              className={`section-button ${this.state.currentSection === 'Development' ? 'active' :  'disabled'}`}
              id="development-button"
              onClick={() => this.toggleSection('Development')}
            >
              Techs
            </button>
            <p>|</p>
            <button
              className={`section-button ${this.state.currentSection === 'Contact' ? 'active' : 'disabled'}`}
              id="contact-button"
              onClick={() => this.toggleSection('Contact')}
            >
              Contact
            </button>
          </div>
          <div className='mainContent'>
            <div className={`fade-in ${this.state.transitioning ? 'fade-in-exiting' : 'fade-in-entered'}`}>
              {this.renderSection()}
            </div>
          </div>
      </div>
    );
  }
}

export default Portfolio;
