import Button from "./Button"


const Header = ({onAdd, showAdd}) => {

    
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button color={showAdd ? 'red' : 'grey'} text={showAdd ? 'Hide Fields' : 'Add Task'} onClick={onAdd} />
        </header>
    )


}
// const headingStyle = {
//     color: 'red'
//   }

export default Header