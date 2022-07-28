createBubble();

function createBubble() {
    const bubble_pop = document.createElement('i');
    bubble_pop.classList.add('fa');
    bubble_pop.classList.add('fa-circle-o');
    bubble_pop.style.left = Math.random() * window.innerWidth + 'px';


    document.body.append.Child(bubble_pop);
}