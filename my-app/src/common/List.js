import React from "react"

const List = ({items, Component, ...rest}) =>{
    return <> {items.map((item,index) => <Component {...item} {...rest} index={index}/>)}</>
}

export default List