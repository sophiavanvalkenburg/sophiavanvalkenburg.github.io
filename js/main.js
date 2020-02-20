let container = $('#project-container');
for ( let i = 0; i < PROJECT_DATA.length; i++ ){
  let projectCardHtml = generateProjectCard(PROJECT_DATA[i]);
  container.append(projectCardHtml);
}

function generateProjectCard(project) {
  let cardHtml = '' +
        '<div class="project-card card">' +
        '<div class="card-body">' +
              '<div class="preview-img">';
    if (project.previewImgType === 'gif') {
      cardHtml += '<img class="preview-img-gif" src="' + project.previewImgUrl + '.gif" />';
    }
      cardHtml += '<img class="preview-img-png ' + (project.previewImgType !== 'gif' ? 'no-gif': '') + '" src="' + project.previewImgUrl + '.png" />' +
              '</div>' +
              '<h5 class="project-card-title">' + project.title + '</h5>' +
                '<p>' + project.description + '</p>';
      cardHtml += '<a class="stretched-link" href="' + project.projectUrl + '" target="_blank"</a>' +
      '</div>';
      if (typeof(project.codeUrl) !== 'undefined') {
        cardHtml += '<a class="code-link" href="' + project.codeUrl + '" target="_blank">View Code on GitHub</a></div>';
      }
      cardHtml += '</div>';
  return cardHtml;
}
