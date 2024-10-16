<template>
  <div class="mt-4">
    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th class="w-50">IP Address</th>
          <th class="w-50">User Agent</th>
          <th class="w-25 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>127.0.0.1</td>
          <td>Mozilla Firefox</td>
          <td class="text-center">
            <button class="btn btn-danger btn-sm">Logout</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table {
  margin: 20px 0;
}

.table th,
.table td {
  vertical-align: middle; /* Center align content vertically */
}

.table th {
  background-color: #f2f2f2;
  color: #333;
}

.table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.table tr:hover {
  background-color: #f1f1f1;
}

button {
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
