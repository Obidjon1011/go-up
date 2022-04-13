function GoUp(props) {
  console.log(props);
  var div = document.createElement("div");
  window.onscroll = function () {
    if (window.pageYOffset >= 300) {
     div.style.display = "block !important";
    } else {
     div.style.display = "none !important";
    }
  };
  div.id = "container";
  div.innerHTML = "up";
  div.style = `
    width: ${props.width ? props.width + "px" : "10px"}; 
    height: ${props.height ? props.height + "px" : "10px"}; 
    background-color: ${props.background ? props.background : "red"}; 
    margin: ${props.margin ? props.margin + "px" : "10px"}; 
    border-radius: ${props.radius ? props.radius + "px" : "5px"};
    color: ${props.color ? props.color : "white"};
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 3%;
    right: 3%;
    cursor: pointer;
    z-index: 9999;
    `;
  document.body.appendChild(div);

  div.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

}

module.exports = GoUp;
