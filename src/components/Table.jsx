import "./Table.module.css";

export default function TableItem({data,handleDelete}){

    return(
        <>
        <table>
            <tbody>
                <tr>
                    <th>No.</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Department</th>
                <th>Salary ₹</th>
                <th>Marital Status</th>
                <th>Profile picture</th>
                <th>Delete</th>
                </tr>
            { data.map((item) => {
            return <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.address}</td>
                <td>{item.department}</td>
                <td>{item.salary}</td>
                <td>{item.maritalStatus}</td>
                <td><img width="100px" src={item.image} alt="" /></td>
                <td><button onClick={()=>handleDelete(item.id)}>X</button></td>
            </tr>
            })}
            </tbody>
        </table>
        </>
    )
}