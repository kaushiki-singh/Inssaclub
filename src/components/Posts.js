import React, {useState} from 'react';
import './Profile.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

function Posts() {
    const post = [
        {
            image: "https://www.filmibeat.com/ph-big/2021/04/priyanka-chopra_16184631657.jpg",
            name: "IIFA Awards 2018",
            description: "I won 2 awards, so happy.",
            views: 345,
            likes: 234,
            time: "3 years ago"
        },
        {
            image: "https://www.filmibeat.com/ph-big/2020/05/priyanka-chopra_15905526131.jpg",
            name: "IIFA Awards 2015",
            description: "We are so excited.",
            views: 845,
            likes: 434,
            time: "6 years ago"
        },
        {
            image: "https://media.gettyimages.com/photos/priyanka-chopra-and-nick-jonas-attend-the-christian-dior-haute-2019-picture-id1159413969?k=6&m=1159413969&s=612x612&w=0&h=Os9hyjOkqSdwuf-MDAmOVg77XncqPw-duZelCeYhqXc=",
            name: "IIFA Awards 2014",
            description: "Yayyy.",
            views: 1845,
            likes: 1434,
            time: "7 years ago"
        }
    ]
    const [myPost, setMyPost] = useState(post);

    return (
        <div className="posts">
            <div className="posts-inner">
            <div className="posts-heading">
            <h1>Know More About Priyanka</h1>
            </div>

            <div className="allPosts">
            {
                myPost.map((item, index) => {
                    console.log(item.image);
                    return (
                        <div className="onePost">
                <img src={item.image} alt="no"/>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div id="followers">
                <span><VisibilityIcon />{item.views}</span>
                <span><ThumbUpAltIcon />{item.likes}</span>
                </div>


            </div>
                    )

                })
            }
            </div>
            </div>
        </div>
    )
}

export default Posts
