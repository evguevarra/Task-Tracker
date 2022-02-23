import Button from "./Button"


const Header = () => {

    const onClick = () => {
        console.log('Clicked')
    }
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button color='grey' text='Add a task' onClick={onClick} />
        </header>
    )


}
// const headingStyle = {
//     color: 'red'
//   }

export default Header