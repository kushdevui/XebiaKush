import React from 'react';
import './videosList.css';

import { Link } from 'react-router-dom';
import CardInfo from '../CardInfo/cardInfo';


const VideosTemplate = (props) =>{
    //console.log(props.data);
    return props.data.map( (item,i)=>{
          return <Link to={`/videos/${item.id}`} key={i}>
                    <div className="video-list-item-wrapper">
                        <div className="left"
                            style={{
                                background:`url(/images/videos/${item.image})`
                            }}
                        >
                            <div>

                            </div>
                        </div>
                        <div className="right">
                            <CardInfo teams={props.teams} team={item.team} date={item.date}/>
                            <h2>{item.title}</h2>
                        </div>
                    </div>
            </Link>
    })
}

export default VideosTemplate;