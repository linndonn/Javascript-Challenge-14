//Task 2 - Support Tickets Dynamic Addition
//Each ticket should be a <div> element displaying the customer’s name, issue description, priority level, and a Resolve button.
function createTicket (name, issue, priority level){
    const ticket = document.createElement ('div');
    //Set attributes (such as class and id) using setAttribute
    ticket.setAttribute('class', 'ticketID');

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
    ticket.classList.add('high-priority'); 
}
const ticketContainer = document.getElementById('ticketContainer'); 
ticketContainer.appendChild(ticket); 
}
// Task 4 - Support Ticket Resolution with Event Bubbling

//Attach a click event listener to the "Resolve" button that removes its parent ticket using removeChild.
deleteBtn = document.createElement("button"); 
    deleteBtn.textContent = "Remove Employee"; 
    
    deleteBtn.addEventListener("click", (event) => { 
        employeeContainer.removeChild(card)
// Use stopPropagation() in the "Resolve" button’s event handler to prevent bubblin
event.stopPropagation(); 
    });

//Test Data - Task 2
createTicket('Stooge Joseph', 'Credentials Does Not Exist in Portal', 'High'); 
 createTicket('Jemella Bascus', 'Cannot Find Printer', 'Medium'); 
 createTicket('Shaquille Harrigan', 'System Functioning, just running slow.', 'Low');

 //Task 3 - Highlighting High Priority Tickets

 //Use document.querySelectorAll to select all tickets with a "High" priority class.
 const nodelistEmployee = document.querySelectorAll(".employeeCard");
 //Convert the NodeList into an array using Array.from() or the spread operator.
 const employeeCardArray = Array.from(nodelistEmployee);
//Use an array method (e.g., .forEach()) to update the appearance of high-priority tickets (e.g., change background color or add a border).
 employeeCardArray.forEach(card => { 
    card.style.backgroundColor = "Red";
});