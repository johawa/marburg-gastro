export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const pinLocgic = (e, id, focus_pin, focused_pin, is_pin_open, open_pin, close_pin) => {
    
    const currentEl = document.getElementById(`svg-${id}`);
    const currentElDiv = document.getElementById(`descripton-container-${id}`);

    //Next Element
    const nextEl = document.getElementById(`svg-${focused_pin}`);
    const nextElDiv = document.getElementById(`descripton-container-${focused_pin}`);
    focus_pin(id);

    //Open Pin if all are closed
    if (!is_pin_open) {
        open_pin()
        currentEl.classList.add('play');
        currentElDiv.classList.add('animate-description');
    }
    //Close Pin if clicked twice
    else if (is_pin_open && focused_pin === id) {
        currentEl.classList.remove('play');
        currentElDiv.classList.remove('animate-description');
        close_pin();
    }
    //Open next pin if clicked, and close old one
    if (is_pin_open && focused_pin !== id) {
        currentEl.classList.add('play');
        currentElDiv.classList.add('animate-description');
        nextEl.classList.remove('play');
        nextElDiv.classList.remove('animate-description');
    }


}