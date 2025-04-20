import TableHeading from "./TableHeading"

const Table = () =>{
  return (
    <>
    <table border={3} cellPadding={10} cellSpacing={1}>
      <TableHeading />
      <tr>
        <td>rishi</td>
        <td>kumar</td>
        <td>12</td>
        <td>1426574574</td>
      </tr>
      <tr>
        <td>rishikesh</td>
        <td>kumar</td>
        <td>12</td>
        <td>1426574574</td>
      </tr>
      <tr>
        <td>rishisuraj</td>
        <td>kumar</td>
        <td>12</td>
        <td>1426574574</td>
      </tr>
    </table>
    </>
  )
}


export default Table