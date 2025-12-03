import React from "react";
import Accordion from "react-bootstrap/Accordion";

const AccordianSection = () => {
  return (
    <>
      <Accordion defaultActiveKey="0" className="mb-4">

        {/* 1st */}
        <Accordion.Item eventKey="0" className="rounded-4 border border-dark">
          <Accordion.Header>
            <span className="fw-bold fs-3 me-3">01</span>
            <span className="fw-bold fs-5">Consultation</span>
          </Accordion.Header>
          <Accordion.Body className="bg-success bg-opacity-25">
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts.
          </Accordion.Body>
        </Accordion.Item>

        {/* 2nd */}
        <Accordion.Item eventKey="1" className="rounded-4 border border-dark mt-3">
          <Accordion.Header>
            <span className="fw-bold fs-3 me-3">02</span>
            <span className="fw-bold fs-5">Research and Strategy Development</span>
          </Accordion.Header>
          <Accordion.Body className="bg-light">Content here.</Accordion.Body>
        </Accordion.Item>

        {/* 3rd */}
        <Accordion.Item eventKey="2" className="rounded-4 border border-dark mt-3">
          <Accordion.Header>
            <span className="fw-bold fs-3 me-3">03</span>
            <span className="fw-bold fs-5">Implementation</span>
          </Accordion.Header>
          <Accordion.Body className="bg-light">Content here.</Accordion.Body>
        </Accordion.Item>

        {/* 4th */}
        <Accordion.Item eventKey="3" className="rounded-4 border border-dark mt-3">
          <Accordion.Header>
            <span className="fw-bold fs-3 me-3">04</span>
            <span className="fw-bold fs-5">Monitoring and Optimization</span>
          </Accordion.Header>
          <Accordion.Body className="bg-light">Content here.</Accordion.Body>
        </Accordion.Item>

        {/* 5th */}
        <Accordion.Item eventKey="4" className="rounded-4 border border-dark mt-3">
          <Accordion.Header>
            <span className="fw-bold fs-3 me-3">05</span>
            <span className="fw-bold fs-5">Reporting and Communication</span>
          </Accordion.Header>
          <Accordion.Body className="bg-light">Content here.</Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </>
  );
};

export default AccordianSection;
