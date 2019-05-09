import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import Home from './Components/Pages/Home';
import Volume from './Components/Pages/Volume';
import ArrangementList from './Components/Pages/ArrangementList';
import About from './Components/Pages/About';
import { volumeOneList, volumeTwoList } from './data/volumeHymnLists';
class App extends React.Component {
	constructor(props) {
		super(props);
		console.log('App: Constructor')
		this.state = {
			// hymnList: hymnalData,
		};
	}

	componentDidMount(){
		// this.setState({})
		console.log('App - Mounted. This means the component has been added to the DOM.');
	}

	render() {
		console.log('App - Rendered');
		return (
			<div className="App">
				<nav>
					<Container>
						<Navigation />
					</Container>
				</nav>
				<Container className="main">
					<Route exact={true} path="/" component={Home} />
					<Route
						path="/volume-1"
						render={(routeProps) => (
							<Volume {...routeProps} title="The Dulcimer Hymnal: Volume 1" hymnList={volumeOneList} />
						)}
					/>
					<Route
						path="/volume-2"
						render={(routeProps) => (
							<Volume {...routeProps} title="The Dulcimer Hymnal: Volume 2" hymnList={volumeTwoList} />
						)}
					/>
					<Route
						path="/free-hyms-from-dulcimer-hymnal"
						render={(routeProps) => (
							<ArrangementList {...routeProps} title="Arrangements Featured in Our Hymnals" />
						)}
					/>
					<Route
						path="/free-hymn-sheet-music"
						render={(routeProps) => (
							<ArrangementList {...routeProps} title="Free Dulcimer Hymn Sheet Music and Tablature" />
						)}
					/>
					<Route
						path="/misc-dulcimer-arrangements"
						render={(routeProps) => (
							<ArrangementList {...routeProps} title="Misc. Dulcimer Arrangements and Tablature" />
						)}
					/>
					<Route path="/about" component={About} />
				</Container>
				<Footer />
			</div>
		);
	}
}

export default App;
