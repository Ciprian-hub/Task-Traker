import PropTypes from "prop-types";


function Button ({color, text, onClick})  {

    return (
        <div className="header">
            <button
                onClick={onClick}
                className="btn"
                style={{background: color}}>
                {text}
            </button>
        </div>
    )
}
Button.defaultProps = {
    color: 'steelblue',
    text: 'Add'
}
Button.propType = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button