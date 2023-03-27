

const SearchBox = ({ onButtonClick,initialTextBoxValue,onTextBoxChange, onCloseButtonClick}) => {

 return (
        <>
            <form className="mt-3">
                <input type="button" onClick={onCloseButtonClick}/>

                <input type="text" placeholder="Search..." id="name" onChange={onTextBoxChange} value={initialTextBoxValue} />
                <button type="button" onClick={onButtonClick}><i className="bi bi-search"></i></button>
            </form>
  
          
           
        </>
    )
}

export default SearchBox