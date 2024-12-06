import { Fragment } from "react"
import { Button, Card, Carousel, Container, Form, Image, Nav, Navbar } from "react-bootstrap"
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import NavBar from "../Components/Nav";

const LandingPage = () => {

    return <Fragment>
        <NavBar />
        <Navbar expand="md" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <Image src="./logo.png" alt="website logo"  width={150}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#shop">Shop</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Carousel nextIcon={<FaArrowCircleRight />} prevIcon={<FaArrowCircleLeft />}>
            <Carousel.Item interval={2000}>
                <Image fluid style={{width: "100%", height: "500px"}} src="https://graphicsfamily.com/wp-content/uploads/edd/2023/04/Black-Friday-Ecommerce-Website-Banner-Design-scaled.jpg" alt="ad1"/>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Image fluid style={{width: "100%", height: "500px"}} src="https://graphicsfamily.com/wp-content/uploads/edd/2022/06/Free-Shoes-Sale-Banner-Advertising-Template-scaled.jpg" alt="ad2"/>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Image fluid style={{width: "100%", height: "500px"}} src="https://i.pinimg.com/originals/21/89/81/218981cf77f1a0fd22d7ae0d274ea623.jpg" alt="ad3"/>
            </Carousel.Item>
        </Carousel>

        <h3 className="my-4 text-center">Featured Products</h3>
        <div className="p-2 d-flex gap-2 overflow-auto">
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/26-ecommerce-website-mockup-mobile-phone-with-product-images-online-shopping-experience-responsive-web-design_486608-5275.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Sample Text</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/26-ecommerce-website-mockup-mobile-phone-with-product-images-online-shopping-experience-responsive-web-design_486608-5275.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Sample Text</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/26-ecommerce-website-mockup-mobile-phone-with-product-images-online-shopping-experience-responsive-web-design_486608-5275.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Sample Text</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/26-ecommerce-website-mockup-mobile-phone-with-product-images-online-shopping-experience-responsive-web-design_486608-5275.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Sample Text</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/26-ecommerce-website-mockup-mobile-phone-with-product-images-online-shopping-experience-responsive-web-design_486608-5275.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Sample Text</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/26-ecommerce-website-mockup-mobile-phone-with-product-images-online-shopping-experience-responsive-web-design_486608-5275.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Sample Text</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/26-ecommerce-website-mockup-mobile-phone-with-product-images-online-shopping-experience-responsive-web-design_486608-5275.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Sample Text</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/26-ecommerce-website-mockup-mobile-phone-with-product-images-online-shopping-experience-responsive-web-design_486608-5275.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Sample Text</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/26-ecommerce-website-mockup-mobile-phone-with-product-images-online-shopping-experience-responsive-web-design_486608-5275.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Sample Text</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/26-ecommerce-website-mockup-mobile-phone-with-product-images-online-shopping-experience-responsive-web-design_486608-5275.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Sample Text</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/26-ecommerce-website-mockup-mobile-phone-with-product-images-online-shopping-experience-responsive-web-design_486608-5275.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Sample Text</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/26-ecommerce-website-mockup-mobile-phone-with-product-images-online-shopping-experience-responsive-web-design_486608-5275.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Sample Text</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/26-ecommerce-website-mockup-mobile-phone-with-product-images-online-shopping-experience-responsive-web-design_486608-5275.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Sample Text</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/26-ecommerce-website-mockup-mobile-phone-with-product-images-online-shopping-experience-responsive-web-design_486608-5275.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Sample Text</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/26-ecommerce-website-mockup-mobile-phone-with-product-images-online-shopping-experience-responsive-web-design_486608-5275.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Sample Text</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/26-ecommerce-website-mockup-mobile-phone-with-product-images-online-shopping-experience-responsive-web-design_486608-5275.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Sample Text</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card><Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/26-ecommerce-website-mockup-mobile-phone-with-product-images-online-shopping-experience-responsive-web-design_486608-5275.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Sample Text</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/26-ecommerce-website-mockup-mobile-phone-with-product-images-online-shopping-experience-responsive-web-design_486608-5275.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Sample Text</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
        </div>

        <div className="d-flex flex-column flex-sm-row">
            <div className="w-100">
                contact details
            </div>
            <Form className="w-100">
                <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" placeholder="Enter username"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as={"textarea"} rows={4} placeholder="Enter username"></Form.Control>
                </Form.Group>
                <Button variant="success">Send Message</Button>
            </Form>
        </div>
    </Fragment>
}

export default LandingPage