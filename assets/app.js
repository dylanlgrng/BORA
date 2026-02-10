(function () {
  const e = React.createElement;

  function TopBar() {
    const clientNumber = 'CL-2026-000184';
    const [copied, setCopied] = React.useState(false);

    function copyClientNumber() {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(clientNumber).then(function () {
          setCopied(true);
          setTimeout(function () {
            setCopied(false);
          }, 1200);
        });
      }
    }

    function ActionButton(props) {
      return e(
        'button',
        {
          type: 'button',
          className: 'top-action-button',
          'aria-label': props.label
        },
        props.label
      );
    }

    return e(
      'header',
      { className: 'top-bar' },
      e(
        'div',
        { className: 'top-bar-left' },
        e(ActionButton, { label: 'Menu' }),
        e(ActionButton, { label: 'Recherche' }),
        e(ActionButton, { label: 'Accueil' })
      ),
      e(
        'div',
        { className: 'top-bar-client' },
        e('label', { className: 'client-label', htmlFor: 'client-number' }, 'Client'),
        e('input', {
          id: 'client-number',
          className: 'client-number-field',
          type: 'text',
          readOnly: true,
          value: clientNumber
        }),
        e(
          'button',
          {
            type: 'button',
            className: 'copy-client-button',
            onClick: copyClientNumber
          },
          copied ? 'Copie' : 'Copier'
        )
      ),
      e(
        'div',
        { className: 'top-bar-right' },
        e(ActionButton, { label: 'Historique' }),
        e(ActionButton, { label: 'Fusee' }),
        e(ActionButton, { label: 'Aide ?' }),
        e(ActionButton, { label: 'Profil' })
      )
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
