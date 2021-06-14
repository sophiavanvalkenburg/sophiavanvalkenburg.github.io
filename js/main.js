let container = $('#project-container');
for ( let i = 0; i < PROJECT_DATA.length; i++ ){
  let projectCardHtml = generateProjectCard(PROJECT_DATA[i]);
  container.append(projectCardHtml);
}

function generateProjectCard(project) {
  let cardHtml = '' +
        '<div class="preview-img-container">' +
              '<div class="preview-img">';
    cardHtml += '<a href="' + project.projectUrl + '">';
    cardHtml += '<img class="preview-img-png ' + (project.previewImgType !== 'gif' ? 'no-gif': '') + '" src="' + project.previewImgUrl + '.png" />'
    cardHtml += '<div class="img-overlay"><h5 class="project-title">' + project.title + '</h5></div>'
    cardHtml += '</a></div></div>';
  return cardHtml;
}
