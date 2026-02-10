(function () {
  const e = React.createElement;

  function TopBar() {
    return e(
      'header',
      { className: 'top-bar' },
      e('div', { className: 'top-bar-title' }, 'BORA')
    );
  }

  function SideMenu() {
    return e(
      'aside',
      { className: 'side-menu' },
      e('nav', { 'aria-label': 'Menu principal' },
        e('ul', { className: 'menu-list' },
          e('li', { className: 'menu-item active' }, 'Tableau de bord'),
          e('li', { className: 'menu-item' }, 'Clients'),
          e('li', { className: 'menu-item' }, 'Dossiers'),
          e('li', { className: 'menu-item' }, 'Facturation')
        )
      )
    );
  }

  function ContentArea() {
    return e('main', { className: 'content-area', 'aria-label': 'Contenu principal' });
  }

  function App() {
    return e(
      'div',
      { className: 'app-shell' },
      e(TopBar),
      e(
        'div',
        { className: 'app-body' },
        e(SideMenu),
        e(ContentArea)
      )
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(e(App));
})();
