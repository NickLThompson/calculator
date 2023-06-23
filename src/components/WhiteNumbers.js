import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function WhiteNumbers() {
    return (
        <div className="Container text-center">
            <div className="Row">
                <div className="Col">
                    <Button variant="secondary">7</Button>
                    <Button variant="secondary">8</Button>
                    <Button variant="secondary">9</Button>
                </div>
            </div>

            <br></br>

            <div className="Row">
                <div className="Col">
                    <Button variant="secondary">4</Button>
                    <Button variant="secondary">5</Button>
                    <Button variant="secondary">6</Button>
                </div>
            </div>

            <br></br>

            <div className="Row">
                <div className="Col">
                    <Button variant="secondary">1</Button>
                    <Button variant="secondary">2</Button>
                    <Button variant="secondary">3</Button>
                </div>
            </div>

            <br></br>

            <div className="Row">
                <div className="Col">
                    <Button variant="secondary">+-</Button>
                    <Button variant="secondary">0</Button>
                    <Button variant="secondary">.</Button>
                </div>
            </div>
        </div>
    );
}

export default WhiteNumbers;
