function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const data = [
{ id: 'chord-1', name: "Chord 1", letter: 'Q', src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/chord2.wav' },
{ id: 'chord-2', name: "Chord 2", letter: 'W', src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/chord2.wav' },
{ id: 'lick', name: "Lick", letter: 'E', src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/lick.wav' },
{ id: 'kick', name: "Sub Kick", letter: 'A', src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/kick.WAV' },
{ id: 'hh', name: "HH", letter: 'S', src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/ClosedHH%207Mile.wav' },
{ id: 'clap', name: "Clap", letter: 'D', src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/Clap%207Mile.wav' },
{ id: 'kick', name: "Kick", letter: 'Z', src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/Kick2.wav' },
{ id: 'snare', name: "Snare", letter: 'X', src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/Snare%207Mile%201.wav' },
{ id: 'ohat', name: "Open Hat", letter: 'C', src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/OpenHH.wav' }];


const activeStyle = {
  backgroundColor: '#479700',
  height: 77,
  marginTop: 27.5,
  boxShadow: "0 3px #479700" };


const inactiveStyle = {
  backgroundColor: '#9e9e9e',
  marginTop: 20,
  color: "#444",
  border: "3px solid",
  boxShadow: "3px 3px 5px black" };


class DrumPad extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleKeydown",
















    e => {
      if (e.keyCode === this.props.letter.charCodeAt()) {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.name);
        this.activatePad();
        setTimeout(() => this.activatePad(), 100);
      }
    });_defineProperty(this, "handleClick",

    () => {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.name);
      this.activatePad();
      setTimeout(() => this.activatePad(), 100);
    });this.state = { padStyle: inactiveStyle };this.handleClick = this.handleClick.bind(this);this.handleKeydown = this.handleKeydown.bind(this);}componentDidMount() {document.addEventListener("keydown", this.handleKeydown);window.focus();}componentWillUnmount() {document.removeEventListener("keydown", this.handleKeydown);}

  activatePad() {
    if (this.state.padStyle.backgroundColor === '#479700') {
      this.setState({
        padStyle: inactiveStyle });

    } else {
      this.setState({
        padStyle: activeStyle });

    }
  }

  render() {
    return (
      React.createElement("div", { className: "drum-pad", style: this.state.padStyle, id: this.props.id, onClick: this.handleClick },
      React.createElement("h1", null, this.props.letter),
      React.createElement("audio", { src: this.props.src, id: this.props.letter, className: "clip", ref: ref => this.audio = ref })));


  }}


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleDisplay",






    display => this.setState({ display }));this.state = { display: "Press 2P" };this.handleDisplay = this.handleDisplay.bind(this);}

  render() {
    return (
      React.createElement("div", { id: "drum-machine" },
      React.createElement("div", { id: "display" }, this.state.display),
      React.createElement("div", { className: "logo" },
      React.createElement("i", { className: "inner-logo fab fa-free-code-camp" }),
      React.createElement("div", { className: "inner-logo " }, String.fromCharCode(160) + "React Drum Machine")),

      React.createElement("div", { id: "drum-pads" },
      data.map((d) =>
      React.createElement(DrumPad, { id: d.id, name: d.name, letter: d.letter, src: d.src, handleDisplay: this.handleDisplay })))));




  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));