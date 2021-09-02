import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
export const Search = () => {
    return (
        <>
            <InputGroup size="lg">
                <InputGroup.Text id="inputGroup-sizing-lg">Search location</InputGroup.Text>
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
        </>
    )
}