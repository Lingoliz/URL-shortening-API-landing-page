import React, { useState } from 'react'

export default function Shorten({original_link, short_link}) {
    const [isCopied, setIsCopied]=useState(false)

    function copy() {
        navigator.clipboard.writeText(short_link)
        setIsCopied(true)
        const timer = setTimeout(()=>{
            setIsCopied(false)
        },2000)
        return ()=> {
            clearTimeout(timer)
        }
    }
  return (
    <li>
        <p>{original_link}</p>
        <span>{short_link}</span>
        <button className={isCopied?'btn copied':'btn'} onClick={copy}>{isCopied?'Copied':'Copy'}</button>
    </li>
  )
}
