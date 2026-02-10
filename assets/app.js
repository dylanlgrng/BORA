(function () {
  const e = React.createElement;
  const APPS_ANIMATION_MS = 260;
  const PHONE_POPOVER_ANIMATION_MS = 180;

  function Icon(props) {
    if (props.name === 'menu') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('path', { d: 'M4 7h16M4 12h16M4 17h16', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round' })
      );
    }

    if (props.name === 'search') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('circle', { cx: '11', cy: '11', r: '6', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }),
        e('path', { d: 'M16 16l4 4', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round' })
      );
    }

    if (props.name === 'home') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('path', { d: 'M4 10l8-6 8 6', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
        e('path', { d: 'M6 10v9h12v-9', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linejoin': 'round' }),
        e('path', { d: 'M10 19v-5h4v5', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linejoin': 'round' })
      );
    }

    if (props.name === 'history') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('path', { d: 'M3 3v5h5', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
        e('path', { d: 'M3.1 13a9 9 0 1 0 2.2-6.1L3 8', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
      );
    }

    if (props.name === 'apps') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('rect', { x: '4', y: '4', width: '6', height: '6', rx: '1.2', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }),
        e('rect', { x: '14', y: '4', width: '6', height: '6', rx: '1.2', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }),
        e('rect', { x: '4', y: '14', width: '6', height: '6', rx: '1.2', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }),
        e('rect', { x: '14', y: '14', width: '6', height: '6', rx: '1.2', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' })
      );
    }

    if (props.name === 'help') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('path', { d: 'M9.5 9a2.5 2.5 0 115 0c0 2-2.5 2-2.5 4', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
        e('path', { d: 'M12 17.9h.01', fill: 'none', stroke: 'currentColor', 'stroke-width': '2.6', 'stroke-linecap': 'round' })
      );
    }

    if (props.name === 'profile') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('circle', { cx: '12', cy: '8', r: '3.5', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }),
        e('path', { d: 'M5 20a7 7 0 0114 0', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round' })
      );
    }

    if (props.name === 'copy') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('rect', { x: '9', y: '9', width: '10', height: '11', rx: '2', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }),
        e('rect', { x: '5', y: '5', width: '10', height: '11', rx: '2', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' })
      );
    }

    if (props.name === 'check') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('path', { d: 'M5 12l4 4L19 8', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
      );
    }

    if (props.name === 'close') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('path', { d: 'M6 6l12 12M18 6L6 18', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round' })
      );
    }

    if (props.name === 'calendar') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('rect', { x: '4', y: '5', width: '16', height: '15', rx: '2', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }),
        e('path', { d: 'M8 3v4M16 3v4M4 10h16', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round' })
      );
    }

    if (props.name === 'screen') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('rect', { x: '3.5', y: '4.5', width: '17', height: '12.5', rx: '2', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }),
        e('path', { d: 'M9 20h6M12 17v3', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round' })
      );
    }

    if (props.name === 'chevron-down') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('path', { d: 'M7 10l5 5 5-5', fill: 'none', stroke: 'currentColor', 'stroke-width': '2.2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
      );
    }

    if (props.name === 'phone') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('path', { d: 'M6.5 4.5h3l1.3 3.2-1.8 1.5a14 14 0 006.3 6.3l1.5-1.8 3.2 1.3v3a2 2 0 01-2.2 2A16.8 16.8 0 013.9 6.7 2 2 0 016.5 4.5z', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.8', 'stroke-linejoin': 'round' })
      );
    }

    if (props.name === 'mail') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('rect', { x: '3.5', y: '5.5', width: '17', height: '13', rx: '2', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }),
        e('path', { d: 'M4.5 7l7.5 6 7.5-6', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
      );
    }

    if (props.name === 'file') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('path', { d: 'M7 3.5h7l4 4v13H7z', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linejoin': 'round' }),
        e('path', { d: 'M14 3.5v4h4', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linejoin': 'round' })
      );
    }

    if (props.name === 'arrow-up-right') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('path', { d: 'M7 17L17 7M9 7h8v8', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
      );
    }

    if (props.name === 'car') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('path', { d: 'M5 13l1.6-4.2A2 2 0 018.5 7h7a2 2 0 011.9 1.3L19 13', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linejoin': 'round' }),
        e('rect', { x: '4', y: '13', width: '16', height: '5', rx: '1.5', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }),
        e('circle', { cx: '8', cy: '18', r: '1.3', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }),
        e('circle', { cx: '16', cy: '18', r: '1.3', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' })
      );
    }

    if (props.name === 'boat') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('path', { d: 'M12 4v6l6 2-1.2 3.3H7.2L6 12l6-2', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linejoin': 'round' }),
        e('path', { d: 'M3.5 18c1.2 1 2.4 1 3.6 0 1.2-1 2.4-1 3.6 0 1.2 1 2.4 1 3.6 0 1.2-1 2.4-1 3.6 0', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round' })
      );
    }

    if (props.name === 'piggy') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('path', { d: 'M4.5 13a6.5 6.5 0 016.5-6.5h3a5 5 0 014.4 2.6H21v4h-1.8c-.5 2.1-2.2 3.9-4.4 4.5H10l-1.4 1.9H7.2l.8-2.1A6.5 6.5 0 014.5 13z', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linejoin': 'round' }),
        e('circle', { cx: '15.6', cy: '11.3', r: '0.7', fill: 'currentColor' })
      );
    }

    if (props.name === 'briefcase') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('rect', { x: '4', y: '7', width: '16', height: '12', rx: '2', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }),
        e('path', { d: 'M9 7V5.8A1.8 1.8 0 0110.8 4h2.4A1.8 1.8 0 0115 5.8V7', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }),
        e('path', { d: 'M4 12h16', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' })
      );
    }

    if (props.name === 'plus') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('path', { d: 'M12 5v14M5 12h14', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round' })
      );
    }

    if (props.name === 'book') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('path', { d: 'M5 5.5A2.5 2.5 0 017.5 3H19v16H7.5A2.5 2.5 0 015 16.5z', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linejoin': 'round' }),
        e('path', { d: 'M5 6h14', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' })
      );
    }

    if (props.name === 'chart') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('path', { d: 'M4 19h16', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round' }),
        e('rect', { x: '6', y: '11', width: '3', height: '6', rx: '1', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }),
        e('rect', { x: '11', y: '8', width: '3', height: '9', rx: '1', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }),
        e('rect', { x: '16', y: '5', width: '3', height: '12', rx: '1', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' })
      );
    }

    if (props.name === 'shield') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('path', { d: 'M12 3.5l7 3v5.5c0 4.2-2.9 7.8-7 8.8-4.1-1-7-4.6-7-8.8V6.5z', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linejoin': 'round' }),
        e('path', { d: 'M9.2 12.1l1.8 1.8 3.8-3.8', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
      );
    }

    if (props.name === 'woman') {
      return e(
        'svg',
        { viewBox: '0 0 24 24', className: 'icon-svg', 'aria-hidden': 'true' },
        e('circle', { cx: '12', cy: '7', r: '3', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }),
        e('path', { d: 'M12 10v8M9 15h6M12 18v3', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round' })
      );
    }

    return null;
  }

  function IconButton(props) {
    return e(
      'button',
      {
        type: 'button',
        className: props.className || 'top-action-button',
        onClick: props.onClick,
        title: props.label,
        'aria-label': props.label
      },
      e(Icon, { name: props.icon })
    );
  }

  function TopBar(props) {
    const [copied, setCopied] = React.useState(false);
    const [isPhoneStatusMenuOpen, setIsPhoneStatusMenuOpen] = React.useState(false);
    var directoryContacts = [
      { name: 'Lucie DUPONT', role: 'Support régional', phone: '01 44 20 88 11' },
      { name: 'Marc LEROY', role: 'Gestion sinistres', phone: '01 44 20 88 22' },
      { name: 'Sophie RENAUD', role: 'Superviseur plateau', phone: '01 44 20 88 33' }
    ];
    var networkStats = [
      { scope: 'National', calls: '2 184 appels', level: 'Tension modérée' },
      { scope: 'Régional', calls: '418 appels', level: 'Fluide' },
      { scope: 'Centre utilisateur', calls: '96 appels', level: 'Sous contrôle' }
    ];
    var phoneStatusMeta = {
      pret: { label: 'Prêt', tone: 'green' },
      en_communication: { label: 'En communication', tone: 'green' },
      pause: { label: 'En pause', tone: 'orange' },
      non_pret: { label: 'Non prêt', tone: 'orange' },
      post_appel: { label: 'Traitement post appel', tone: 'yellow' }
    };
    var activePhoneStatus = phoneStatusMeta[props.phoneStatus] || phoneStatusMeta.pret;

    React.useEffect(function () {
      function onPointerDown(event) {
        var target = event.target;
        if (target && target.closest && target.closest('.phone-status-dropdown')) {
          return;
        }
        setIsPhoneStatusMenuOpen(false);
      }

      function onEscape(event) {
        if (event.key === 'Escape') {
          setIsPhoneStatusMenuOpen(false);
        }
      }

      window.addEventListener('mousedown', onPointerDown);
      window.addEventListener('keydown', onEscape);
      return function () {
        window.removeEventListener('mousedown', onPointerDown);
        window.removeEventListener('keydown', onEscape);
      };
    }, []);

    function copyClientNumber() {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(props.clientNumber).then(function () {
          setCopied(true);
          setTimeout(function () {
            setCopied(false);
          }, 900);
        });
      }
    }

    return e(
      'header',
      { className: 'top-bar' },
      e(
        'div',
        { className: 'top-bar-left' },
        e(IconButton, { label: props.isMenuOpen ? 'Fermer menu' : 'Menu', icon: props.isMenuOpen ? 'close' : 'menu', onClick: props.onMenu }),
        e(IconButton, { label: 'Accueil', icon: 'home', onClick: props.onHome })
      ),
      e(
        'div',
        { className: 'top-bar-center' },
        e(
          'div',
          { className: 'phone-tools tone-' + activePhoneStatus.tone },
          e('span', { className: 'phone-tools-divider', 'aria-hidden': 'true' }),
          e('span', { className: 'phone-tools-static-icon', 'aria-hidden': 'true' }, e(Icon, { name: 'phone' })),
          e(
            'div',
            { className: 'phone-status-dropdown' },
            e(
              'button',
              {
                type: 'button',
                className: 'phone-status-select',
                'aria-haspopup': 'listbox',
                'aria-expanded': isPhoneStatusMenuOpen,
                onClick: function () { setIsPhoneStatusMenuOpen(function (current) { return !current; }); }
              },
              e('span', { className: 'phone-status-dot tone-' + activePhoneStatus.tone, 'aria-hidden': 'true' }),
              e('span', null, activePhoneStatus.label),
              e('span', { className: isPhoneStatusMenuOpen ? 'phone-status-chevron open' : 'phone-status-chevron', 'aria-hidden': 'true' }, e(Icon, { name: 'chevron-down' }))
            ),
            isPhoneStatusMenuOpen
              ? e(
                  'div',
                  { className: 'phone-status-menu', role: 'listbox', 'aria-label': 'Etat téléphonie' },
                  Object.keys(phoneStatusMeta).map(function (statusKey) {
                    var status = phoneStatusMeta[statusKey];
                    var itemClass = props.phoneStatus === statusKey
                      ? 'phone-status-option tone-' + status.tone + ' active'
                      : 'phone-status-option tone-' + status.tone;
                    return e(
                      'button',
                      {
                        key: statusKey,
                        type: 'button',
                        role: 'option',
                        'aria-selected': props.phoneStatus === statusKey,
                        className: itemClass,
                        onClick: function () {
                          props.onPhoneStatusChange(statusKey);
                          setIsPhoneStatusMenuOpen(false);
                        }
                      },
                      e('span', { className: 'phone-status-dot tone-' + status.tone, 'aria-hidden': 'true' }),
                      e('span', null, status.label)
                    );
                  })
                )
              : null
          ),
          e('button', { type: 'button', className: 'phone-tool-btn', onClick: function () {} }, 'Ouvrir téléphone'),
          e(
            'div',
            { className: 'phone-tool-anchor' },
            e('button', { type: 'button', className: 'phone-tool-btn icon-only', onClick: props.onDirectory, 'aria-label': 'Annuaire', title: 'Annuaire' }, e(Icon, { name: 'book' })),
            props.directoryVisible
              ? e(
                  'aside',
                  { className: props.directoryOpen ? 'phone-popover open' : 'phone-popover closing', 'aria-label': 'Annuaire' },
                  e('div', { className: 'phone-popover-head' }, e('p', { className: 'phone-popover-title' }, 'Annuaire')),
                  e('div', { className: 'directory-list' },
                    directoryContacts.map(function (contact) {
                      return e(
                        'div',
                        { key: contact.phone, className: 'directory-item compact' },
                        e('div', { className: 'directory-item-main' },
                          e('p', { className: 'directory-name' }, contact.name),
                          e('p', { className: 'directory-role' }, contact.role),
                          e('p', { className: 'directory-phone' }, contact.phone)
                        ),
                        e('button', { type: 'button', className: 'secondary-small-btn' }, 'Appeler')
                      );
                    })
                  )
                )
              : null
          ),
          e(
            'div',
            { className: 'phone-tool-anchor' },
            e('button', { type: 'button', className: 'phone-tool-btn icon-only', onClick: props.onStats, 'aria-label': 'Statistiques', title: 'Statistiques' }, e(Icon, { name: 'chart' })),
            props.statsVisible
              ? e(
                  'aside',
                  { className: props.statsOpen ? 'phone-popover open' : 'phone-popover closing', 'aria-label': 'Statistiques réseau' },
                  e('div', { className: 'phone-popover-head' }, e('p', { className: 'phone-popover-title' }, 'Statistiques réseau')),
                  e('div', { className: 'network-stats-list' },
                    networkStats.map(function (item) {
                      return e(
                        'div',
                        { key: item.scope, className: 'network-stats-item compact' },
                        e('p', { className: 'network-scope' }, item.scope),
                        e('p', { className: 'network-calls' }, item.calls),
                        e('p', { className: 'network-level' }, item.level)
                      );
                    })
                  )
                )
              : null
          ),
          e('span', { className: 'phone-tools-divider', 'aria-hidden': 'true' })
        )
      ),
      e(
        'div',
        { className: 'top-bar-right' },
        e(IconButton, { label: 'Recherche', icon: 'search', onClick: props.onSearch }),
        e(IconButton, { label: 'Historique', icon: 'history', onClick: props.onHistory }),
        e(IconButton, { label: 'Aide', icon: 'help', onClick: props.onHelp }),
        e(IconButton, { label: 'Profil collaborateur', icon: 'profile', onClick: props.onProfile }),
        e(
          'div',
          { className: copied ? 'top-bar-client copied' : 'top-bar-client' },
          e('span', { className: 'client-number-text' }, props.clientNumber),
          e(
            'button',
            {
              type: 'button',
              className: copied ? 'copy-client-button copied' : 'copy-client-button',
              title: copied ? 'Copie effectuee' : 'Copier le numero client',
              'aria-label': copied ? 'Copie effectuee' : 'Copier le numero client',
              onClick: copyClientNumber
            },
            e(Icon, { name: copied ? 'check' : 'copy' })
          )
        ),
        e(IconButton, {
          label: props.isAppsOpen ? 'Fermer les applications' : 'Applications',
          icon: props.isAppsOpen ? 'close' : 'apps',
          onClick: props.onApps,
          className: 'top-action-button apps-launcher-button'
        })
      )
    );
  }

  function DirectoryModal(props) {
    var contacts = [
      { name: 'Lucie DUPONT', role: 'Support régional', phone: '01 44 20 88 11' },
      { name: 'Marc LEROY', role: 'Gestion sinistres', phone: '01 44 20 88 22' },
      { name: 'Sophie RENAUD', role: 'Superviseur plateau', phone: '01 44 20 88 33' }
    ];

    return e(
      Modal,
      {
        open: props.open,
        onClose: props.onClose,
        title: 'Annuaire téléphonique',
        subtitle: 'Sélectionnez un contact à appeler'
      },
      e('div', { className: 'directory-list' },
        contacts.map(function (contact) {
          return e(
            'div',
            { key: contact.phone, className: 'directory-item' },
            e('div', { className: 'directory-item-main' },
              e('p', { className: 'directory-name' }, contact.name),
              e('p', { className: 'directory-role' }, contact.role),
              e('p', { className: 'directory-phone' }, contact.phone)
            ),
            e('button', { type: 'button', className: 'secondary-small-btn' }, 'Appeler')
          );
        })
      )
    );
  }

  function NetworkStatsModal(props) {
    var stats = [
      { scope: 'National', calls: '2 184 appels', level: 'Tension modérée' },
      { scope: 'Régional', calls: '418 appels', level: 'Fluide' },
      { scope: 'Centre utilisateur', calls: '96 appels', level: 'Sous contrôle' }
    ];
    return e(
      Modal,
      {
        open: props.open,
        onClose: props.onClose,
        title: 'Statistiques réseau',
        subtitle: 'Suivi de charge des appels'
      },
      e('div', { className: 'network-stats-list' },
        stats.map(function (item) {
          return e(
            'div',
            { key: item.scope, className: 'network-stats-item' },
            e('p', { className: 'network-scope' }, item.scope),
            e('p', { className: 'network-calls' }, item.calls),
            e('p', { className: 'network-level' }, item.level)
          );
        })
      )
    );
  }

  function LeftMenuDrawer(props) {
    return e(
      'aside',
      { className: props.open ? 'left-menu-drawer open' : 'left-menu-drawer', 'aria-label': 'Menu principal BORA' },
      e(
        'div',
        { className: 'left-menu-drawer-inner' },
        e('h2', { className: 'drawer-title' }, 'Menu rapide'),
        e('p', { className: 'drawer-subtitle' }, 'Actions Métier et Accès directs'),
        e('h3', { className: 'drawer-section-title' }, 'Actions rapides'),
        e('button', { type: 'button', className: 'drawer-item', onClick: function () { props.onNavigate('Fiche client'); props.onClose(); } }, 'Nouveau contrat'),
        e('button', { type: 'button', className: 'drawer-item', onClick: function () { props.onNavigate('Fiche client'); props.onClose(); } }, 'Creer une note client'),
        e('button', { type: 'button', className: 'drawer-item', onClick: function () { props.onNavigate('Fiche client'); props.onClose(); } }, 'Creer un rappel'),
        e('h3', { className: 'drawer-section-title' }, 'Applications BORA'),
        e('button', { type: 'button', className: 'drawer-item', onClick: function () { props.onNavigate('Contrats'); props.onClose(); } }, 'BORA Contrats'),
        e('button', { type: 'button', className: 'drawer-item', onClick: function () { props.onNavigate('Sinistres'); props.onClose(); } }, 'BORA Sinistres'),
        e('button', { type: 'button', className: 'drawer-item', onClick: function () { props.onNavigate('Facturation'); props.onClose(); } }, 'BORA Facturation')
      )
    );
  }

  function ContentArea(props) {
    const [quickMode, setQuickMode] = React.useState('Conseille');
    const [quickView, setQuickView] = React.useState('Foyer');
    const [quickOpen, setQuickOpen] = React.useState(false);
    const [memberQuery, setMemberQuery] = React.useState('');
    const [contractTab, setContractTab] = React.useState('vehicule');
    const [isAlertOpen, setIsAlertOpen] = React.useState(true);
    const [isInfoOpen, setIsInfoOpen] = React.useState(true);
    const memberCardsRef = React.useRef(null);
    const [canScrollMembersLeft, setCanScrollMembersLeft] = React.useState(false);
    const [canScrollMembersRight, setCanScrollMembersRight] = React.useState(false);

    function updateMemberCardsScrollState() {
      var container = memberCardsRef.current;
      if (!container) {
        setCanScrollMembersLeft(false);
        setCanScrollMembersRight(false);
        return;
      }
      var maxScrollLeft = container.scrollWidth - container.clientWidth;
      setCanScrollMembersLeft(container.scrollLeft > 2);
      setCanScrollMembersRight(maxScrollLeft - container.scrollLeft > 2);
    }

    React.useEffect(function () {
      if (props.page !== 'Fiche client') {
        return;
      }
      window.requestAnimationFrame(updateMemberCardsScrollState);
      function onResize() {
        updateMemberCardsScrollState();
      }
      window.addEventListener('resize', onResize);
      return function () {
        window.removeEventListener('resize', onResize);
      };
    }, [props.page]);

    if (props.page === 'Accueil') {
      return e(
        'main',
        { className: 'content-area tools-page', 'aria-label': 'Page accueil BORA' },
        e('section', { className: 'content-header' },
          e('h1', { className: 'content-title' }, 'Accueil BORA'),
          e('p', { className: 'content-subtitle' }, 'Ouvrez un outil métier disponible')
        ),
        e(
          'section',
          { className: 'tool-suggestions' },
          e('p', { className: 'tool-suggestions-title' }, 'Outils métier disponibles'),
          e(
            'button',
            {
              type: 'button',
              className: 'tool-suggestion-card open',
              onClick: function () { props.onGoMemberSearch(); }
            },
            e('span', { className: 'tool-suggestion-name' }, 'Recherche de societaire'),
            e('span', { className: 'tool-suggestion-desc' }, 'Rechercher un societaire et ouvrir sa fiche')
          )
        )
      );
    }

    if (props.page === 'Recherche societaire') {
      var normalizedMemberQuery = memberQuery.trim().toLowerCase();
      var showClaireResult = normalizedMemberQuery.length === 0
        || 'claire martin'.indexOf(normalizedMemberQuery) !== -1
        || 'sc-482019'.indexOf(normalizedMemberQuery) !== -1;

      return e(
        'main',
        { className: 'content-area tools-page', 'aria-label': 'Page recherche societaire' },
        e('section', { className: 'content-header' },
          e('h1', { className: 'content-title' }, 'Recherche sociétaire'),
          e('p', { className: 'content-subtitle' }, 'Recherchez un sociétaire puis ouvrez sa fiche')
        ),
        e(
          'section',
          { className: 'search-page-box tools-search-box' },
          e('input', {
            className: 'search-page-input',
            type: 'search',
            value: memberQuery,
            onChange: function (event) { setMemberQuery(event.target.value); },
            placeholder: 'Nom, prenom ou identifiant societaire'
          }),
          e('button', { type: 'button', className: 'search-page-button' }, 'Rechercher')
        ),
        e(
          'section',
          { className: 'tool-workspace-card' },
          showClaireResult
            ? e(
                'button',
                {
                  type: 'button',
                  className: 'member-result-card',
                  onClick: function () { props.onOpenClient('Claire MARTIN'); }
                },
                e('span', { className: 'member-result-name' }, 'Claire MARTIN'),
                e('span', { className: 'member-result-id' }, 'SC-482019')
              )
            : e('p', { className: 'tool-workspace-note' }, 'Aucun Résultat')
        )
      );
    }

    if (props.page === 'Guide relation client') {
      return e(
        'main',
        { className: 'content-area', 'aria-label': 'Guide relation client' },
        e('section', { className: 'content-header' },
          e('h1', { className: 'content-title' }, 'Guide relation client'),
          e('p', { className: 'content-subtitle' }, props.selectedTopic ? 'Détail du sujet : ' + props.selectedTopic : 'Sélectionnez un sujet depuis la fiche client')
        ),
        e(
          'section',
          { className: 'content-empty topic-detail-panel' },
          e('p', { className: 'topic-detail-line' }, 'Contexte client, points de vigilance, argumentaire et plan d action'),
          e('p', { className: 'topic-detail-line' }, 'Cette page regroupe les informations utiles pour preparer l echange')
        )
      );
    }

    var topicItems = [
      'Verifier les besoins en protection habitation',
      'Proposer un point sur la garantie conducteur',
      'Confirmer le mode de paiement prefere'
    ];

    var householdMembers = [
      { firstName: 'Claire', lastName: 'MARTIN', age: 42, role: 'Societaire' },
      { firstName: 'Julien', lastName: 'MARTIN', age: 44, role: 'Conjoint' },
      { firstName: 'Emma', lastName: 'MARTIN', age: 14, role: 'Enfant' },
      { firstName: 'Lucas', lastName: 'MARTIN', age: 11, role: 'Enfant' },
      { firstName: 'Nina', lastName: 'MARTIN', age: 7, role: 'Enfant' },
      { firstName: 'Leo', lastName: 'MARTIN', age: 4, role: 'Enfant' }
    ];

    var contractTabs = [
      { key: 'vehicule', label: 'Véhicule', tone: 'vehicle', hasClaim: true },
      { key: 'habitation', label: 'Habitation', tone: 'home', hasClaim: false },
      { key: 'praxis', label: 'Praxis sol', tone: 'praxis', hasClaim: false },
      { key: 'services', label: 'Services', tone: 'services', hasClaim: true },
      { key: 'epargne', label: 'Épargne', tone: 'savings', hasClaim: false },
      { key: 'pro', label: 'Pro', tone: 'pro', hasClaim: false }
    ];
    var contractsByTab = {
      vehicule: [
        {
          id: 'CT-VA-204891',
          icon: 'car',
          headline: 'Peugeot 3008 - 24 rue du Louvre, Paris',
          contractType: 'Auto Tous Risques',
          details: ['Conducteur principal : Claire MARTIN', 'Franchise : 250 EUR', 'Echeance : 14/03/2026']
        },
        {
          id: 'CT-VM-671244',
          icon: 'boat',
          headline: 'Yamaha MT-07 - Usage loisir',
          contractType: 'Moto Loisir',
          details: ['Bonus-malus : 0.68', 'Assistance 0 km : Active']
        }
      ],
      habitation: [
        {
          id: 'CT-HB-330517',
          icon: 'home',
          headline: 'Residence principale - 24 rue du Louvre, Paris',
          contractType: 'Habitation Confort',
          details: ['Surface : 92 m2', 'Capital mobilier : 55 000 EUR', 'Protection juridique : Incluse']
        }
      ],
      praxis: [
        {
          id: 'CT-PR-991203',
          icon: 'shield',
          headline: 'Protection individuelle foyer',
          contractType: 'Praxis Sol',
          details: ['Garantie accident : Famille', 'Indemnisation journaliere : 45 EUR']
        }
      ],
      services: [
        {
          id: 'CT-SV-776401',
          icon: 'file',
          headline: 'Assistance et services quotidiens',
          contractType: 'Pack Services',
          details: ['Assistance 0 km', 'Depannage domicile', 'Protection juridique famille']
        }
      ],
      epargne: [
        {
          id: 'CT-EP-112745',
          icon: 'piggy',
          headline: 'Plan epargne Claire MARTIN',
          contractType: 'Epargne Avenir',
          details: ['Versement mensuel : 150 EUR', 'Profil : Equilibre']
        }
      ],
      pro: [
        {
          id: 'CT-PRO-540221',
          icon: 'briefcase',
          headline: 'Activite auto-entrepreneur',
          contractType: 'Responsabilite Civile Pro',
          details: ['Secteur : Conseil', 'Plafond garantie : 500 000 EUR']
        }
      ]
    };
    var activeContracts = contractsByTab[contractTab] || [];
    var activeTabMeta = contractTabs.find(function (tab) { return tab.key === contractTab; }) || contractTabs[0];

    return e(
      'div',
      { className: 'fiche-content-layout', 'aria-label': 'Fiche client' },
      e(
        'aside',
        { className: 'client-info-sidebar', 'aria-label': 'Informations principales du client' },
        e(
          'div',
          { className: 'client-info-content' },
          e(
            'section',
            { className: 'client-identity-block' },
            e('p', { className: 'client-name' }, props.clientName || 'Claire MARTIN'),
            e('p', { className: 'client-member-id' }, 'SC-482019')
          ),
          e(
            'section',
            { className: 'client-alert-card' },
            e('div', { className: 'notice-card notice-alert' },
              e('div', { className: 'notice-header' },
                e('p', { className: 'notice-title' }, 'Alertes'),
                e(
                  'button',
                  {
                    type: 'button',
                    className: isAlertOpen ? 'notice-toggle open' : 'notice-toggle',
                    'aria-label': isAlertOpen ? 'Réduire alertes' : 'Ouvrir alertes',
                    'aria-expanded': isAlertOpen,
                    onClick: function () { setIsAlertOpen(function (current) { return !current; }); }
                  },
                  e(Icon, { name: 'chevron-down' })
                )
              ),
              isAlertOpen
                ? e('p', { className: 'notice-paragraph' }, 'Le conseiller renseigne ici les alertes du contrat en cours, avec un texte libre et concis adapte a la situation client.')
                : null
            )
          ),
          e(
            'section',
            { className: 'client-info-card' },
            e('div', { className: 'notice-card notice-info' },
              e('div', { className: 'notice-header' },
                e('p', { className: 'notice-title' }, 'Informations contrat'),
                e(
                  'button',
                  {
                    type: 'button',
                    className: isInfoOpen ? 'notice-toggle open' : 'notice-toggle',
                    'aria-label': isInfoOpen ? 'Réduire informations contrat' : 'Ouvrir informations contrat',
                    'aria-expanded': isInfoOpen,
                    onClick: function () { setIsInfoOpen(function (current) { return !current; }); }
                  },
                  e(Icon, { name: 'chevron-down' })
                )
              ),
              isInfoOpen
                ? e('p', { className: 'notice-paragraph' }, 'Le conseiller renseigne ici les informations utiles a partager pendant l echange, sous forme de paragraphe simple.')
                : null
            )
          ),
          e(
            'section',
            { className: 'client-summary-block' },
            e('p', { className: 'client-section-title' }, 'Synthèse client'),
            e('ul', { className: 'summary-simple-list' },
              e('li', null, e('span', { className: 'summary-label' }, 'Foyer'), e('span', { className: 'summary-value' }, 'Couple avec 2 enfants')),
              e('li', null, e('span', { className: 'summary-label' }, 'Ancienneté'), e('span', { className: 'summary-value' }, '7 ans')),
              e('li', null, e('span', { className: 'summary-label' }, 'Paiement'), e('span', { className: 'summary-value' }, 'Mensuel'))
            )
          ),
          e(
            'section',
            { className: 'client-delegation-block' },
            e('p', { className: 'client-section-title' }, 'Délégation conseil'),
            e(
              'div',
              { className: 'delegation-card' },
              e('p', { className: 'delegation-location' }, 'BORA Paris Centre'),
              e('p', { className: 'delegation-address' }, '24 rue du Louvre, Paris'),
              e(
                'button',
                { type: 'button', className: 'delegation-rdv-button' },
                e(Icon, { name: 'calendar' }),
                e('span', null, 'Prendre rendez-vous')
              )
            )
          ),
          e(
            'section',
            { className: 'client-topics-block' },
            e('p', { className: 'client-section-title' }, 'Vous pourriez en parler'),
            e('ul', { className: 'topics-list topic-cards-list' },
              topicItems.map(function (topic) {
                return e(
                  'li',
                  { key: topic, className: 'topic-card-item' },
                  e(
                    'div',
                    { className: 'topic-card-head' },
                    e('p', { className: 'topic-card-text' }, topic),
                    e('span', { className: 'topic-info-badge', 'aria-hidden': 'true' }, 'i')
                  ),
                  e(
                    'div',
                    { className: 'topic-hover-popover' },
                    e('p', { className: 'topic-popover-title' }, 'En savoir plus'),
                    e('p', { className: 'topic-popover-text' }, 'Acceder aux informations detaillees.'),
                    e(
                      'button',
                      {
                        type: 'button',
                        className: 'topic-open-button',
                        onClick: function () { props.onOpenTopic(topic); }
                      },
                      'Ouvrir la page'
                    )
                  )
                );
              })
            )
          )
        ),
        e(
          'section',
          { className: 'quick-settings-block', 'aria-label': 'Parametres rapides' },
          e(
            'div',
            { className: 'quick-settings-shell' },
            e(
              'button',
              {
                type: 'button',
                className: quickOpen ? 'quick-settings-toggle open' : 'quick-settings-toggle',
                onClick: function () { setQuickOpen(function (current) { return !current; }); },
                'aria-expanded': quickOpen
              },
              e('span', { className: 'quick-settings-toggle-left' }, e(Icon, { name: 'screen' }), e('span', null, 'Mode et vue')),
              e('span', { className: 'quick-settings-chevron', 'aria-hidden': 'true' }, e(Icon, { name: 'chevron-down' }))
            ),
            quickOpen
              ? e(
                  'div',
                  { className: 'quick-settings-content' },
                  e(
                    'div',
                    { className: 'quick-setting-row' },
                    e('span', { className: 'quick-setting-label' }, 'Mode'),
                    e(
                      'div',
                      { className: 'quick-segments' },
                      e('button', { type: 'button', className: quickMode === 'Conseille' ? 'quick-segment active' : 'quick-segment', onClick: function () { setQuickMode('Conseille'); } }, 'Conseille'),
                      e('button', { type: 'button', className: quickMode === 'Partage' ? 'quick-segment active' : 'quick-segment', onClick: function () { setQuickMode('Partage'); } }, 'Partage')
                    )
                  ),
                  e(
                    'div',
                    { className: 'quick-setting-row' },
                    e('span', { className: 'quick-setting-label' }, 'Vue'),
                    e(
                      'div',
                      { className: 'quick-segments' },
                      e('button', { type: 'button', className: quickView === 'Foyer' ? 'quick-segment active' : 'quick-segment', onClick: function () { setQuickView('Foyer'); } }, 'Foyer'),
                      e('button', { type: 'button', className: quickView === 'Personne' ? 'quick-segment active' : 'quick-segment', onClick: function () { setQuickView('Personne'); } }, 'Personne')
                    )
                  )
                )
              : null
          )
        )
      ),
      e(
        'main',
        { className: 'content-area fiche-main', 'aria-label': 'Fiche client' },
        e(
          'section',
          { className: 'fiche-main-grid' },
          e(
            'div',
            { className: 'fiche-right-stack' },
            e(
              'article',
              { className: 'fiche-card member-card', 'aria-label': 'Membre' },
              e('div', { className: 'fiche-card-header member-header' },
                e('div', { className: 'member-title-line' },
                  e('div', { className: 'member-title-main' },
                    e('div', { className: 'member-title-row' },
                      e('h2', { className: 'fiche-card-title' }, 'Foyer'),
                      e('p', { className: 'member-count-subtitle' }, householdMembers.length + ' membres dans ce foyer')
                    ),
                    e('p', { className: 'member-header-address' }, '24 rue du Louvre, Residence Les Tilleuls, Appartement 3B, 75001 Paris')
                  )
                ),
                e('div', { className: 'member-header-actions' },
                  e(
                    'button',
                    { type: 'button', className: 'secondary-small-btn member-edit-btn' },
                    'Modifier les infos'
                  ),
                  e(
                    'button',
                    { type: 'button', className: 'other-household-btn header-other-household-btn' },
                    e(Icon, { name: 'home' }),
                    e('span', null, '1 autre foyer connu')
                  )
                )
              ),
              e(
                'div',
                { className: 'member-cards-strip' },
                e('div', { className: 'member-cards-grid', ref: memberCardsRef, onScroll: updateMemberCardsScrollState },
                  householdMembers.map(function (member) {
                    var cardClass = member.role === 'Enfant' ? 'member-person-card member-person-card-child' : 'member-person-card member-person-card-adult';
                    return e(
                      'div',
                      { key: member.firstName + member.lastName, className: cardClass },
                      member.role === 'Societaire' ? e('span', { className: 'member-soc-badge' }, 'SOC') : null,
                      e('span', { className: 'member-avatar', 'aria-hidden': 'true' }, e(Icon, { name: 'profile' })),
                      e('p', { className: 'member-name' }, member.firstName + ' ' + member.lastName),
                      e('p', { className: 'member-age' }, member.age + ' ans')
                    );
                  })
                ),
                canScrollMembersLeft
                  ? e(
                      'button',
                      {
                        type: 'button',
                        className: 'member-cards-arrow left',
                        'aria-label': 'Defiler les membres vers la gauche',
                        onClick: function () {
                          if (memberCardsRef.current) {
                            memberCardsRef.current.scrollBy({ left: -180, behavior: 'smooth' });
                          }
                        }
                      },
                      e('span', { className: 'member-cards-arrow-icon' }, e(Icon, { name: 'chevron-down' }))
                    )
                  : null,
                e(
                  'button',
                  {
                    type: 'button',
                    className: canScrollMembersRight ? 'member-cards-arrow right' : 'member-cards-arrow right disabled',
                    disabled: !canScrollMembersRight,
                    'aria-label': 'Defiler les membres',
                    onClick: function () {
                      if (memberCardsRef.current) {
                        memberCardsRef.current.scrollBy({ left: 180, behavior: 'smooth' });
                      }
                    }
                  },
                  e('span', { className: 'member-cards-arrow-icon' }, e(Icon, { name: 'chevron-down' }))
                )
              ),
              e(
                'section',
                { className: 'member-data-block member-overview-block' },
                e('div', { className: 'member-section-header' },
                  e('p', { className: 'member-block-title' }, 'Sociétaire')
                ),
                e('div', { className: 'member-data-grid inline-overview' },
                  e('div', { className: 'member-data-item' }, e('span', { className: 'member-data-label' }, 'Nom et prénom'), e('span', { className: 'member-data-value' }, 'Claire MARTIN')),
                  e('div', { className: 'member-data-item' }, e('span', { className: 'member-data-label' }, 'N° sociétaire'), e('span', { className: 'member-data-value' }, 'SC-482019')),
                  e('div', { className: 'member-data-item' }, e('span', { className: 'member-data-label' }, 'Représenté par'), e('span', { className: 'member-data-value' }, 'Paul Bernard')),
                  e('div', { className: 'member-data-item' }, e('span', { className: 'member-data-label' }, 'Naissance'), e('span', { className: 'member-data-value' }, '12/04/1984')),
                  e('div', { className: 'member-data-item' }, e('span', { className: 'member-data-label' }, 'Situation'), e('span', { className: 'member-data-value' }, 'Mariée')),
                  e('div', { className: 'member-data-item' }, e('span', { className: 'member-data-label' }, 'Emploi'), e('span', { className: 'member-data-value' }, 'Cadre commerciale'))
                ),
                e('div', { className: 'member-section-header contact-section-header' },
                  e('p', { className: 'member-block-title' }, 'Contacts'),
                  e('span', { className: 'consent-badge' }, 'Consentement saisi')
                ),
                e('div', { className: 'member-contact-line' },
                  e('div', { className: 'contact-channel-item' }, e('span', { className: 'member-data-label' }, 'Portable'), e('span', { className: 'member-data-value' }, '06 44 21 33 98'), e('button', { type: 'button', className: 'contact-channel-btn', title: 'Contacter sur mobile', 'aria-label': 'Contacter sur mobile' }, e(Icon, { name: 'phone' }))),
                  e('div', { className: 'contact-channel-item' }, e('span', { className: 'member-data-label' }, 'Fixe'), e('span', { className: 'member-data-value' }, '01 42 66 19 70'), e('button', { type: 'button', className: 'contact-channel-btn', title: 'Contacter sur fixe', 'aria-label': 'Contacter sur fixe' }, e(Icon, { name: 'phone' }))),
                  e('div', { className: 'contact-channel-item' }, e('span', { className: 'member-data-label' }, 'Mail'), e('span', { className: 'member-data-value' }, 'claire.martin@email.fr'), e('button', { type: 'button', className: 'contact-channel-btn', title: 'Contacter par mail', 'aria-label': 'Contacter par mail' }, e(Icon, { name: 'mail' }))),
                  e('div', { className: 'contact-channel-item' }, e('span', { className: 'member-data-label' }, 'Messagerie sécurisée'), e('span', { className: 'member-data-value' }, 'Espace client BORA'), e('button', { type: 'button', className: 'contact-channel-btn', title: 'Contacter via messagerie sécurisée', 'aria-label': 'Contacter via messagerie sécurisée' }, e(Icon, { name: 'shield' })))
                )
              )
            ),
            e(
              'article',
              { className: 'fiche-card contracts-card', 'aria-label': 'Contrats et services' },
              e('div', { className: 'fiche-card-header contracts-header' },
                e('h2', { className: 'fiche-card-title' }, 'Contrats et services')
              ),
              e('div', { className: 'contracts-group contracts-tabs-group' },
                e('div', { className: 'contracts-tabs-header' },
                  null
                ),
                e('div', { className: 'contract-tabs', role: 'tablist', 'aria-label': 'Catégories contrats' },
                contractTabs.map(function (tab) {
                  var contractCount = (contractsByTab[tab.key] || []).length;
                  var tabClass = contractTab === tab.key
                    ? 'contract-tab tone-' + tab.tone + ' active'
                    : 'contract-tab tone-' + tab.tone;
                  return e(
                    'button',
                    {
                      key: tab.key,
                      type: 'button',
                      role: 'tab',
                      'aria-selected': contractTab === tab.key,
                      className: tabClass,
                      onClick: function () { setContractTab(tab.key); }
                    },
                    e('span', { className: 'contract-tab-label' }, tab.label),
                    contractCount > 0 ? e('span', { className: 'contract-tab-badge count' }, String(contractCount)) : null,
                    tab.hasClaim ? e('span', { className: 'contract-tab-badge claim', title: 'Sinistre en cours', 'aria-label': 'Sinistre en cours' }, '⚡') : null
                  );
                })
                )
              ),
              e(
                'section',
                { className: 'contracts-content-panel' },
                e('ul', { className: 'contract-list' },
                  activeContracts.length === 0
                    ? e('li', { className: 'contract-item empty' }, 'Aucun contrat sur cette catégorie')
                    : null,
                  activeContracts.map(function (contract) {
                    return e(
                      'li',
                      { key: contract.id, className: 'contract-item tone-' + activeTabMeta.tone },
                      e('div', { className: 'contract-item-col contract-item-col-primary' },
                        e('span', { className: 'contract-item-icon', 'aria-hidden': 'true' }, e(Icon, { name: contract.icon })),
                        e('p', { className: 'contract-item-id' }, contract.id)
                      ),
                      e('div', { className: 'contract-item-col contract-item-col-main' },
                        e('button', { type: 'button', className: 'contract-item-main contract-item-link' }, contract.headline),
                        e('p', { className: 'contract-item-type' }, contract.contractType)
                      ),
                      e('div', { className: 'contract-item-col contract-item-col-extra' },
                        e('ul', { className: 'contract-item-details' },
                          contract.details.map(function (detail) {
                            return e('li', { key: contract.id + detail }, detail);
                          })
                        )
                      )
                    );
                  })
                ),
                e(
                  'button',
                  { type: 'button', className: 'contract-add-wide tone-' + activeTabMeta.tone },
                  e(Icon, { name: 'plus' }),
                  e('span', null, 'Ajouter un contrat ' + activeTabMeta.label)
                )
              ),
              e('div', { className: 'contracts-group contracts-tools-group' },
                e('div', { className: 'contract-actions' },
                  e('button', { type: 'button', className: 'contract-action tool-action' }, e(Icon, { name: 'arrow-up-right' }), e('span', null, 'Résiliation ou radiation')),
                  e('button', { type: 'button', className: 'contract-action tool-action' }, e(Icon, { name: 'arrow-up-right' }), e('span', null, 'Consulter RPC et sinistres'))
                )
              )
            )
          ),
          e(
            'article',
            { className: 'relation-panel', 'aria-label': 'Relation commerciale et échanges' },
            e('div', { className: 'fiche-card-header' },
              e('h2', { className: 'fiche-card-title' }, 'Relation commerciale et échanges')
            ),
            e('div', { className: 'relation-columns' },
              e('section', { className: 'relation-lane' }, e('p', { className: 'relation-lane-title' }, 'Derniers échanges'), e('ul', { className: 'relation-list' }, e('li', null, 'Appel de suivi habitation à 09:20'), e('li', null, 'Mail reçu sur l échéance auto'))),
              e('section', { className: 'relation-lane' }, e('p', { className: 'relation-lane-title' }, 'En cours'), e('ul', { className: 'relation-list' }, e('li', null, 'Simulation de contrat jeune conducteur'))),
              e('section', { className: 'relation-lane' }, e('p', { className: 'relation-lane-title' }, 'À venir'), e('ul', { className: 'relation-list' }, e('li', null, 'Relance pièce justificative vendredi'))),
              e('section', { className: 'relation-lane' }, e('p', { className: 'relation-lane-title' }, 'Pas intéressé'), e('ul', { className: 'relation-list' }, e('li', null, 'Extension de garantie smartphone'))),
              e('section', { className: 'relation-lane' }, e('p', { className: 'relation-lane-title' }, 'À la concurrence'), e('ul', { className: 'relation-list' }, e('li', null, 'Devis santé externe à comparer')))
            ),
            e('div', { className: 'relation-actions' },
              e('button', { type: 'button', className: 'relation-action' }, 'GED'),
              e('button', { type: 'button', className: 'relation-action' }, 'Historique'),
              e('button', { type: 'button', className: 'relation-action' }, 'Minalea'),
              e('button', { type: 'button', className: 'relation-action' }, 'Détails'),
              e('button', { type: 'button', className: 'relation-action' }, 'Affaire')
            )
          )
        )
      )
    );
  }

  function Modal(props) {
    if (!props.open) {
      return null;
    }

    return e(
      'div',
      { className: 'modal-layer', role: 'dialog', 'aria-modal': 'true', 'aria-label': props.title },
      e('button', { type: 'button', className: 'modal-backdrop', 'aria-label': 'Fermer', onClick: props.onClose }),
      e(
        'section',
        { className: 'modal-card' },
        e(
          'div',
          { className: 'modal-header' },
          e('h2', { className: 'modal-title' }, props.title),
          e(IconButton, { label: 'Fermer', icon: 'close', onClick: props.onClose, className: 'modal-close-button' })
        ),
        e('p', { className: 'modal-subtitle' }, props.subtitle),
        props.children
      )
    );
  }

  function HistoryModal(props) {
    return e(
      Modal,
      {
        open: props.open,
        onClose: props.onClose,
        title: 'Historique de la fiche client',
        subtitle: 'Toutes les modifications enregistrees sur ce dossier'
      },
      e('ul', { className: 'timeline-list' },
        e('li', { className: 'timeline-item' }, e('strong', null, '10:22'), ' - Contrat auto mis a jour (franchise).'),
        e('li', { className: 'timeline-item' }, e('strong', null, '09:42'), ' - Contrat habitation consulte.'),
        e('li', { className: 'timeline-item' }, e('strong', null, '09:18'), ' - Adresse postale modifiee.'),
        e('li', { className: 'timeline-item' }, e('strong', null, '08:57'), ' - Prime auto recalculee.'),
        e('li', { className: 'timeline-item' }, e('strong', null, '08:21'), ' - Piece justificative ajoutee.')
      )
    );
  }

  function HelpModal(props) {
    var helpByPage = {
      'Fiche client': 'Consultez les contrats, la relation commerciale et les operations recentes',
      Accueil: 'Ouvrez un outil metier depuis cette page',
      'Recherche societaire': 'Recherchez un societaire puis ouvrez sa fiche',
      'Guide relation client': 'Consultez les informations detaillees pour preparer l echange'
    };

    return e(
      Modal,
      {
        open: props.open,
        onClose: props.onClose,
        title: 'Aide contextuelle',
        subtitle: helpByPage[props.page] || 'Aide indisponible pour cette page'
      },
      e('div', { className: 'help-list' },
        e('p', { className: 'help-line' }, 'F1 : ouvrir l aide contextuelle'),
        e('p', { className: 'help-line' }, 'Ctrl+K : ouvrir la recherche'),
        e('p', { className: 'help-line' }, 'Support: assistance@bora.local')
      )
    );
  }

  function ProfilePopover(props) {
    if (!props.open) {
      return null;
    }

    return e(
      'aside',
      { className: 'profile-popover', 'aria-label': 'Compte collaborateur' },
      e('h2', { className: 'popover-title' }, 'Compte collaborateur'),
      e('p', { className: 'popover-subtitle' }, 'Claire Martin - Gestionnaire contrats'),
      e('button', { type: 'button', className: 'profile-action' }, 'Mon profil'),
      e('button', { type: 'button', className: 'profile-action' }, 'Securite du compte'),
      e('button', { type: 'button', className: 'profile-action' }, 'Contacter l assistance'),
      e('button', { type: 'button', className: 'profile-action' }, 'Signaler un bug'),
      e('button', { type: 'button', className: 'profile-action' }, 'Proposer une amelioration'),
      e('button', { type: 'button', className: 'profile-action danger' }, 'Se deconnecter')
    );
  }

  function AppsSidebar(props) {
    if (!props.visible) {
      return null;
    }

    var apps = [
      { key: 'CT', name: 'BORA Contrats' },
      { key: 'SI', name: 'BORA Sinistres' },
      { key: 'FA', name: 'BORA Facturation' },
      { key: 'DO', name: 'BORA Documents' },
      { key: 'PI', name: 'BORA Pilotage' },
      { key: 'RM', name: 'BORA Relation client' }
    ];

    return e(
      'aside',
      { className: props.open ? 'apps-sidebar open' : 'apps-sidebar closing', 'aria-label': 'Lanceur applications' },
      e('div', { className: 'apps-sidebar-header' },
        e('h2', { className: 'apps-sidebar-title' }, 'Applications')
      ),
      e('div', { className: 'apps-grid' },
        apps.map(function (app) {
          return e(
            'button',
            { key: app.key, type: 'button', className: 'app-tile', onClick: props.onClose },
            e('span', { className: 'app-tile-icon' }, app.key),
            e('span', { className: 'app-tile-name' }, app.name)
          );
        })
      )
    );
  }

  function App() {
    const [activePage, setActivePage] = React.useState('Fiche client');
    const [selectedClient, setSelectedClient] = React.useState('Claire MARTIN');
    const [selectedTopic, setSelectedTopic] = React.useState(null);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isHistoryOpen, setIsHistoryOpen] = React.useState(false);
    const [isHelpOpen, setIsHelpOpen] = React.useState(false);
    const [isProfileOpen, setIsProfileOpen] = React.useState(false);
    const [isAppsOpen, setIsAppsOpen] = React.useState(false);
    const [isAppsVisible, setIsAppsVisible] = React.useState(false);
    const [phoneStatus, setPhoneStatus] = React.useState('pret');
    const [isAgentBannerOpen, setIsAgentBannerOpen] = React.useState(false);
    const [isDirectoryOpen, setIsDirectoryOpen] = React.useState(false);
    const [isDirectoryVisible, setIsDirectoryVisible] = React.useState(false);
    const [isStatsOpen, setIsStatsOpen] = React.useState(false);
    const [isStatsVisible, setIsStatsVisible] = React.useState(false);
    const appsCloseTimerRef = React.useRef(null);
    const directoryCloseTimerRef = React.useRef(null);
    const statsCloseTimerRef = React.useRef(null);
    const clientNumber = 'CL-2026-000184';

    function openApps() {
      if (appsCloseTimerRef.current) {
        window.clearTimeout(appsCloseTimerRef.current);
        appsCloseTimerRef.current = null;
      }
      setIsAppsVisible(true);
      setIsAppsOpen(true);
    }

    function closeApps() {
      setIsAppsOpen(false);
      if (appsCloseTimerRef.current) {
        window.clearTimeout(appsCloseTimerRef.current);
      }
      appsCloseTimerRef.current = window.setTimeout(function () {
        setIsAppsVisible(false);
        appsCloseTimerRef.current = null;
      }, APPS_ANIMATION_MS);
    }

    function closeTransientLayers() {
      setIsHistoryOpen(false);
      setIsHelpOpen(false);
      setIsProfileOpen(false);
      closeApps();
      closeDirectory();
      closeStats();
    }

    function goHome() {
      setActivePage('Accueil');
      closeTransientLayers();
    }

    function goSearch() {
      setActivePage('Recherche societaire');
      closeTransientLayers();
    }

    function goMemberSearch() {
      setActivePage('Recherche societaire');
      closeTransientLayers();
    }

    function openClientFiche(clientName) {
      setSelectedClient(clientName);
      setActivePage('Fiche client');
      closeTransientLayers();
    }

    function openTopicDetails(topic) {
      setSelectedTopic(topic);
      setActivePage('Guide relation client');
      closeTransientLayers();
    }

    function openHistory() {
      setIsHistoryOpen(true);
      setIsHelpOpen(false);
      setIsProfileOpen(false);
      closeApps();
    }

    function openHelp() {
      setIsHelpOpen(true);
      setIsHistoryOpen(false);
      setIsProfileOpen(false);
      closeApps();
    }

    function toggleProfile() {
      setIsProfileOpen(function (current) { return !current; });
      setIsHistoryOpen(false);
      setIsHelpOpen(false);
      closeApps();
    }

    function toggleApps() {
      if (isAppsOpen) {
        closeApps();
      } else {
        openApps();
      }
      setIsHistoryOpen(false);
      setIsHelpOpen(false);
      setIsProfileOpen(false);
    }

    function toggleMenu() {
      setIsMenuOpen(function (current) { return !current; });
    }

    function toggleAgentBanner() {
      setIsAgentBannerOpen(function (current) { return !current; });
    }

    function openDirectory() {
      if (isDirectoryOpen) {
        closeDirectory();
        return;
      }
      if (directoryCloseTimerRef.current) {
        window.clearTimeout(directoryCloseTimerRef.current);
        directoryCloseTimerRef.current = null;
      }
      closeStats();
      setIsDirectoryVisible(true);
      setIsDirectoryOpen(true);
      setIsHistoryOpen(false);
      setIsHelpOpen(false);
      setIsProfileOpen(false);
      closeApps();
    }

    function closeDirectory() {
      setIsDirectoryOpen(false);
      if (directoryCloseTimerRef.current) {
        window.clearTimeout(directoryCloseTimerRef.current);
      }
      directoryCloseTimerRef.current = window.setTimeout(function () {
        setIsDirectoryVisible(false);
        directoryCloseTimerRef.current = null;
      }, PHONE_POPOVER_ANIMATION_MS);
    }

    function openStats() {
      if (isStatsOpen) {
        closeStats();
        return;
      }
      if (statsCloseTimerRef.current) {
        window.clearTimeout(statsCloseTimerRef.current);
        statsCloseTimerRef.current = null;
      }
      closeDirectory();
      setIsStatsVisible(true);
      setIsStatsOpen(true);
      setIsHistoryOpen(false);
      setIsHelpOpen(false);
      setIsProfileOpen(false);
      closeApps();
    }

    function closeStats() {
      setIsStatsOpen(false);
      if (statsCloseTimerRef.current) {
        window.clearTimeout(statsCloseTimerRef.current);
      }
      statsCloseTimerRef.current = window.setTimeout(function () {
        setIsStatsVisible(false);
        statsCloseTimerRef.current = null;
      }, PHONE_POPOVER_ANIMATION_MS);
    }

    React.useEffect(function () {
      function onEscape(event) {
        if (event.key === 'Escape') {
          closeTransientLayers();
          setIsMenuOpen(false);
        }
      }

      window.addEventListener('keydown', onEscape);
      return function () {
        window.removeEventListener('keydown', onEscape);
      };
    }, []);

    React.useEffect(function () {
      return function () {
        if (appsCloseTimerRef.current) {
          window.clearTimeout(appsCloseTimerRef.current);
        }
        if (directoryCloseTimerRef.current) {
          window.clearTimeout(directoryCloseTimerRef.current);
        }
        if (statsCloseTimerRef.current) {
          window.clearTimeout(statsCloseTimerRef.current);
        }
      };
    }, []);

    return e(
      'div',
      { className: 'app-shell' },
      e(TopBar, {
        clientNumber: clientNumber,
        isMenuOpen: isMenuOpen,
        isAppsOpen: isAppsOpen,
        phoneStatus: phoneStatus,
        isAgentBannerOpen: isAgentBannerOpen,
        directoryOpen: isDirectoryOpen,
        directoryVisible: isDirectoryVisible,
        statsOpen: isStatsOpen,
        statsVisible: isStatsVisible,
        onMenu: toggleMenu,
        onHome: goHome,
        onSearch: goSearch,
        onHistory: openHistory,
        onHelp: openHelp,
        onProfile: toggleProfile,
        onApps: toggleApps,
        onPhoneStatusChange: setPhoneStatus,
        onToggleAgentBanner: toggleAgentBanner,
        onDirectory: openDirectory,
        onStats: openStats
      }),
      isAgentBannerOpen
        ? e(
            'section',
            { className: 'agent-banner', 'aria-label': 'Bandeau agent' },
            e('p', { className: 'agent-banner-title' }, 'Bandeau agent'),
            e('p', { className: 'agent-banner-line' }, 'File active : 3 appels en attente'),
            e('p', { className: 'agent-banner-line' }, 'Temps moyen de décrochage : 00:42'),
            e('p', { className: 'agent-banner-line' }, 'Statut actuel : ' + phoneStatus.replace('_', ' '))
          )
        : null,
      e(
        'div',
        { className: isMenuOpen ? 'app-body menu-open' : 'app-body' },
        e(LeftMenuDrawer, { open: isMenuOpen, onClose: function () { setIsMenuOpen(false); }, onNavigate: function (page) { setActivePage(page); } }),
        e(
          'div',
          { className: 'main-content' },
          e(ContentArea, { page: activePage, onOpenTopic: openTopicDetails, selectedTopic: selectedTopic, onOpenClient: openClientFiche, onGoMemberSearch: goMemberSearch, clientName: selectedClient })
        ),
        e(ProfilePopover, { open: isProfileOpen }),
        e(AppsSidebar, { open: isAppsOpen, visible: isAppsVisible, onClose: closeApps }),
        e(HistoryModal, { open: isHistoryOpen, onClose: function () { setIsHistoryOpen(false); } }),
        e(HelpModal, { open: isHelpOpen, onClose: function () { setIsHelpOpen(false); }, page: activePage }),
        isAppsVisible
          ? e('button', { type: 'button', className: isAppsOpen ? 'sidebar-overlay open' : 'sidebar-overlay closing', 'aria-label': 'Fermer lanceur apps', onClick: closeApps })
          : null
      )
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(e(App));
})();
