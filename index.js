
export default function clipboard(text,ballback) {
    let inputElement = document.createElement('input');
    inputElement.value = text;
    document.body.appendChild(inputElement)
    inputElement.select()
    document.execCommand('copy', true);
    inputElement.parentNode.removeChild(inputElement)
    if(ballback) ballback()
}