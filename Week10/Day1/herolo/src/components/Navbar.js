import Nav from 'react-bootstrap/Nav';

export const Navbar = () => {
    return (
        <Nav variant="pills" defaultActiveKey="/main">
            <Nav.Item>
                <Nav.Link href='/'>Main</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/favorites'>Favorites</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}