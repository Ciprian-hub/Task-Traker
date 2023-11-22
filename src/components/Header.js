import Button from "./Button";


function Header ({title})  {

    const handleClick = (e) => {
        e.preventDefault()
        console.log('click')
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='#2E8B57' text="Add" onClick={handleClick}/>
        </header>
    )
}

export default Header