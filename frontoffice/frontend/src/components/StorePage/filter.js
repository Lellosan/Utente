import * as React from 'react';
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { mobile } from "../responsive";


const Button1= styled.button`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        background: #fff;
        transition: all 0.2s ease-in-out;
        color: #010606;
    }
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Cane', 'Gatto', 'Orso', 'Topo', 'Diocane'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Filtri() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [order, setOrder] = React.useState('');

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  return (
    <FilterContainer>

    <form method="GET" action="/store/prodotti">
        <Filter>
        <FilterText>Filtri:</FilterText>
            <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="tipo_animale">Tipo Animale</InputLabel>
            <Select
                name='animale'
                labelId="tipo_animale"
                id="tipo_animale"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="tipo_animale" label="Tipo Animale" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                    </Box>
                )}
                MenuProps={MenuProps}
            >
                {names.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                    >
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Ordine</InputLabel>
            <Select
                name="ordine"
                labelId="demo-select-small"
                id="demo-select-small"
                value={order}
                label="Order"
                onChange={handleOrderChange}
            >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={'a'}>Ascending</MenuItem>
                <MenuItem value={'b'}>Descending</MenuItem>
                <MenuItem value={'c'}>ehehhe</MenuItem>
            </Select>
        </FormControl>

        <Button1 type="submit">Cerca</Button1>     
        </Filter>
        
        
               
    </form>

      
    </FilterContainer>
  );
}