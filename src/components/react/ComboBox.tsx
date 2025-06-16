import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

import top100Films from '@/data/top100Films'

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={params => <TextField {...params} label="Movie" />}
    />
  )
}
