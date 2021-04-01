import React, { useState } from 'react';
import { makeStyles , withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';

const columns = [
  { id: 'jobtitle', label: 'Job Title', minWidth: 170 },
  { id: 'code', label: 'Level	', minWidth: 100 },
  {
    id: 'population',
    label: 'Job ID',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Job Network',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'family',
    label: 'Job Family',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(jobtitle, code, population, size , family) {
  const density = population / size;
  return { jobtitle, code, population, size, family };
}



const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


function Tab1() {

  
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectvalue ,setselectvalue] = useState("SortBy")
  const [rows , setRows] = useState([
    createData("SECURITY OFFICER", 'F-6', 132, "Internal Security and Safety" , "Security" ),
    createData('CLOSE PROTECTION OFFICER (Team Lead)', 'F-6', 14, "Internal Security and Safety", "Security"),
    createData('CLOSE PROTECTION OFFICER (Team Lead)', 'F-5', 60, "Internal Security and Safety","Security"),
    createData('CLOSE PROTECTION OFFICER', 'F-5', 3271, "Internal Security and Safety", "Security"),
    createData('ADMINISTRATIVE ASSISTANT [Temporary]', 'F-5', 376, "Internal Security and Safety", "Security"),
    createData('Contingent Owned Equipment Officer [Temporary]', 'F-5', 254, 7692024 , "dfdf"),
    createData(' SYSTEMS ASSISTANTny', 'F-5', 830, 357578 , "dfdf"),
    createData('FACILITIESMANAGEMENTASSISTANT', 'F-5', 485, 70273 , "dfdf"),
    createData('Mexico', 'F-5', 134, 1972550 , "dfdf"),
    createData('Japan', 'JP', 1263, 377973, "dfdf"),
    createData('France', 'FR', 67022000, 640679 , "dfdf"),
    createData('United Kingdom', 'GB', 67545757, 242495 , "dfdf"),
    createData('Russia', 'RU', 146793744, 17098246 , "dfdf"),
    createData('Nigeria', 'NG', 200962417, 923768 , "dfdf"),
    createData('Brazil', 'BR', 210147125, 8515767 , "dfdf" ),
  ])
  const [dummyrows , setdummyRows] = useState([
    createData("SECURITY OFFICER", 'F-6', 132, "Internal Security and Safety" , "Security" ),
    createData('CLOSE PROTECTION OFFICER (Team Lead)', 'F-6', 14, "Internal Security and Safety", "Security"),
    createData('CLOSE PROTECTION OFFICER (Team Lead)', 'F-5', 60, "Internal Security and Safety","Security"),
    createData('CLOSE PROTECTION OFFICER', 'F-5', 3271, "Internal Security and Safety", "Security"),
    createData('ADMINISTRATIVE ASSISTANT [Temporary]', 'F-5', 376, "Internal Security and Safety", "Security"),
    createData('Contingent Owned Equipment Officer [Temporary]', 'F-5', 254, 7692024 , "dfdf"),
    createData(' SYSTEMS ASSISTANTny', 'F-5', 830, 357578 , "dfdf"),
    createData('FACILITIESMANAGEMENTASSISTANT', 'F-5', 485, 70273 , "dfdf"),
    createData('Mexico', 'F-5', 134, 1972550 , "dfdf"),
    createData('Japan', 'JP', 1263, 377973 , "dfdf"),
    createData('France', 'FR', 67022000, 640679 , "dfdf"),
    createData('United Kingdom', 'GB', 67545757, 242495 , "dfdf"),
    createData('Russia', 'RU', 146793744, 17098246 , "dfdf"),
    createData('Nigeria', 'NG', 200962417, 923768 , "dfdf"),
    createData('Brazil', 'BR', 210147125, 8515767 , "dfdf"),
  ])
  const [tab1 , settab1] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  

  return (


 <div>
      <div style={{marginBottom: "60px" , display: "flex" ,justifyContent: "center" , alignItems: "center"}} >
      {/* <TextField id="standard-basic" label="Search Here ....." style={{width: "50%"}}
      onChange={(e) => {
        // console.log(rows[0].name.props.children, "rows")
        // console.log(e.target.value);
        let filtered = dummyrows.filter((v,i) => {
          return v.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        console.log(filtered, "filtered")
        setRows([...filtered]);
      }} 
      /> */}

        {/* <input 
      onChange={(e) => {
        // console.log(rows[0].name.props.children, "rows")
        // console.log(e.target.value);
        let filtered = dummyrows.filter((v,i) => {
          // console.log(v , "value")
          return v.jobtitle.trim().toLowerCase().includes(e.target.value.toLowerCase())
        })
        setRows(filtered);
      }}  />  */}

      </div>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth  , backgroundColor: "lightgrey"}}
                >
                  {column.label}
                </TableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              console.log(rows, "rows")
              return (
                <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>

    <select placeholder = "saad" value = {selectvalue} onChange= {(event) => {
      setselectvalue(event.target.value);
      let filtered = dummyrows.filter((v,i) => {
        // console.log(v , "value");
        
        return v.family.toLowerCase() == event.target.value.toLowerCase()
      })
      console.log(filtered, "filtered")
      setRows([...filtered]);

    }} >
  <option value="A">Apple</option>
  <option value="Security">Security</option>
  <option value="C">Cranberry</option>
</select>

    </div>
  );
}

export default Tab1;
