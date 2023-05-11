const draggedName = (elem) => {
    let dots;
    const arr = elem.files[0].name.split('.');

    arr[0].length > 6 ? dots = '...' : dots = '.';
    const name = arr[0].substring(0, 6) + dots + arr[1];
    elem.previousElementSibling.textContent = name;

    return elem;   
}

export default draggedName;