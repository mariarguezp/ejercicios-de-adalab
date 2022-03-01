function ListItem(props) {
    return (
        <li className="card">
            <h3 className="card__title">{props.title}</h3>
            <p className="card__description">{props.text.substring(0, 34)}</p>
          </li>
    );
}

export default ListItem;