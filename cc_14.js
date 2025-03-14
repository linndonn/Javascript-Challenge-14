//Task 2 - Support Tickets Dynamic Addition
//Each ticket should be a <div> element displaying the customer’s name, issue description, priority level, and a Resolve button.
function createTicket (name, issue, priority){
    const ticket = document.createElement ('div');
    //Set attributes (such as class and id) using setAttribute
    ticket.setAttribute('class', 'ticketId'); 

//A heading for the customer’s name.
    const nameHeader = document.createElement('h3'); 
     nameHeader.textContent = name; 
 //A paragraph for the issue description
     const paragraph = document.createElement('p'); 
     paragraph.textContent = issue; 
 //A label indicating priority level.
     const priorityLevel = document.createElement('level'); 
     priorityLevel.textContent = priority;
//A "Resolve" button to remove the ticket.
     const resolveButton = document.createElement('button'); 
     resolveButton.textContent = 'Resolve';
     resolveButton.setAttribute('class', 'resolve-button');

//Append the support ticket to "ticketContainer" using appendChild.
ticket.appendChild(nameHeader); 
ticket.appendChild(paragraph); 
ticket.appendChild(priorityLevel); 
ticket.appendChild(resolveButton); 
ticketContainer.appendChild(ticket);

if (priority === 'High') {  
    ticket.classList.add('high-priority'); 
}
const ticketContainer = document.getElementById('ticketContainer'); 
ticketContainer.appendChild(ticket); 
}
// Task 4 - Support Ticket Resolution with Event Bubbling
resolveButton.addEventListener('click', (event) => {  
    event.stopPropagation(); 
    ticketContainer.removeChild(ticket); 
    console.log(`${nameHeader.textContent}'s ticket is complete`); 
});

ticketContainer.addEventListener('click', () => { 
    console.log(`Ticket has been clicked!`);
});

//  // Task 5:  Additional Challenge – Inline Editing of Support Tickets //
 
const editButton = document.createElement('button'); 
editButton.textContent = 'Edit'; 
ticket.appendChild(editButton); 

editButton.addEventListener('click', () => {  
    
    const inputN = document.createElement('input'); 
    inputN.value = nameHeader.textContent; 

    const inputI = document.createElement('input'); 
    inputI.value = paragraph.textContent; 

    const priorityI = document.createElement('input'); 
    priorityI.value = priorityLevel.textContent; 

    const saveButton = document.createElement('button'); 
    saveButton.textContent = 'Save'; 

    ticket.appendChild(inputN, nameHeader); 
    ticket.appendChild(issueI, paragraph); 
    ticket.appendChild(priorityI, priorityLevel); 
    ticket.appendChild(saveButton, editButton); 

    saveButton.addEventListener('click', () => { 
        nameHeader.textContent = inputN.value; 
        paragraph.textContent = inputI.value; 
        priorityLevel.textContent = priorityI.value; 

    if (priorityI.value === 'High') {  
        ticket.classList.add('high-priority'); 
    } else {
        ticket.classList.remove('high-priority'); 
    }

    highHighPriorityTickets (); 

    ticket.appendChild(header, inputN); 
    ticket.appendChild(paragraph, inputI); 
    ticket.appendChild(priorityLevel, priorityI); 
    ticket.appendChild(editButton, saveButton); 
    
    console.log('Ticket updated.'); 
    });
});
}

//Test Data - Task 2
createTicket('Stooge Joseph', 'Credentials Does Not Exist in Portal', 'High'); 
 createTicket('Jemella Bascus', 'Cannot Find Printer', 'Medium'); 
 createTicket('Shaquille Harrigan', 'System Functioning, just running slow.', 'Low');

 //Task 3 - Highlighting High Priority Tickets
//Use document.querySelectorAll to select all tickets with a "High" priority class
 function highHighPriorityTickets () { 
    const highPriorityTickets = document.querySelectorAll('.highpriority'); 
    const ticketsArray = Array.from(highPriorityTickets); 

    ticketsArray.forEach(ticket => {  
         ticket.style.backgroundColor = '#ff0000'; 
        ticket.style.border = '2px solid black'
            });
        
    const nonHighPriorityTickets = document.querySelectorAll('.support-ticket:not(.highpriority)');  
    const nonHighPriorityArray = Array.from(nonHighPriorityTickets); 

    nonHighPriorityArray.forEach(ticket => {
        ticket.style.backgroundColor = ''; 
                   ticket.style.border = '';
    
    
    });
  }


highlightHighPriorityTickets();