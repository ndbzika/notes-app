import { Divider, FormControl, FormHelperText, FormLabel, Input, Select, Textarea } from '@chakra-ui/react'
import { ChangeEvent, SelectHTMLAttributes, useState } from 'react'

export function NotesForm() {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteDesc, setNoteDesc] = useState('');
    const [noteRate, setNoteRate] = useState('');

    const handleSetTitle = (event:ChangeEvent) => {
        let {value} = event.target as HTMLInputElement
        setNoteTitle(value);
    }

    const handleSetDesc = (event:ChangeEvent) => {
        let {value} = event.target as HTMLInputElement
        setNoteDesc(value);
    }

    const handleSetRate = (event:ChangeEvent) => {
        let {value} = event.target as HTMLSelectElement
        value === '' ? alert('Selecione a importância da nota!') : setNoteRate(value) 
        
    }

    return(
        <FormControl>
            <FormLabel>Título da nota</FormLabel>
            <Input type='text' isRequired value={noteTitle} onChange={handleSetTitle}/>
            <FormHelperText>Dê um título á sua nota</FormHelperText>

            <Divider margin='2'/>

            <FormLabel>Descrição:</FormLabel>
            <Textarea value={noteDesc} onChange={handleSetDesc}/>

            <Divider margin='2'/>

            <FormLabel>Escolha a importância da nota</FormLabel>
            <Select placeholder='Quão esta nota é importante?' isRequired onChange={handleSetRate}>
                <option value='N'>Normal</option>
                <option value='I'>Intermediário</option>
                <option value='U'>Urgente</option>
            </Select>
            <FormHelperText>É de extrema importância classificar suas anotações.</FormHelperText>

        </FormControl>
    )
}