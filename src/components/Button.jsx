function printHello(event){
    alert('Hello');
    console.log(event)
}

function printBye(){
    alert('Bye');
}

function printHover(){
    alert('i was hovered')
}

function handleDoubleClick(){
    alert('I was clicked twice')
}

export default function Button () {
    return (
        <div>
            <button onClick={printHello}>CLick Me</button>
            {/* <p onClick={printBye}>This para is for event handling</p> */}
        
            <p onMouseOver={printHover}>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Cum odio expedita quasi, 
                molestias consequatur quidem excepturi adipisci 
                autem perspiciatis atque ut ipsum tempore 
                deleniti nam pariatur beatae, distinctio et cupiditate!</p>
        
            <button onDoubleClick={handleDoubleClick}>Double CLick Me</button>
        </div>
    );
}