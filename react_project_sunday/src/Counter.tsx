import {useRef} from 'react';

function Counter() {

    const myRef = useRef<HTMLDivElement>(null);

    function addOne():void {
        let num = Number(myRef.current?.textContent);
        num += 1;
        myRef.current!.textContent = String(num);
    }

    function reset():void {
        let num = Number(myRef.current?.textContent);
        num = 0;
        myRef.current!.textContent = String(num);
    }

  return (
    <>

        <div ref={myRef}>0</div>
    
        <button onClick={addOne}>
            add
        </button>
        <button onClick={reset}>
            reset
        </button>
    </>
    

  )
}

export default Counter