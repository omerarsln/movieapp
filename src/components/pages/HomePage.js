import React from 'react';
import ActorList from '../ActorList';

class HomePage extends React.Component {

    state = {
        actors : [
            {
                name : "Jack Nicholson",
                photo : "https://m.media-amazon.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_UY209_CR5,0,140,209_AL_.jpg",
                description : "Jack Nicholson, an American actor, producer, director and screenwriter, is a three-time Academy Award winner and twelve-time nominee."
            },
            {
                name : "Carrie-Anne Moss",
                photo : "https://m.media-amazon.com/images/M/MV5BMTYxMjgwNzEwOF5BMl5BanBnXkFtZTcwNTQ0NzI5Ng@@._V1_UY209_CR9,0,140,209_AL_.jpg",
                description : "Carrie-Anne Moss was born and raised in Vancouver, Canada. At age 20, after studying at the American Academy of Dramatic Arts, she moved to Europe to pursue a career in modeling."
            },
            {
                name : "Ralph Fiennes",
                photo : "https://m.media-amazon.com/images/M/MV5BMzc5MjE1NDgyN15BMl5BanBnXkFtZTcwNzg2ODgwNA@@._V1_UY209_CR10,0,140,209_AL_.jpg",
                description :"Actor Ralph Nathaniel Twisleton-Wykeham-Fiennes was born on December 22, 1962 in Suffolk, England, to Jennifer Anne Mary Alleyne (Lash), a novelist, and Mark Fiennes, a photographer. He is the eldest of six children."
            },
            {
                name : "Daniel Day-Lewis",
                photo : "https://m.media-amazon.com/images/M/MV5BMjE2NDY2NDc1Ml5BMl5BanBnXkFtZTcwNjAyMjkwOQ@@._V1_UY209_CR9,0,140,209_AL_.jpg",
                description :"Born in London, England, Daniel Michael Blake Day-Lewis is the second child of Cecil Day-Lewis (pseudonym Cecil Day-Lewis), Poet Laureate of the U.K., and his second wife, actress Jill Balcon."
            },
            {
                name : "Natalie Portman",
                photo : "https://m.media-amazon.com/images/M/MV5BMTQ3ODE3Mjg1NV5BMl5BanBnXkFtZTcwNzA4ODcxNA@@._V1_UY209_CR8,0,140,209_AL_.jpg",
                description :"Natalie Portman is the first person born in the 1980s to have won the Academy Award for Best Actress (for Siyah Kuğu (2010))."
            },
            {
                name : "Robert De Niro",
                photo : "https://m.media-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_UY209_CR9,0,140,209_AL_.jpg",
                description :"One of the greatest actors of all time, Robert De Niro was born on August 17, 1943 in Manhattan, New York City, to artists Virginia (Admiral) and Robert De Niro Sr. His paternal grandfather was of Italian descent, and his other ancestry is Irish, English, Dutch, German, and French."
            },
            {
                name : "Al Pacino",
                photo : "https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_UX140_CR0,0,140,209_AL_.jpg",
                description :"Alfredo James 'Al' 'Pacino established himself as a film actor during one of cinema's most vibrant decades, the 1970s, and has become an enduring and iconic figure in the world of American movies."
            }
        ]
    };

    render(){
        return(
            <div>
                <ActorList actors={this.state.actors} />
            </div>
        );
    };
};

export default HomePage;