const Text = ({ toggle, displayTxt }) => {

   
    return <h1 data-testid="text">{toggle ? displayTxt : ""}</h1>
}

export default Text;