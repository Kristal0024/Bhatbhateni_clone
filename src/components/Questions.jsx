import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Questions = () => {
  return (
    <div>
      <div className="w-full px-30 flex py-20 gap-5 bg-[#FFF4E6]">
<div className="w-1/2 flex flex-col gap-2">
<p className='text-sm font-semibold tracking-wider text-[#FD7E14]'>SUPPORT</p>
<p className='text-5xl font-bold text-black'>Frequently Asked Questions</p>
<p className='text-lg text-gray-500'>Find answers to common questions about our products, shipping, and returns.</p>
</div>
<div className="w-1/2 ml-5">
<Accordion defaultActiveKey="0" className="custom-accordion">
      <Accordion.Item eventKey="0" className="">
        <Accordion.Header className="border-none">What is your return policy?</Accordion.Header>
        <Accordion.Body className="bg-[#FFF4E6] border-none">
          We offer exchanges for eligible products. Please contact our customer support team to request an exchange.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How do i care for my products?</Accordion.Header>
        <Accordion.Body className="bg-[#FFF4E6]">
          Each product comes with a care instruction card.
        </Accordion.Body>
      </Accordion.Item>
<Accordion.Item eventKey="2">
        <Accordion.Header>How do i care for my products?</Accordion.Header>
        <Accordion.Body className="bg-[#FFF4E6]">
          Each product comes with a care instruction card.
        </Accordion.Body>
      </Accordion.Item>
<Accordion.Item eventKey="3">
        <Accordion.Header>How do i care for my products?</Accordion.Header>
        <Accordion.Body className="bg-[#FFF4E6]">
          Each product comes with a care instruction card.
        </Accordion.Body>
      </Accordion.Item>
<Accordion.Item eventKey="4">
        <Accordion.Header>How do i care for my products?</Accordion.Header>
        <Accordion.Body className="bg-[#FFF4E6]">
          Each product comes with a care instruction card.
        </Accordion.Body>
      </Accordion.Item>
<Accordion.Item eventKey="5">
        <Accordion.Header>How do i care for my products?</Accordion.Header>
        <Accordion.Body className="bg-[#FFF4E6]">
          Each product comes with a care instruction card.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</div>
</div>

    </div>
  )
}

export default Questions
