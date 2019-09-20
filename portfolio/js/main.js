let container = $('#container');
for ( let i = 0; i < PORTFOLIO_DATA.length; i++ ){
  let portfolioCardHtml = generatePortfolioCard(PORTFOLIO_DATA[i]);
  container.append(portfolioCardHtml);
}

function generatePortfolioCard(portfolio) {
  return `<a href='img/${portfolio.file}' target="_blank" >
    <div class='img-card'>
      <img src='img/${portfolio.preview}' />
      <div class='img-overlay'>
        <div class='caption'>${portfolio.title} - ${portfolio.material}</div>
      </div>
    </div>
  </a>`;
}