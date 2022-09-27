import { Autocomplete, Grid, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, InputLabel, Select, OutlinedInput, Chip, MenuItem, Box } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { popularProducts } from '../components/StorePage/data'
import Filtri from '../components/StorePage/filter'
import Products from '../components/StorePage/PopProducts'

const Container= styled.div`
  margin-top: 80px;
`


const Prodotti = () => {

  const theme = useTheme();
  const [animalName, setAnimalName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setAnimalName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );

  };

  return (
    <div>
      <Navbar />
      <Container>
      <Filtri />
      <Products prodotti={popularProducts}/>
      <Footer />  
      </Container>
    </div>
  )
}

export default Prodotti