import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage) => <ListGroup.Item style={{fontSize: "18px"}} action>{eachPackage}</ListGroup.Item>)

    return (
        <Container>
            <Card>
                <Card.Header>
                    <h1>Our Packages</h1>
                </Card.Header>
                <ListGroup>
                    {displayPackages}
                </ListGroup>
            </Card>
        </Container>
    )
}