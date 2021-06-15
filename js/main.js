let container = document.getElementById('project-container');
for ( let i = 0; i < PROJECT_DATA.length; i++ ){
  let projectCardHtml = generateProjectCard(PROJECT_DATA[i]);
  container.innerHTML += projectCardHtml;
}

function generateProjectCard(project) {
  let cardHtml = '' +
        '<div class="preview-img-container filterDiv ' + project.category + '">' +
              '<div class="preview-img">';
    cardHtml += '<a target="_blank" href="' + project.projectUrl + '">';
    cardHtml += '<img class="preview-img-png" src="' + project.previewImgUrl + '" />'
    cardHtml += '<div class="img-overlay"><h5 class="project-title">' + project.title + '</h5></div>'
    cardHtml += '</a></div></div>';
  return cardHtml;
}

// from w3Schools.com

filterSelection("illustration")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c === "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("filter-button-container");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
