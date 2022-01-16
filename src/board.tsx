import React, { useCallback, useState, useRef } from 'react';
import styled from '@emotion/styled';
import produce from 'immer';

const SIZE=50;
const neighbors = [
    [-1,-1],
    [-1,0],
    [-1,1],
    [0,-1],
    [0,1],
    [1,-1],
    [1,0],
    [1,1]
]
const Board = () => {
    const [board, setBoard] = useState(()=>{
        let result=[];
        for(let i=0;i<SIZE;i++){
            let arr=new Array(SIZE).fill(0);
            result.push(arr);
        }
        return result;
    });
    const [running, setRunning] = useState(false);
    const runRef = useRef(running);
    runRef.current=running;

    const run=useCallback(()=>{
        if(!runRef.current) return;
        
        setBoard(board=>{
            return produce(board, copy=>{
                for(let i=0;i<SIZE;i++){
                    for(let j=0;j<SIZE;j++){
                        let count=0;
                        for(let [row, col] of neighbors){
                            let newi=i+row;
                            let newj=j+col;
                            if(newi>-1 && newj >-1 && newi < SIZE && newj < SIZE)  count+=board[newi][newj];
                        }
                        if(count <2 || count >3) copy[i][j]=0;
                        else if (board[i][j]===0 && count===3) copy[i][j]=1;
                    }
                }
            })
        })
        setTimeout(run,1000)
    },[]);

    return (
        <>
            <button 
                onClick={()=>{
                    setRunning(!running);
                    if(!running){
                        runRef.current = true;
                        run();
                    }
                }
                }
            >
                {running?'stop':'start'}
            </button>
            <Container>
                {board.map((row:any, i:any)=>
                    row.map((cell:any, j:any)=>(
                    <Cell 
                        key={`${i}+${j}`} 
                        onClick={()=>{
                            const nextState=produce(board, draft =>{
                                draft[i][j]=board[i][j]===0?1:0;
                            });
                            setBoard(nextState);
                        }} 
                        check={board[i][j]}
                    >
                    </Cell>
                ))
            )}
        </Container>
        </>
    );
};

export default Board;

interface cellProps{
    check:boolean;
}
const Container=styled('div')`
    margin-top:2em;
    display:grid;
    grid-template-rows:repeat(50, 20px);
    grid-template-columns:repeat(50,20px);
`
const Cell=styled('div')<cellProps>`
    display:inline-block;
    background-color:${({check})=>check?'black':'white'};
    border:1px solid black;
    width:20px;
    height:20px;
    cursor:pointer;
`