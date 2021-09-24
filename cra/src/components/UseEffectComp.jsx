import {useState,useEffect} from "react";

function UseEffectComp(){
    const[count,setCount] = useState(0);

    // 렌더링 될때마다 effect 발생
    // useEffect(() => {
    //     console.log('렌더링 될때마다 effect');
        
    // })

    // 처음 렌더링 될 때만 실행되는 effect
    // 두 번째 인자를 빈 배배열로 전달
    // useEffect(()=> {
    //     console.log("처음 렌더링 될 때 effect");
    // }, []); // 의존하고 있는 상태 변수가 없다

    // 특정 상태 변수가 별경될 때 실행하는 effect
    // useEffect(()=>{
    //     console.log("count 변수가 업데이트 effect");
    //     console.log("변경된 count:", count);
    // }, [count]); // 이 effect는 count 변수에 의존

    // 컴포넌트가 Unmount, 업데이트 직전에 실행하는 effect
    // clean up 함수를 return
    useEffect(()=> {
        console.log("useEffecct: count:" , count);
        // Cleanup 함수
        return () => {
            console.log("클린업 함수: ");
            console.log("count:", count);
        }
    },[]);
    // 오직 언마운트 시점에서만 뒷정리 함수를 호출하고 싶을 때
    // 두 번째 인자 값으로 빈 배열을 넘기면 된다


    return(
        <div>
            <h3>Effect 상태</h3>
            <p>{count}</p>
            <button onClick ={() => setCount(count + 1)}>증가</button>

        </div>
    )
}

export default UseEffectComp;
