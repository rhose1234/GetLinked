import React, { useState } from 'react';
import { BsPlus as Plus, BsDash as Dash } from 'react-icons/bs';


// ... rest of the code


function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="faq-accordion">
      <div className="faqq d-flex justify-content-between align-items-center">
        <h6 className="header fw-bolder">{title}</h6>
        <p
          className="bg-none"
          type=""
          onClick={onClick}
        >
          {isOpen ? <Dash /> : <Plus />}
        </p>
      </div>
      <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}>
        <div className="faq-body fw-normal">{content}</div>
      </div>
    </div>
  );
}


function Accordion() {
  const [accordionItems, setAccordionItems] = useState([
    { title: 'Can I work on a project I started before the hackathon?', content: 'No, you cannot.', isOpen: true },
    { title: 'What happens if I need help during the hackathon?', content: 'You can ask for help from your co-competitors', isOpen: false },
    { title: 'What happens if I dont have an idea for a project?', content: 'it is better not to opt in, but you can still challenge yourself, who knows👀.', isOpen: false },
    { title: 'Can I join a team or do I have to come with one?', content: 'Yes, you can join a team, it all depends on you', isOpen: false },
    { title: 'What happens after the hackathon ends', content: 'You dubmit your links using the google form and wait for the winners to be announces.', isOpen: false },
    { title: 'Can I work on a project I started before the hackathon?', content: 'No, You cannot, it has to be the real project.', isOpen: false },
  ]);

  const handleAccordionItemClick = (index) => {
    const updatedItems = [...accordionItems];
    updatedItems[index].isOpen = !updatedItems[index].isOpen;
    setAccordionItems(updatedItems);
  };

  return (
    <div className="accordion" id="accordionExample">
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={item.isOpen}
          onClick={() => handleAccordionItemClick(index)}
        />
      ))}
    </div>
  );
}

export default Accordion;
