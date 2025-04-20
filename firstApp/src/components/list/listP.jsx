export const ListParnt = ()=>{
  return <ol>
    <ListItems />
  </ol>
};

export const UnList = ()=>{
  return <ul>
    <ListItems />
  </ul>
};

const ListItems = () =>{
  return (
    <>
    <li>Banana</li>
    <li>Apple</li>
    </>
  )
}