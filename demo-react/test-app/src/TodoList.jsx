function TodoList({ list }) {
    const items = list.map(
        item => ( <li key={item}>{item}</li> )
    );

    return (
        <ul className="todos">
            {items}
        </ul>
    );
}

export default TodoList;