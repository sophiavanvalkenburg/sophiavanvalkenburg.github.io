let container = $('#container');
for ( let i = 0; i < PORTFOLIO_DATA.length; i++ ){
  let portfolioCardHtml = generatePortfolioCard(PORTFOLIO_DATA[i]);
  container.append(portfolioCardHtml);
}

function generatePortfolioCard(portfolio) {
  const materialCaption = portfolio.material ? ` - ${portfolio.material}` : '';
  const caption = portfolio.title + materialCaption;
  return `<a href='img/${portfolio.file}' target="_blank" >
    <div class='img-card'>
      <img src='img/${portfolio.preview}' />
      <div class='img-overlay'>
        <div class='caption'>${caption}</div>
      </div>
    </div>
  </a>`;
}