const testimonials = [
    {
        name : "Cherise G",
        photoUrl : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text : "With Fast logistics delivery company, we have finally accomplished things that have been waiting forever to get done."
    },

    {
        name : "Rosetta Q",
        photoUrl : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text : "I can't say enough about Fast logistics delivery company. Fast logistics delivery company has really helped our business."
    },

    {
        name : "Rick E",
        photoUrl : "https://images.unsplash.com/photo-1611432579699-484f7990b127?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text : "I love Fast logistics delivery company! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come."
    },

    {
        name : "Jack F",
        photoUrl : "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text : "If you are a business owner, and you don't have Fast logistics delivery company in your toolkit just yet, I highly recommend that you check it out."
    }
]

let imageElement = document.querySelector("img")
let textElement = document.querySelector(".text")
let usernameElement = document.querySelector(".username")

// Initialize the testimonial index to 0 (first testimonial)
let currentTestimonialIndex = 0;

// Update testimonials 
function updateTestimonials(){
    const testimonial = testimonials[currentTestimonialIndex]

    imageElement.src = testimonial.photoUrl
    textElement.textContent = testimonial.text
    usernameElement.textContent = testimonial.name

    // Increment the index and reset if it exceeds the array length
    currentTestimonialIndex++;
    if (currentTestimonialIndex === testimonials.length) {
        currentTestimonialIndex = 0;
    }

    setTimeout(()=>{
        updateTestimonials()
    }, 8000)
}
updateTestimonials()