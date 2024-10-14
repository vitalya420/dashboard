<template>
  <table>
    <thead>
      <tr>
        <th>IP address</th>
        <th>User Agent</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>127.0.0.1</td>
        <td>Mozilla Firefox</td>
        <td>
          <button>Logout</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>


<style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 16px;
    text-align: left;
  }

  th, td {
    padding: 12px;
    border: 1px solid #dddddd;
  }

  th {
    background-color: #f2f2f2;
    color: #333;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f1f1f1;
  }

  button {
    padding: 8px 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>