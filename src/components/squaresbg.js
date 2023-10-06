import React, { Component } from 'react';

export class SquareGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: [],
    };
  }

  createSquare = () => {
    const size = Math.random() * 40;
    const top = Math.random() * window.innerHeight;
    const left = Math.random() * window.innerWidth;

    // Generate a random color using HSL with a similar hue as the background
    const background = this.generateRandomColor();

    const newSquare = {
      id: Date.now(),
      size,
      top,
      left,
      background,
    };

    this.setState((prevState) => ({
      squares: [...prevState.squares, newSquare],
    }));

    setTimeout(() => {
      this.removeSquare(newSquare.id);
    }, 5000);
  };

  removeSquare = (id) => {
    this.setState((prevState) => ({
      squares: prevState.squares.filter((square) => square.id !== id),
    }));
  };

  componentDidMount() {
    this.createSquareInterval = setInterval(this.createSquare, 150);
  }

  componentWillUnmount() {
    clearInterval(this.createSquareInterval);
  }

  generateRandomColor = () => {
    const hue = Math.random() * 180; 
    const saturation = Math.random() * 50 + 50; 
    const lightness = Math.random() * 40 + 70;

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  render() {
    const { squares } = this.state;

    return (
      <div className="square-generator">
        {squares.map((square) => (
          <span
            key={square.id}
            className="square"
            style={{
              width: `calc(20px + ${square.size}px)`,
              height: `calc(20px + ${square.size}px)`,
              top: `${square.top}px`,
              left: `${square.left}px`,
              background: square.background,
            }}
          />
        ))}
      </div>
    );
  }
}
