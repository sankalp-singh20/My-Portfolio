
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
            
           
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                document.querySelector('.navbar-toggler').click();
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    
   
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;
        
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${taskText}
            <span>
                <button class="btn btn-sm btn-outline-success me-2 complete-btn">
                    <i class="fas fa-check"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger delete-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </span>
        `;
        
        taskList.appendChild(li);
        taskInput.value = '';
        taskInput.focus();
        
       
        li.querySelector('.complete-btn').addEventListener('click', function() {
            li.classList.toggle('completed');
            const icon = this.querySelector('i');
            if (li.classList.contains('completed')) {
                icon.classList.remove('fa-check');
                icon.classList.add('fa-undo');
                this.classList.remove('btn-outline-success');
                this.classList.add('btn-success');
            } else {
                icon.classList.remove('fa-undo');
                icon.classList.add('fa-check');
                this.classList.remove('btn-success');
                this.classList.add('btn-outline-success');
            }
        });
        
        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.style.animation = 'fadeOut 0.3s forwards';
            setTimeout(() => {
                li.remove();
            }, 300);
        });
    }
    
 
    addTaskBtn.addEventListener('click', addTask);
    
   
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    
    
    document.querySelectorAll('.complete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const listItem = this.closest('li');
            listItem.classList.toggle('completed');
            const icon = this.querySelector('i');
            if (listItem.classList.contains('completed')) {
                icon.classList.remove('fa-check');
                icon.classList.add('fa-undo');
                this.classList.remove('btn-outline-success');
                this.classList.add('btn-success');
            } else {
                icon.classList.remove('fa-undo');
                icon.classList.add('fa-check');
                this.classList.remove('btn-success');
                this.classList.add('btn-outline-success');
            }
        });
    });
    
  
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const listItem = this.closest('li');
            listItem.style.animation = 'fadeOut 0.3s forwards';
            setTimeout(() => {
                listItem.remove();
            }, 300);
        });
    });
    
   
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
           
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            if (name && email) {
                
                alert(`Thank you ${name}! Your message has been sent successfully. I will get back to you at ${email} soon.`);
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    

    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(-20px); }
        }
    `;
    document.head.appendChild(style);
});