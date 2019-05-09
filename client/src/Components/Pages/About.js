import React from 'react';
import { Row, Col} from 'react-bootstrap';
import about from '../../Assets/Images/about.png'
import ContactForm from '../Contact/ContactForm';

function Home(props){
	return (
    <>
        <Row>
            <Col lg={8} xs={12}>
            <h2>About:</h2>
            <div className="about-info">
                <h3>About the Hymnal</h3>
                <p>The Dulcimer Hymnal is an effort to give the mountain dulcimer the same quality music that a piano or organ hymnal would have. The arrangements were written to resemble the original keyboard versions as close as possible, by retaining the original melodies, harmonies and chord inversions as best as possible. All the hymns are arranged for the standard DAD tuning and can be used for solo or ensemble playing.</p>
                <h3>About the Arranger</h3>
                <p>Benjamin Esh is a music ministry graduate of Judson University. Throughout College he majored in Guitar performance and a vocal emphasis. He is currently the music director of Westminster Presbyterian Church in Elgin IL.</p>
                <p>After buying a dulcimer, Benjamin immediately began playing in the musical groups at Westminster and arranging many modern and traditional hymns for the instrument. Recently he performed in China during a cultural exchange trip through Judson University.</p>
            </div>
            </Col>
            <Col lg={4}xs={12} className="filters affix">
                <img className="about-image" src={about} alt="about"/>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col lg={12} xs={12}>
                <h2>Contact:</h2>
                <ContactForm />
            </Col>
        </Row>
    </>
    );
}

export default Home;