import React, { useEffect, useState } from "react";
import { Button, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Read() {
  const [APIData, setAPIData] = useState([]);

  const onDelete = (id) => {
    axios.delete(`https://62c46589abea8c085a74c3a5.mockapi.io/fakeUsers/${id}`)
    .then(() => {
        getData();
    })
  }

  const getData = () => {
    axios.get(`https://62c46589abea8c085a74c3a5.mockapi.io/fakeUsers`)
    .then((getData) => {
        setAPIData(getData.data);
    })
  }

  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  useEffect(() => {
    axios
      .get(`https://62c46589abea8c085a74c3a5.mockapi.io/fakeUsers`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell> {data.lastName}</Table.Cell>
                <Table.Cell> {data.checkbox ? "Yes" : "No"} </Table.Cell>
                <Link to="/update">
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                    <Button onClick={()=> onDelete(data.id)} >Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
