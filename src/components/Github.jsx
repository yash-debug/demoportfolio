import React from 'react'
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

export default function Github() {
    return (
        <div>
            <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
                <h1 className="project-heading text-center" style={{ paddingBottom: "20px", fontSize: "2.5rem" }}>
                    Days I <strong className="purple" style={{ color:'yellow', fontSize: "2.5rem" }}>Code</strong>
                </h1>
                <GitHubCalendar id="github-main"
                    username="yash-debug"
                    blockSize={20}
                    blockMargin={4}
                    color="hsl(47, 100%, 53%)"
                    fontSize={15}
                />
            </Row>
        </div>
    )
}
