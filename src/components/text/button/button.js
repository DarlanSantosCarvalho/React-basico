const Button = ({label}) => {
    return (
        <button onClick={() => alert('Esse botão tem uma label de "' + label + '"')}>{label}</button>
    )
}



export default Button