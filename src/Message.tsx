function Message(){
    const name='Kommi';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello Worls</h1>
}

export default Message;