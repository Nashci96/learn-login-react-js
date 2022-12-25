import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from "react";

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

export function DashboardPage({logout,getter}){
    console.log(getter)
    console.log(getter.getter[0])
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
        simulateNetworkRequest().then(() => {
            setLoading(false);
        });
        }
    }, [isLoading]);

    const handleClick = () => {
        setLoading(true)
        return logout(false)
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        EnigmaCamp
                        Welcome , {getter.getter[0]}
                        <Button
                            variant='danger'
                            disabled={isLoading}
                            onClick={!isLoading ? handleClick : null}
                            >
                                {isLoading ? 'Loading…' : 'LogOut'}
                        </Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
       
}

