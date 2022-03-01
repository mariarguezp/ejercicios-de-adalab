import ListItem from './ListItem';

function List(props) {
    return (
        <ul className="cards">
          {props.moviesData.map((eachMovie) => <ListItem key={eachMovie.id} title={eachMovie.title} text={eachMovie.synopsis}/>)}
        </ul>
    );
}

export default List;