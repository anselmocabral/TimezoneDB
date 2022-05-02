import styled from 'styled-components'

const Container = styled.div`
  background-color: #eee;
  flex: 1;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width: 400px;
  }
  .localTime .okMessage {
    color: blue;
  }
  .latlong {
    display: flex;
    justify-content: space-between;
    button {
      width: auto;
    }
  }
  .alertMessage {
    background-color: red;
    color: black;
  }
  table {
    border: 2px solid #555;
    border-collapse: collapse;
    font: 16px 'Lucida Grande', 'Helvetica', 'Arial', sans-serif;
    width: 100%;
  }

  th,
  td {
    border: 1px solid #bbb;
    padding: 2px 8px 0;
    text-align: left;
  }
  thead > tr > th {
    background-color: #cce;
    font-size: 18px;
    border-bottom: 2px solid #999;
  }
`

export default Container
