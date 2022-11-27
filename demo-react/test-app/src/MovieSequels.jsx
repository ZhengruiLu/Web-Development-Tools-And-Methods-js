function MovieSequels( { count } ) {
    const list = [];

    for(let sequel = 1; sequel <= count; sequel += 1) {
        const title = sequel === 1 ? '' : sequel;
        list.push( <li>Cats: The Musical {title}</li> );
    }
    
    return (
        <ul className="sequels">
        {list}
        </ul>
    );
}

export default MovieSequels;