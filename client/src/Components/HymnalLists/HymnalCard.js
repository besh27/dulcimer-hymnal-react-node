import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

function HymnalCard(props){
    return (
    <ListGroup.Item>
        <h3>{props.title}</h3>
        <section>
            <ul className="hymnalCardInfo">
                <li><span>Composer:</span> {props.composer}</li>
                <li><span>Words:</span> {props.words}</li>
                <li><span>Time Signature:</span> {props.timeSignature}</li>
                <li><span>Key Signature:</span> {props.keySig}</li>
                <li><span>Scripture Reference:</span> {props.scriptureRef}</li>
                <li><span>Date Arranged:</span> {props.arrangementYear}</li>
            </ul>
        </section>
        <aside>
            <a className="sheetMusic" href={props.arrangementLink} rel={props.title}><button>Sheet Music</button></a>
            <a className="mp3Audio" href={props.audioLink} rel={props.title}><button>MP3 Audio</button></a>
        </aside>
    </ListGroup.Item>
    );
}

export default HymnalCard;