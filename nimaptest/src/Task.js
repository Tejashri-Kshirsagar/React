import React, { useEffect, useState } from "react";
import { Table, TableHead, TableRow, TableCell, TableContainer, TableBody, Button } from '@material-ui/core'
import './App.css'
function Task() {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/todos',).then((response) => {
            response.json().then((result => {
                setdata(result)
            }))
        })
    }, [])



    function addData() {
        fetch('http://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({
                userId: '301',
                title: 'PHP',
                completed: false
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp)
            })
        })
    }
    function deleteUser(id) {
        fetch(`http://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                console.log("deleted user id:"+id);
                alert('User Deleted Sucessfully...' + id);

            })
        })
    }
    return (
        <div className="main">
            <TableContainer>
                <Table className="tbl">

                    <TableHead>
                        <TableRow>
                            <TableCell><Button color="primary" variant="outlined" className="add" onClick={() => addData()}>ADD TASK</Button></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">ID</TableCell>
                            <TableCell align="left">User ID</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">Completed</TableCell>
                            <TableCell align="left">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {data.map((results, i) => (
                            <TableRow key={i}>
                                <TableCell>{results.id}</TableCell>
                                <TableCell>{results.userId}</TableCell>
                                <TableCell>{results.title}</TableCell>
                                <TableCell>{results.completed.toString()}</TableCell>
                                <TableCell><Button color="primary" variant="outlined" className="del" onClick={() => deleteUser(results.id)}>Delete</Button></TableCell>
                            </TableRow>

                        ))}

                    </TableBody>

                </Table>
            </TableContainer>
        </div>
    )
}
export default Task;