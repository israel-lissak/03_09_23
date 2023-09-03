import {useRef} from 'react';

function StyleChanger() {

    const myRef1 = useRef<HTMLDivElement>(null);
    const myRef2 = useRef<HTMLDivElement>(null);

    function changeColor():void {
        myRef1.current!.style.backgroundColor = 'white';
        myRef2.current!.style.backgroundColor = 'white';
    }

    function switchText(){
        const temp = myRef1.current!.textContent;
        myRef1.current!.textContent = myRef2.current!.textContent;
        myRef2.current!.textContent = temp;
    }

  return (
    <>
        <div ref={myRef1} style={{height:'150px', width:'150px', backgroundColor:'blue'}}>I'm a blue squre</div>
        <div ref={myRef2} style={{height:'150px', width:'150px', backgroundColor:'red'}}>I'm a red squre</div>
        <button onClick={changeColor}>change color</button>
        <button onClick={switchText}>switch text</button>
    </>
    
  )
}

export default StyleChanger