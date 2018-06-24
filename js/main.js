let container = $('#project-container');
for ( let i = 0; i < PROJECT_DATA.length; i++ ){
  let projectCardHtml = generateProjectCard(PROJECT_DATA[i]);
  container.append(projectCardHtml);
}

function generateProjectCard(project) {
  let cardHtml = '' +
      '<div class="row">' +
        '<div class="col col-md-6 offset-md-3">' +
          '<div class="card border-0">' +
            '<div class="row align-items-center project-row border-top">' +
              '<div class="col-4 text-center preview-img">' +
                '<img class="card-img-top rounded preview-img-gif" src="' + project.previewImgUrl + '.gif" />' +
                '<img class="card-img-top rounded preview-img-png" src="' + project.previewImgUrl + '.png" />' +
              '</div>' +
              '<div class="col-8">' +
                '<div class="card-block">' +
                  '<h5 class="card-title">' + project.title + '</h5>' +
                  '<p class="card-text">' + project.description + '</p>';
    if (typeof(project.projectUrl) !== 'undefined') {
      cardHtml += '<a href="' + project.projectUrl + '" class="btn btn-primary" target="_blank">Go to Project</a>';
    }
    if (typeof(project.codeUrl) !== 'undefined') {
      cardHtml += '<a href="' + project.codeUrl + '" class="btn" target="_blank">View Code</a>';
    }
      cardHtml += '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
  return cardHtml;
}
