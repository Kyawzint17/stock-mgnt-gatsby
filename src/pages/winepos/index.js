import * as React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

import WineCard from '../../components/WineCard';

import { useLocalStorage } from 'react-use';




const dummyPrice = 250



function PosPage() {

    localStorage.clear();

    // window.localStorage['coffee'] = 'Latte'

    // const [coffee, setCoffee] = useLocalStorage('coffee', 'Latte')



    let [wineTitles, setWineTitles] = React.useState([])

    let [subMenu, setSubMenu] = React.useState('wine')

    // let [cart, setCart] = React.useState([])

    let [cart, setCart] = useLocalStorage('cart', [])



    function addToCard(wine) {

        // console.debug(coffee)

        cart.push(wine)

        console.table(cart)

        setCart([...cart])

    }



    React.useEffect(() => {

        let items = []

        fetch('https://api.sampleapis.com/wines/reds')

            .then(res => res.json())

            .then((wines) => {

                for (let i = 0; i < wines.length; i++) {

                    // console.log(coffees[i].title)

                    items.push(

                        <WineCard

                            key={i}

                            image={wines[i].image}

                            title={wines[i].winery}

                            description={wines[i].description}

                            price={dummyPrice}

                            handleClick={() => { addToCard(wines[i]) }}

                        />

                    )

                }

                setWineTitles(items)

            })

    }, [subMenu])




    return <Container>

        <h1>POS</h1>

        <Row>

            <Col>

                <Row>

                    {wineTitles}

                </Row>

            </Col>

            <Col sm={3}>

                <h2>Cart </h2>

                {cart.map((item, i) => {

                    return <Row key={i}>

                        <Col>{item.winery}</Col>

                        <Col>{dummyPrice}</Col>

                    </Row>

                })}

                <Row>

                    Total: {cart.length * dummyPrice} Baht

                </Row>

            </Col>

        </Row>

    </Container >

}



export default PosPage

