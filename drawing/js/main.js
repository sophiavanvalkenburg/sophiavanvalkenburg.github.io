let container = $('#container');
for ( let i = 0; i < DRAWING_DATA.length; i++ ){
  let drawingCardHtml = generateDrawingCard(DRAWING_DATA[i]);
  container.append(drawingCardHtml);
}

function generateDrawingCard(drawing) {
  return `<a href='img/${drawing.file}' target="_blank" >
    <div class='img-card'>
      <img src='img/${drawing.preview}' />
      <div class='img-overlay'>
        <div class='caption'>${drawing.title} - ${drawing.material}</div>
      </div>
    </div>
  </a>`;
}