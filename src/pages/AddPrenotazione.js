import React from 'react'

class AddPrenotazione extends React.Component{
    render(){
        return(
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                
                <DateTimePicker value={selectedDate} onChange={handleDateChange} />
            </MuiPickersUtilsProvider>
        )
    }
}