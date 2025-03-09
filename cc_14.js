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
     const paragraph = document.createElement('para'); 
     paragraph.textContent = issue; 
 //A label indicating priority level.
     const priorityLevel = document.createElement('level'); 
     priorityLevel.textContent = priority;
//A "Resolve" button to remove the ticket.
     const resolveButton = document.createElement('button'); 
     resolveButton.textContent = 'Resolve';

//Append the support ticket to "ticketContainer" using appendChild.
ticket.appendChild(nameHeader); 
ticket.appendChild(paragraph); 
ticket.appendChild(priorityLevel); 
ticket.appendChild(resolveButton); 

if (priority === 'High') {  
    ticket.classList.add('highpriority'); 
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
});

//  // Task 5:  Additional Challenge – Inline Editing of Support Tickets //
 
const edit = document.createElement('button'); 
edit.textContent = 'Edit'; 
ticket.appendChild(edit); 

edit.addEventListener('click', () => {  
    
    const input = document.createElement('input'); 
    input.value = header.textContent; 

    const issue = document.createElement('input'); 
    issue.value = paragraph.textContent; 

    const priority = document.createElement('input'); 
    priority.value = priorityLevel.textContent; 

    const saveButton = document.createElement('button'); 
    saveButton.textContent = 'Save'; 

    ticket.replaceChild(input, header); 
    ticket.replaceChild(issue, paragraph); 
    ticket.replaceChild(priority, priorityLevel); 
    ticket.replaceChild(saveButton, edit); 

    saveButton.addEventListener('click', () => { 
        header.textContent = input.value; 
        paragraph.textContent = issue.value; 
        priorityLevel.textContent = input.value; 

    if (priority.value === 'High') {  
        ticket.classList.add('high-priority'); 
    } else {
        ticket.classList.remove('high-priority'); 
    }

    highHighPriorityTickets (); 

    ticket.replaceChild(header, input); 
    ticket.replaceChild(paragraph, issue); 
    ticket.replaceChild(priorityLevel, priorityInput); 
    ticket.replaceChild(editButton, saveButton); 
    
    console.log('Ticket details updated.'); 
    });
});

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
            });
        }
    const nonHighPriorityTickets = document.querySelectorAll('.support-ticket:not(.highpriority)');  
    const nonHighPriorityArray = Array.from(nonHighPriorityTickets); 

    nonHighPriorityArray.forEach(ticket => {
        ticket.style.backgroundColor = '#f2f542'; 
        nonHighPriorityArray.forEach(ticket => {  
            ticket.style.backgroundColor = ''; 
            ticket.style.border = '';
    
    
    }  
  });
    
