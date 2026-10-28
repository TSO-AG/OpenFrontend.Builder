(function () {
  'use strict';

  var root = document.documentElement;
  var body = document.body;
  var panel = document.querySelector('[data-builder-panel]');

  if (!panel) {
    return;
  }

  // The ?v= cache-busting parameter of this script is the displayed builder version.
  var versionOutput = panel.querySelector('[data-builder-version]');
  if (versionOutput && document.currentScript) {
    var builderVersion = new URL(document.currentScript.src).searchParams.get('v');
    versionOutput.textContent = builderVersion ? 'Version ' + builderVersion : '';
  }

  var defaults = {
    primary: '#5b8f22',
    secondary: '#b0d786',
    success: '#198754',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#0dcaf0',
    light: '#f8f9fa',
    dark: '#212529',
    background: '#ffffff',
    text: '#000000',
    heading: '#000000',
    'body-font-size': '1',
    'heading-font-size': '2',
    'body-line-height': '1.5',
    'heading-font-family': "'Roboto', sans-serif",
    'body-font-family': "'Roboto', sans-serif",
    'heading-font-weight': '700',
    'body-font-weight': '400',
    'heading-h1-size': '2.5',
    'heading-h2-size': '2',
    'heading-h3-size': '1.75',
    'heading-h4-size': '1.5',
    'heading-h5-size': '1.25',
    'heading-h6-size': '1',
    'heading-h1-desktop': '40',
    'heading-h1-mobile': '22',
    'heading-h2-desktop': '32',
    'heading-h2-mobile': '21',
    'heading-h3-desktop': '28',
    'heading-h3-mobile': '20',
    'heading-h4-desktop': '24',
    'heading-h4-mobile': '20',
    'heading-h5-desktop': '20',
    'heading-h5-mobile': '20',
    'heading-h6-desktop': '16',
    'heading-h6-mobile': '16',
    'heading-h1-color': '#212529',
    'heading-h2-color': '#212529',
    'heading-h3-color': '#212529',
    'heading-h4-color': '#212529',
    'heading-h5-color': '#212529',
    'heading-h6-color': '#212529',
    'subheadline-color': '#212529',
    'body-font-size-desktop': '16',
    'body-font-size-mobile': '16',
    'subheadline-font-size-desktop': '20',
    'subheadline-font-size-mobile': '18',
    'lead-text-font-size-desktop': '40',
    'lead-text-font-size-mobile': '24',
    'navigation-font-size-desktop': '16',
    'navigation-font-size-mobile': '16',
    'header-background': '#ffffff',
    'header-menu-background': '#ffffff',
    'navigation-font-size': '1',
    'footer-column-1': 'visible',
    'footer-column-2': 'visible',
    'footer-column-3': 'visible',
    'footer-column-4': 'visible',
    'footer-background': '#212529',
    'footer-text-color': '#ffffff',
    'footer-font-size-desktop': '16',
    'footer-font-size-mobile': '16',
    'link-color': '#5b8f22',
    'link-hover-color': '#406816',
    'button-shape': 'rounded',
    'input-border-color': '#adb5bd',
    'input-focus-color': '#5b8f22',
    'surface-color': '#ffffff',
    'surface-shadow': 'none',
    'image-shape': 'rounded',
    'input-shape': 'rounded',
    'table-style': 'standard',
    'accordion-style': 'boxed',
    'tabs-style': 'rounded',
    'teaser-style': 'standard',
    'teaser-shape': 'rounded'
  };

  var buttonColorDefinitions = [
    { label: 'Textlink: Standard', prefix: 'link', state: 'standard', text: 'dark', background: '', border: 'underline' },
    { label: 'Textlink: Hover', prefix: 'link', state: 'hover', text: 'primary', background: '', border: 'transparent' },
    { label: 'btn-Primary: Standard', prefix: 'button-primary', state: 'standard', text: 'light', background: 'primary', border: 'primary' },
    { label: 'btn-Primary: Hover', prefix: 'button-primary', state: 'hover', text: 'primary', background: 'light', border: 'primary' },
    { label: 'btn-OutlinePrimary: Standard', prefix: 'button-outline-primary', state: 'standard', text: 'primary', background: 'light', border: 'primary' },
    { label: 'btn-OutlinePrimary: Hover', prefix: 'button-outline-primary', state: 'hover', text: 'light', background: 'primary', border: 'primary' },
    { label: 'btn-Secondary: Standard', prefix: 'button-secondary', state: 'standard', text: 'dark', background: 'secondary', border: 'secondary' },
    { label: 'btn-Secondary: Hover', prefix: 'button-secondary', state: 'hover', text: 'dark', background: 'light', border: 'secondary' },
    { label: 'btn-Success: Standard', prefix: 'button-success', state: 'standard', text: 'light', background: 'success', border: 'success' },
    { label: 'btn-Success: Hover', prefix: 'button-success', state: 'hover', text: 'success', background: 'light', border: 'success' },
    { label: 'btn-Danger: Standard', prefix: 'button-danger', state: 'standard', text: 'light', background: 'danger', border: 'danger' },
    { label: 'btn-Danger: Hover', prefix: 'button-danger', state: 'hover', text: 'danger', background: 'light', border: 'danger' },
    { label: 'btn-Warning: Standard', prefix: 'button-warning', state: 'standard', text: 'dark', background: 'warning', border: 'warning' },
    { label: 'btn-Warning: Hover', prefix: 'button-warning', state: 'hover', text: 'dark', background: 'warning', border: 'warning' },
    { label: 'btn-Light: Standard', prefix: 'button-light', state: 'standard', text: 'dark', background: 'light', border: 'light' },
    { label: 'btn-Light: Hover', prefix: 'button-light', state: 'hover', text: 'light', background: 'dark', border: 'light' },
    { label: 'btn-Dark: Standard', prefix: 'button-dark', state: 'standard', text: 'light', background: 'dark', border: 'dark' },
    { label: 'btn-Dark: Hover', prefix: 'button-dark', state: 'hover', text: 'dark', background: 'light', border: 'dark' }
  ];
  var formColorDefinition = {
    label: 'Input',
    text: 'dark',
    background: 'light',
    border: 'dark'
  };
  var accordionColorDefinitions = [
    { label: 'Titel', prefix: 'accordion-title', text: 'dark', background: 'primary', border: 'primary' },
    { label: 'Text', prefix: 'accordion-text', text: 'dark', background: '', border: 'primary' }
  ];
  var tabsColorDefinitions = [
    { label: 'Aktiver Tab', prefix: 'tabs-active', text: 'dark', background: 'light', border: 'primary' },
    { label: 'Inaktiver Tab', prefix: 'tabs-inactive', text: 'dark', background: '', border: '' }
  ];
  var teaserColorDefinitions = [
    { label: 'Kachel Standard', prefix: 'teaser-standard', text: '#3C505A', background: '#ffffff', border: '1px solid rgba(60, 80, 90, .2)' },
    { label: 'Kachel Compact-View', prefix: 'teaser-compact', text: '#ffffff', background: 'rgba(60, 80, 90, .5)', border: 'transparent' }
  ];

  buttonColorDefinitions.forEach(function (definition) {
    ['text', 'background', 'border'].forEach(function (property) {
      var variable = definition.prefix + '-' + definition.state + '-' + property + '-color';
      defaults[variable] = definition[property] || '';
    });
  });
  defaults['input-text-color'] = '#3C505A';
  defaults['input-background-color'] = '#ffffff';
  accordionColorDefinitions.forEach(function (definition) {
    ['text', 'background', 'border'].forEach(function (property) {
      defaults[definition.prefix + '-' + property + '-color'] = definition[property] || '';
    });
  });
  tabsColorDefinitions.forEach(function (definition) {
    ['text', 'background', 'border'].forEach(function (property) {
      defaults[definition.prefix + '-' + property + '-color'] = definition[property] || '';
    });
    teaserColorDefinitions.forEach(function (definition) {
      ['text', 'background', 'border'].forEach(function (property) {
        defaults[definition.prefix + '-' + property + '-color'] = definition[property];
      });
    });
    defaults['teaser-shape'] = 'rounded';
  });

  var paletteOptions = [
    ['Primary', 'primary'],
    ['Secondary', 'secondary'],
    ['Success', 'success'],
    ['Danger', 'danger'],
    ['Warning', 'warning'],
    ['Info', 'info'],
    ['Light', 'light'],
    ['Dark', 'dark']
  ];

  function populatePaletteSources() {
    panel.querySelectorAll('[data-builder-palette-options]').forEach(function (select) {
      paletteOptions.forEach(function (option) {
        var paletteOption = document.createElement('option');
        paletteOption.value = option[1];
        paletteOption.textContent = option[0];
        select.appendChild(paletteOption);
      });
      select.value = select.dataset.builderPaletteDefault || '';
    });
  }

  function renderButtonColorControls() {
    var container = panel.querySelector('[data-builder-button-colors]');
    if (!container) {
      return;
    }

    var table = document.createElement('div');
    table.className = 'builder-button-color-grid';
    table.innerHTML = '<strong>Links</strong><strong>Text</strong><strong>Hintergrund</strong><strong>Rahmen</strong>';

    buttonColorDefinitions.forEach(function (definition) {
      var row = document.createElement('div');
      row.className = 'builder-button-color-row';
      row.innerHTML = '<span>' + definition.label + '</span>';

      ['text', 'background', 'border'].forEach(function (property) {
        var variable = definition.prefix + '-' + definition.state + '-' + property + '-color';
        var select = document.createElement('select');
        select.className = 'builder-color-source';
        select.dataset.builderColorSource = variable;
        var options = paletteOptions.slice();
        if (property === 'background' || property === 'border') {
          options.unshift([
            property === 'border' && definition.border === 'underline'
              ? 'Underline'
              : 'Transparent',
            ''
          ]);
        }
        options.forEach(function (option) {
          var paletteOption = document.createElement('option');
          paletteOption.value = option[1];
          paletteOption.textContent = option[0];
          select.appendChild(paletteOption);
        });
        select.value = definition[property] || '';

        var hidden = document.createElement('input');
        hidden.type = 'hidden';
        hidden.dataset.builderVariable = variable;
        hidden.value = definition[property] || '';

        row.appendChild(select);
        row.appendChild(hidden);
      });

      table.appendChild(row);
    });

    container.appendChild(table);
  }

  function renderFormColorControls() {
    var container = panel.querySelector('[data-builder-form-colors]');
    if (!container) {
      return;
    }

    var table = document.createElement('div');
    table.className = 'builder-button-color-grid';
    table.innerHTML = '<strong>Formular</strong><strong>Text</strong><strong>Hintergrund</strong><strong>Rahmen</strong>';

    var row = document.createElement('div');
    row.className = 'builder-button-color-row';
    row.innerHTML = '<span>' + formColorDefinition.label + '</span>';

    [
      ['text', 'input-text-color'],
      ['background', 'input-background-color'],
      ['border', 'input-border-color']
    ].forEach(function (entry) {
      var property = entry[0];
      var variable = entry[1];
      var control = document.createElement('div');
      control.className = 'builder-form-color-control';
      var select = document.createElement('select');
      select.className = 'builder-color-source';
      select.dataset.builderColorSource = variable;
      paletteOptions.forEach(function (option) {
        var paletteOption = document.createElement('option');
        paletteOption.value = option[1];
        paletteOption.textContent = option[0];
        select.appendChild(paletteOption);
      });
      select.value = formColorDefinition[property];

      var hexInput = document.createElement('input');
      hexInput.className = 'builder-color-input';
      hexInput.type = 'text';
      hexInput.dataset.builderVariable = variable;
      hexInput.dataset.builderColorHex = '';
      hexInput.maxLength = 7;
      hexInput.pattern = '^#[0-9A-Fa-f]{6}$';
      hexInput.placeholder = '#212529';

      var colorPicker = document.createElement('input');
      colorPicker.className = 'builder-color-picker';
      colorPicker.type = 'color';
      colorPicker.dataset.builderHeaderColorPicker = variable;
      colorPicker.value = '#212529';

      control.appendChild(select);
      control.appendChild(hexInput);
      control.appendChild(colorPicker);
      row.appendChild(control);
    });

    table.appendChild(row);
    container.appendChild(table);
  }

  function renderAccordionColorControls() {
    var container = panel.querySelector('[data-builder-accordion-colors]');
    if (!container) {
      return;
    }

    var table = document.createElement('div');
    table.className = 'builder-button-color-grid';
    table.innerHTML = '<strong>Accordion</strong><strong>Text</strong><strong>Hintergrund</strong><strong>Rahmen</strong>';

    accordionColorDefinitions.forEach(function (definition) {
      var row = document.createElement('div');
      row.className = 'builder-button-color-row';
      row.innerHTML = '<span>' + definition.label + '</span>';

      ['text', 'background', 'border'].forEach(function (property) {
        var variable = definition.prefix + '-' + property + '-color';
        var control = document.createElement('div');
        control.className = 'builder-form-color-control';
        var select = document.createElement('select');
        select.className = 'builder-color-source';
        select.dataset.builderColorSource = variable;
        paletteOptions.forEach(function (option) {
          var paletteOption = document.createElement('option');
          paletteOption.value = option[1];
          paletteOption.textContent = option[0];
          select.appendChild(paletteOption);
        });
        select.value = definition[property] || '';

        var hexInput = document.createElement('input');
        hexInput.className = 'builder-color-input';
        hexInput.type = 'text';
        hexInput.dataset.builderVariable = variable;
        hexInput.dataset.builderColorHex = '';
        hexInput.maxLength = 7;
        hexInput.pattern = '^#[0-9A-Fa-f]{6}$';
        hexInput.placeholder = '#212529';

        var colorPicker = document.createElement('input');
        colorPicker.className = 'builder-color-picker';
        colorPicker.type = 'color';
        colorPicker.dataset.builderHeaderColorPicker = variable;
        colorPicker.value = '#212529';

        control.appendChild(select);
        control.appendChild(hexInput);
        control.appendChild(colorPicker);
        row.appendChild(control);
      });

      table.appendChild(row);
    });

    container.appendChild(table);
  }

  function renderTabsColorControls() {
    var container = panel.querySelector('[data-builder-tabs-colors]');
    if (!container) {
      return;
    }

    var table = document.createElement('div');
    table.className = 'builder-button-color-grid';
    table.innerHTML = '<strong>Tabs</strong><strong>Text</strong><strong>Hintergrund</strong><strong>Rahmen</strong>';

    tabsColorDefinitions.forEach(function (definition) {
      var row = document.createElement('div');
      row.className = 'builder-button-color-row';
      row.innerHTML = '<span>' + definition.label + '</span>';

      ['text', 'background', 'border'].forEach(function (property) {
        var variable = definition.prefix + '-' + property + '-color';
        var control = document.createElement('div');
        control.className = 'builder-form-color-control';
        var select = document.createElement('select');
        select.className = 'builder-color-source';
        select.dataset.builderColorSource = variable;
        paletteOptions.forEach(function (option) {
          var paletteOption = document.createElement('option');
          paletteOption.value = option[1];
          paletteOption.textContent = option[0];
          select.appendChild(paletteOption);
        });
        select.value = definition[property] || '';

        var hexInput = document.createElement('input');
        hexInput.className = 'builder-color-input';
        hexInput.type = 'text';
        hexInput.dataset.builderVariable = variable;
        hexInput.dataset.builderColorHex = '';
        hexInput.maxLength = 7;
        hexInput.pattern = '^#[0-9A-Fa-f]{6}$';
        hexInput.placeholder = '#212529';

        var colorPicker = document.createElement('input');
        colorPicker.className = 'builder-color-picker';
        colorPicker.type = 'color';
        colorPicker.dataset.builderHeaderColorPicker = variable;
        colorPicker.value = '#212529';

        control.appendChild(select);
        control.appendChild(hexInput);
        control.appendChild(colorPicker);
        row.appendChild(control);
      });

      table.appendChild(row);
    });

    container.appendChild(table);
  }

  function renderTeaserColorControls() {
    var container = panel.querySelector('[data-builder-teaser-colors]');
    if (!container) {
      return;
    }

    var table = document.createElement('div');
    table.className = 'builder-button-color-grid';
    table.innerHTML = '<strong>Teaserboxen</strong><strong>Text</strong><strong>Hintergrund</strong><strong>Rahmen</strong>';

    teaserColorDefinitions.forEach(function (definition) {
      var row = document.createElement('div');
      row.className = 'builder-button-color-row';
      row.innerHTML = '<span>' + definition.label + '</span>';

      ['text', 'background', 'border'].forEach(function (property) {
        var variable = definition.prefix + '-' + property + '-color';
        var control = document.createElement('div');
        control.className = 'builder-form-color-control';
        control.dataset.builderLabel = {
          text: 'Textfarbe',
          background: 'Hintergrundfarbe',
          border: 'Rahmen'
        }[property];

        var select = document.createElement('select');
        select.className = 'builder-color-source';
        select.dataset.builderColorSource = variable;
        select.innerHTML = '<option value="">Eigene Farbe</option>';
        paletteOptions.forEach(function (option) {
          var paletteOption = document.createElement('option');
          paletteOption.value = option[1];
          paletteOption.textContent = option[0];
          select.appendChild(paletteOption);
        });

        var input = document.createElement('input');
        input.className = 'builder-color-input';
        input.type = 'text';
        input.dataset.builderVariable = variable;
        if (property !== 'border') {
          input.dataset.builderColorHex = '';
          input.maxLength = 7;
          input.pattern = '^#[0-9A-Fa-f]{6}$';
        }
        input.value = definition[property];
        input.placeholder = property === 'border' ? 'z. B. 1px solid #3C505A' : '#ffffff oder rgba(...)';

        control.appendChild(select);
        control.appendChild(input);
        if (property !== 'border') {
          var colorPicker = document.createElement('input');
          colorPicker.className = 'builder-color-picker';
          colorPicker.type = 'color';
          colorPicker.dataset.builderHeaderColorPicker = variable;
          colorPicker.value = definition[property].indexOf('#') === 0
            ? definition[property]
            : '#ffffff';
          control.appendChild(colorPicker);
        }
        row.appendChild(control);
      });

      table.appendChild(row);
    });

    container.appendChild(table);
  }

  populatePaletteSources();
  renderButtonColorControls();
  renderFormColorControls();
  renderAccordionColorControls();
  renderTabsColorControls();
  renderTeaserColorControls();

  function createPresets() {
    return {
      standard: Object.assign({}, defaults),
      custom: Object.assign({}, defaults, {
        primary: '#659B7A',
        secondary: '#EBD3AE',
        success: '#3C505A',
        danger: '#FF7864',
        light: '#ffffff',
        dark: '#3C505A',
        background: '#659B7A',
        text: '#3C505A',
        heading: '#3C505A',
        subheadline: '#3C505A',
        'subheadline-color': '#3C505A'
      }),
      dark: Object.assign({}, defaults, {
        background: '#3C505A',
        primary: '#659B7A',
        secondary: '#EBD3AE',
        success: '#659B7A',
        danger: '#FF7864',
        light: '#ffffff',
        dark: '#3C505A',
        text: '#ffffff',
        heading: '#ffffff',
        'subheadline-color': '#ffffff'
      }),
      light: Object.assign({}, defaults, {
        background: '#EBD3AE',
        primary: '#659B7A',
        secondary: '#EBD3AE',
        success: '#3C505A',
        danger: '#FF7864',
        light: '#ffffff',
        dark: '#3C505A',
        text: '#212529',
        heading: '#212529',
        'subheadline-color': '#212529'
      })
    };
  }

  var presets = createPresets();

  function ensureVariantPreset(theme) {
    var preset = Object.assign({}, defaults, presets[theme]);
    var marker = 'button-primary-standard-background-color';

    if (theme !== 'standard' && preset && preset[marker] === undefined) {
      presets[theme] = Object.assign({}, createPresets()[theme], preset);
      [
        'primary', 'secondary', 'success', 'danger', 'light', 'dark',
        'background', 'text', 'heading', 'subheadline-color'
      ].forEach(function (variable) {
        if (preset[variable] === defaults[variable]) {
          presets[theme][variable] = createPresets()[theme][variable];
        }
      });
    }
  }

  var fields = panel.querySelectorAll('[data-builder-variable]');
  var colorPicker = panel.querySelector('[data-builder-color-picker]');
  var headerColorPickers = panel.querySelectorAll('[data-builder-header-color-picker]');
  var colorSources = panel.querySelectorAll('[data-builder-color-source]');
  var googleFontInputs = panel.querySelectorAll('[data-builder-google-font]');
  var googleFontListUrl = 'https://api.fontsource.org/v1/fonts?type=google';
  // Families already bundled in fonts/google-fonts.css need no extra stylesheet.
  var localFontFamilies = ['Hind', 'Montserrat', 'Roboto'];
  var googleFontList = null;
  var googleFontListRequest = null;
  var themeSelect = panel.querySelector('[data-builder-theme]');
  var status = panel.querySelector('[data-builder-status]');
  var templateName = panel.querySelector('[data-builder-template-name]');
  var templateSelect = panel.querySelector('[data-builder-template]');
  var loadTemplateButton = panel.querySelector('[data-builder-load-template]');
  var deleteTemplateButton = panel.querySelector('[data-builder-delete-template]');
  var saveTemplateButton = panel.querySelector('[data-builder-save]');
  var exportTemplateButton = panel.querySelector('[data-builder-export-template]');
  var importTemplateButton = panel.querySelector('[data-builder-import-template]');
  var importFileInput = panel.querySelector('[data-builder-import-file]');
  var colorVariables = [
    'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark',
    'background', 'text', 'heading',
    'heading-h1-color', 'heading-h2-color', 'heading-h3-color',
    'heading-h4-color', 'heading-h5-color', 'heading-h6-color',
    'subheadline-color', 'header-background', 'header-menu-background',
    'link-color', 'link-hover-color', 'footer-background', 'footer-text-color',
    'input-border-color', 'input-focus-color', 'surface-color'
  ];
  buttonColorDefinitions.forEach(function (definition) {
    ['text', 'background', 'border'].forEach(function (property) {
      colorVariables.push(
        definition.prefix + '-' + definition.state + '-' + property + '-color'
      );
    });
  });
  colorVariables.push('input-text-color', 'input-background-color', 'input-border-color');
  accordionColorDefinitions.forEach(function (definition) {
    ['text', 'background', 'border'].forEach(function (property) {
      colorVariables.push(definition.prefix + '-' + property + '-color');
    });
  });
  tabsColorDefinitions.forEach(function (definition) {
    ['text', 'background', 'border'].forEach(function (property) {
      colorVariables.push(definition.prefix + '-' + property + '-color');
    });
  });
  teaserColorDefinitions.forEach(function (definition) {
    ['text', 'background', 'border'].forEach(function (property) {
      colorVariables.push(definition.prefix + '-' + property + '-color');
    });
  });
  var activeTheme = themeSelect ? themeSelect.value : 'standard';
  var activeTemplateName = '';
  var hasUnsavedChanges = false;
  var editorSections = panel.querySelectorAll('[data-builder-section]');
  var lockHint = panel.querySelector('[data-builder-lock-hint]');
  var toast = panel.querySelector('[data-builder-toast]');
  var toastText = panel.querySelector('[data-builder-toast-text]');
  var toastTimer = null;
  var saveFeedbackTimer = null;
  var storageKey = 'openfrontend-builder';
  var legacyTemplatesKey = 'openfrontend-builder-templates';
  var legacyDraftKey = 'openfrontend-builder-draft';
  var templateExportFormat = 'openfrontend-builder-template';
  var templateExportVersion = 1;
  var maxImportFileSize = 1024 * 1024;
  var templates = {};
  var viewportButtons = panel.querySelectorAll('[data-builder-viewport]');
  var previewParam = 'builder-preview';
  var previewMessageType = 'openfrontend-builder-preview';
  var isPreviewFrame = window.parent !== window &&
    new URLSearchParams(window.location.search).get(previewParam) === 'mobile';
  var previewFrame = null;
  var previewContainer = null;
  var previewFrameReady = false;
  var previewSyncTimer = null;
  // iPhone 14/15 viewport (390 x 844) plus a 12px bezel on each side.
  var previewDeviceWidth = 390 + 24;
  var previewDeviceHeight = 844 + 24;

  if (isPreviewFrame) {
    body.classList.add('builder-preview-frame');
  }

  function getInputValue(field) {
    return field.value;
  }

  function setInputValue(field, value) {
    field.value = value;
    updateColorInputIndicator(field, value);
  }

  function isHexColor(value) {
    return /^#[0-9a-fA-F]{6}$/.test(value);
  }

  function isColorValue(value) {
    return isHexColor(value) ||
      /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+(?:\s*,\s*(?:0|1|0?\.\d+))?\s*\)$/.test(value);
  }

  function getPickerColor(value) {
    return isHexColor(value) ? value : '#ffffff';
  }

  function updateColorInputIndicator(field, value) {
    if (field.dataset.builderColorHex === undefined) {
      return;
    }

    field.style.setProperty(
      '--builder-input-color',
      isColorValue(value) ? (isHexColor(value) ? value : '#ffffff') : '#dc3545'
    );
  }

  function updateColorFieldState(theme) {
    var isStandard = theme === 'standard';
    var hexField = panel.querySelector('[data-builder-color-hex]');

    if (hexField) {
      hexField.disabled = isStandard;
    }

    if (colorPicker) {
      colorPicker.disabled = isStandard;
    }
  }

  function updateVariantPaletteSelections(theme) {
    var headingPalette = theme === 'dark' ? 'light' : 'dark';

    colorSources.forEach(function (source) {
      var variable = source.dataset.builderColorSource || '';
      if (/^heading-h[1-6]-color$/.test(variable) || variable === 'subheadline-color') {
        source.value = headingPalette;
      }
    });
  }

  function applyPaletteSource(targetVariable, sourceVariable) {
    var value = root.style.getPropertyValue('--builder-' + sourceVariable).trim();
    var targetField = panel.querySelector('[data-builder-variable="' + targetVariable + '"]');

    if (value && targetField) {
      if (/^teaser-(standard|compact)-border-color$/.test(targetVariable)) {
        value = '1px solid ' + value;
      }
      targetField.value = value;
      updateColorInputIndicator(targetField, value);
      applyVariable(targetVariable, value);
    }
  }

  function syncPaletteReferences(sourceVariable) {
    colorSources.forEach(function (source) {
      if (source.value === sourceVariable) {
        applyPaletteSource(source.dataset.builderColorSource, sourceVariable);
      }
    });
  }

  function fetchGoogleFontList() {
    if (googleFontList) {
      return Promise.resolve(googleFontList);
    }

    if (!googleFontListRequest) {
      googleFontListRequest = fetch(googleFontListUrl)
        .then(function (response) {
          if (!response.ok) {
            throw new Error('HTTP ' + response.status);
          }
          return response.json();
        })
        .then(function (data) {
          if (!Array.isArray(data)) {
            throw new Error('Unerwartetes Format der Google-Fonts-Liste.');
          }

          googleFontList = data
            .filter(function (font) {
              return font && typeof font.family === 'string' &&
                /^[A-Za-z0-9 .'-]+$/.test(font.family) &&
                Array.isArray(font.weights);
            })
            .map(function (font) {
              return {
                family: font.family,
                key: font.family.toLowerCase(),
                category: typeof font.category === 'string' ? font.category : '',
                weights: font.weights
                  .filter(function (weight) {
                    return Number.isInteger(weight) && weight >= 100 && weight <= 900;
                  })
                  .sort(function (a, b) {
                    return a - b;
                  })
              };
            })
            .sort(function (a, b) {
              return a.family.localeCompare(b.family);
            });

          return googleFontList;
        })
        .catch(function (error) {
          googleFontListRequest = null;
          throw error;
        });
    }

    return googleFontListRequest;
  }

  function findGoogleFont(family) {
    var key = family.trim().toLowerCase();

    if (!googleFontList) {
      return null;
    }

    for (var i = 0; i < googleFontList.length; i += 1) {
      if (googleFontList[i].key === key) {
        return googleFontList[i];
      }
    }

    return null;
  }

  function getFontFamilyFromValue(value) {
    var match = /^\s*'((?:[^'\\]|\\.)+)'/.exec(value || '');
    return match ? match[1].replace(/\\'/g, "'") : '';
  }

  function getFontFallback(category) {
    return {
      serif: 'serif',
      monospace: 'monospace',
      handwriting: 'cursive'
    }[category] || 'sans-serif';
  }

  function setGoogleFontLink(variable, family, weights) {
    var linkId = 'builder-google-font-' + variable;
    var link = document.getElementById(linkId);

    if (localFontFamilies.indexOf(family) !== -1) {
      if (link) {
        link.remove();
      }
      return;
    }

    if (!link) {
      link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    // Google returns an error when a requested weight does not exist,
    // so only the weights known for this family are requested.
    var href = 'https://fonts.googleapis.com/css2?family=' +
      encodeURIComponent(family).replace(/%20/g, '+') +
      (weights && weights.length ? ':wght@' + weights.join(';') : '') +
      '&display=swap';

    if (link.href !== href) {
      link.href = href;
    }
  }

  function getFontWeightSelect(variable) {
    return panel.querySelector(
      '[data-builder-variable="' + variable.replace(/-family$/, '-weight') + '"]'
    );
  }

  function updateFontWeightOptions(variable, font, adjustValue) {
    var select = getFontWeightSelect(variable);
    var weights = font && font.weights.length ? font.weights : null;

    if (!select) {
      return;
    }

    Array.prototype.forEach.call(select.options, function (option) {
      option.disabled = Boolean(weights) && weights.indexOf(Number(option.value)) === -1;
    });

    if (!adjustValue || !weights || weights.indexOf(Number(select.value)) !== -1) {
      return;
    }

    var current = Number(select.value);
    var nearest = weights.reduce(function (best, weight) {
      return Math.abs(weight - current) < Math.abs(best - current) ? weight : best;
    }, weights[0]);

    select.value = String(nearest);
    applyVariable(select.dataset.builderVariable, select.value);
  }

  function applyGoogleFont(input, family, font) {
    var variable = input.dataset.builderGoogleFont;
    var fontValue = "'" + family.replace(/'/g, "\\'") + "', " +
      getFontFallback(font ? font.category : '');

    input.value = family;
    setGoogleFontLink(variable, family, font ? font.weights : null);
    updateFontWeightOptions(variable, font, true);
    applyVariable(variable, fontValue);
    saveActivePreset();
    presets[activeTheme][variable] = fontValue;
    schedulePreviewSync();
    markChanged();
    setStatus('Schriftart „' + family + '“ wurde angewendet.');
  }

  function applyTypedGoogleFont(input) {
    var family = input.value.trim();
    var font;

    if (!family) {
      setStatus('Bitte zuerst eine Google Font suchen.', true);
      return;
    }

    font = findGoogleFont(family);
    if (font) {
      applyGoogleFont(input, font.family, font);
      return;
    }

    if (googleFontList) {
      setStatus('„' + family + '“ wurde in Google Fonts nicht gefunden.', true);
      return;
    }

    // Font list unavailable: fall back to the typed name.
    if (!/^[A-Za-z0-9 .'-]+$/.test(family)) {
      setStatus('Bitte einen gültigen Google-Font-Namen eingeben.', true);
      return;
    }

    applyGoogleFont(input, family, null);
  }

  function restoreGoogleFont(input, family) {
    var variable = input.dataset.builderGoogleFont;

    input.value = family;
    updateFontWeightOptions(variable, null, false);

    if (!family || isPreviewFrame) {
      return;
    }

    if (localFontFamilies.indexOf(family) !== -1) {
      setGoogleFontLink(variable, family, null);
      return;
    }

    fetchGoogleFontList().then(function () {
      var font = findGoogleFont(family);

      if (input.value.trim() === family) {
        setGoogleFontLink(variable, family, font ? font.weights : null);
        updateFontWeightOptions(variable, font, false);
        schedulePreviewSync();
      }
    }, function () {
      if (input.value.trim() === family) {
        setGoogleFontLink(variable, family, null);
        schedulePreviewSync();
      }
    });
  }

  function setupGoogleFontSearch(input) {
    var list = document.getElementById(input.getAttribute('aria-controls'));
    var results = [];
    var activeIndex = -1;
    var searchId = 0;

    if (!list) {
      return;
    }

    function close() {
      list.hidden = true;
      input.setAttribute('aria-expanded', 'false');
      input.removeAttribute('aria-activedescendant');
      activeIndex = -1;
    }

    function open() {
      list.hidden = false;
      input.setAttribute('aria-expanded', 'true');
    }

    function renderMessage(message) {
      var item = document.createElement('li');

      results = [];
      activeIndex = -1;
      list.textContent = '';
      item.className = 'builder-font-search__message';
      item.setAttribute('role', 'presentation');
      item.textContent = message;
      list.appendChild(item);
      input.removeAttribute('aria-activedescendant');
      open();
    }

    function highlight(index) {
      var items = list.querySelectorAll('[role="option"]');

      activeIndex = index;
      items.forEach(function (item, itemIndex) {
        item.setAttribute('aria-selected', String(itemIndex === index));
      });

      if (items[index]) {
        input.setAttribute('aria-activedescendant', items[index].id);
        items[index].scrollIntoView({ block: 'nearest' });
      } else {
        input.removeAttribute('aria-activedescendant');
      }
    }

    function choose(index) {
      var font = results[index];

      if (font) {
        close();
        applyGoogleFont(input, font.family, font);
      }
    }

    function render() {
      list.textContent = '';
      results.forEach(function (font, index) {
        var item = document.createElement('li');
        var name = document.createElement('span');
        var meta = document.createElement('span');

        item.id = list.id + '-' + index;
        item.className = 'builder-font-search__option';
        item.setAttribute('role', 'option');
        item.setAttribute('aria-selected', 'false');
        name.className = 'builder-font-search__name';
        name.textContent = font.family;
        meta.className = 'builder-font-search__meta';
        meta.textContent = font.weights.length === 1
          ? font.category + ' · 1 Stärke'
          : font.category + ' · ' + font.weights.length + ' Stärken';
        item.appendChild(name);
        item.appendChild(meta);
        item.addEventListener('mousedown', function (event) {
          event.preventDefault();
        });
        item.addEventListener('click', function () {
          choose(index);
        });
        list.appendChild(item);
      });
      open();
      highlight(activeIndex);
    }

    function search() {
      var query = input.value.trim().toLowerCase();
      var currentSearch = searchId += 1;

      if (!googleFontList) {
        renderMessage('Google Fonts werden geladen …');
      }

      fetchGoogleFontList().then(function (fonts) {
        var startsWith = [];
        var contains = [];

        if (currentSearch !== searchId || document.activeElement !== input) {
          return;
        }

        fonts.forEach(function (font) {
          var position = query ? font.key.indexOf(query) : 0;

          if (position === 0) {
            startsWith.push(font);
          } else if (position > 0) {
            contains.push(font);
          }
        });

        results = startsWith.concat(contains).slice(0, 50);
        if (!results.length) {
          renderMessage('Keine Google Font gefunden.');
          return;
        }

        activeIndex = query ? 0 : -1;
        render();
      }, function () {
        if (currentSearch === searchId && document.activeElement === input) {
          renderMessage('Liste nicht erreichbar. Namen eingeben und Enter drücken.');
        }
      });
    }

    input.addEventListener('focus', search);
    input.addEventListener('input', search);
    input.addEventListener('blur', close);
    input.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        if (list.hidden) {
          search();
          return;
        }
        if (results.length) {
          var step = event.key === 'ArrowDown' ? 1 : -1;
          highlight((activeIndex + step + results.length) % results.length);
        }
      } else if (event.key === 'Enter') {
        event.preventDefault();
        if (!list.hidden && activeIndex >= 0) {
          choose(activeIndex);
        } else {
          close();
          applyTypedGoogleFont(input);
        }
      } else if (event.key === 'Escape' && !list.hidden) {
        event.preventDefault();
        close();
      }
    });
  }

  function applyVariable(variable, value) {
    var cssValue = variable.indexOf('font-size') !== -1
      ? value + 'rem'
      : value;

    if (variable === 'body-line-height') {
      cssValue = value;
    }

    if (
      /^heading-h[1-6]-size$/.test(variable) ||
      variable === 'navigation-font-size' ||
      variable === 'footer-font-size'
    ) {
      cssValue = value + 'rem';
    }

    if (
      /^heading-h[1-6]-(desktop|mobile)$/.test(variable) ||
      variable.indexOf('body-font-size-') === 0 ||
      variable.indexOf('subheadline-font-size-') === 0 ||
      variable.indexOf('lead-text-font-size-') === 0 ||
      variable.indexOf('navigation-font-size-') === 0 ||
      variable.indexOf('footer-font-size-') === 0
    ) {
      cssValue = value + 'px';
    }

    if (variable === 'surface-shadow') {
      cssValue = getShadowValue(value);
    }

    root.style.setProperty('--builder-' + variable, cssValue);

    if (variable === 'link-color' || variable === 'link-hover-color') {
      var pageNavColor = variable === 'link-color' ? cssValue : null;
      var pageNavHoverColor = variable === 'link-hover-color' ? cssValue : null;
      document.querySelectorAll('body > header .header-collapse.page-menu-wrapper .page-nav').forEach(function (pageNav) {
        if (pageNavColor) {
          pageNav.style.setProperty('--bs-page-nav-link-color', pageNavColor, 'important');
          pageNav.style.setProperty('--bs-page-nav-link-toggle-color', pageNavColor, 'important');
          pageNav.style.setProperty('--bs-page-nav-link-back-color', pageNavColor, 'important');
        }
        if (pageNavHoverColor) {
          pageNav.style.setProperty('--bs-page-nav-link-hover-color', pageNavHoverColor, 'important');
          pageNav.style.setProperty('--bs-page-nav-link-toggle-hover-color', pageNavHoverColor, 'important');
          pageNav.style.setProperty('--bs-page-nav-link-back-hover-color', pageNavHoverColor, 'important');
        }
      });
    }

    if (variable === 'header-background') {
      var header = document.querySelector('body > header.header');
      if (header) {
        header.style.setProperty('--bs-header-background-color', cssValue, 'important');
        header.style.setProperty('--bs-header-sticky-background-color', cssValue, 'important');
        header.style.setProperty('background-color', cssValue, 'important');
      }
    }

    if (variable === 'header-menu-background') {
      var pageMenu = document.querySelector('body > header .header-collapse.page-menu-wrapper');
      if (pageMenu) {
        pageMenu.style.setProperty('--bs-page-menu-background-color', cssValue, 'important');
        pageMenu.style.setProperty('background-color', cssValue, 'important');

        pageMenu.querySelectorAll('.page-nav').forEach(function (pageNav) {
          pageNav.style.setProperty('--bs-page-nav-bg', cssValue, 'important');
          pageNav.style.setProperty('background-color', cssValue, 'important');
        });
      }
    }

    updateStructuralVariable(variable, value);
  }

  function updateStructuralVariable(variable, value) {
    var classPrefix = {
      'button-shape': 'builder-button-shape--',
      'image-shape': 'builder-image-shape--',
      'input-shape': 'builder-input-shape--',
      'table-style': 'builder-table--',
      'accordion-style': 'builder-accordion--',
      'tabs-style': 'builder-tabs--',
      'teaser-style': 'builder-teaser--',
      'teaser-shape': 'builder-teaser-shape--'
    }[variable];

    if (classPrefix) {
      body.className = body.className.replace(new RegExp('(^|\\s)' + classPrefix + '\\S+', 'g'), '');
      body.classList.add(classPrefix + value);
    }

    if (variable.indexOf('footer-column-') === 0) {
      body.classList.toggle('builder-footer-' + variable + '--hidden', value === 'hidden');
    }
  }

  function getShadowValue(value) {
    return {
      none: 'none',
      small: '0 .25rem .5rem rgba(0, 0, 0, .15)',
      medium: '0 .5rem 1rem rgba(0, 0, 0, .2)',
      large: '0 1rem 3rem rgba(0, 0, 0, .25)'
    }[value] || 'none';
  }

  function saveActivePreset() {
    presets[activeTheme] = Object.assign({}, defaults, presets[activeTheme]);
    fields.forEach(function (field) {
      presets[activeTheme][field.dataset.builderVariable] = getInputValue(field);
    });
    schedulePreviewSync();
  }

  function clonePresets(source) {
    var copy = {};

    Object.keys(source).forEach(function (theme) {
      copy[theme] = Object.assign({}, source[theme]);
    });

    return copy;
  }

  function markChanged() {
    hasUnsavedChanges = Boolean(activeTemplateName);
  }

  function updateEditorLock() {
    var isLocked = !activeTemplateName;

    editorSections.forEach(function (section) {
      section.inert = isLocked;
      section.classList.toggle('builder-section--locked', isLocked);
    });
    if (lockHint) {
      lockHint.hidden = !isLocked;
    }
    if (saveTemplateButton) {
      saveTemplateButton.textContent = isLocked ? 'Vorlage erstellen' : 'Vorlage speichern';
    }
  }

  function showSaveConfirmation(message) {
    var time = new Date().toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit' });

    if (toast && toastText) {
      toastText.textContent = message + ' (' + time + ')';
      toast.classList.add('builder-toast--visible');
      window.clearTimeout(toastTimer);
      toastTimer = window.setTimeout(function () {
        toast.classList.remove('builder-toast--visible');
      }, 3000);
    }

    if (saveTemplateButton) {
      saveTemplateButton.textContent = '✓ Gespeichert';
      saveTemplateButton.classList.add('builder-button--saved');
      window.clearTimeout(saveFeedbackTimer);
      saveFeedbackTimer = window.setTimeout(function () {
        saveTemplateButton.classList.remove('builder-button--saved');
        updateEditorLock();
      }, 1800);
    }
  }

  function confirmDiscardChanges() {
    return !hasUnsavedChanges ||
      window.confirm('Die aktive Vorlage hat ungespeicherte Änderungen. Trotzdem fortfahren?');
  }

  function resetEditor() {
    presets = createPresets();
    activeTheme = 'standard';
    if (themeSelect) {
      themeSelect.value = activeTheme;
    }
    setTheme(activeTheme);
    loadPreset(activeTheme);
  }

  function setStatus(message, isError) {
    if (status) {
      status.textContent = message;
      status.classList.toggle('builder-panel__status--error', Boolean(isError));
    }
  }

  function loadPreset(theme) {
    var preset = presets[theme] || defaults;

    Object.keys(preset).forEach(function (variable) {
      applyVariable(variable, preset[variable]);
    });

    fields.forEach(function (field) {
      var variable = field.dataset.builderVariable;
      var value = preset[variable] === undefined ? defaults[variable] : preset[variable];
      setInputValue(field, value);
      applyVariable(variable, value);
    });

    if (colorPicker) {
      colorPicker.value = getPickerColor(preset.background || defaults.background);
    }
    headerColorPickers.forEach(function (picker) {
      picker.value = getPickerColor(
        preset[picker.dataset.builderHeaderColorPicker] ||
        defaults[picker.dataset.builderHeaderColorPicker]
      );
    });
    updateVariantPaletteSelections(theme);
    colorSources.forEach(function (source) {
      if (source.value) {
        applyPaletteSource(source.dataset.builderColorSource, source.value);
      }
    });
    updateColorFieldState(theme);
    googleFontInputs.forEach(function (input) {
      var variable = input.dataset.builderGoogleFont;
      restoreGoogleFont(
        input,
        getFontFamilyFromValue(preset[variable] || defaults[variable])
      );
    });
    schedulePreviewSync();
  }

  function setTheme(theme) {
    body.classList.remove(
      'builder-theme--standard',
      'builder-theme--custom',
      'builder-theme--dark',
      'builder-theme--light'
    );
    body.classList.add('builder-theme--' + theme);
    schedulePreviewSync();
  }

  function getPreviewState() {
    var values = Object.assign({}, defaults, presets[activeTheme]);

    fields.forEach(function (field) {
      values[field.dataset.builderVariable] = getInputValue(field);
    });

    return {
      type: previewMessageType,
      theme: activeTheme,
      values: values,
      fonts: Array.prototype.map.call(
        document.querySelectorAll('link[id^="builder-google-font-"]'),
        function (link) {
          return { id: link.id, href: link.href };
        }
      )
    };
  }

  function syncPreview() {
    previewSyncTimer = null;

    if (!previewFrame || !previewFrame.contentWindow || !previewFrameReady) {
      return;
    }

    previewFrame.contentWindow.postMessage(getPreviewState(), window.location.origin);
  }

  function schedulePreviewSync() {
    if (!previewFrame || previewSyncTimer) {
      return;
    }

    previewSyncTimer = window.setTimeout(syncPreview, 50);
  }

  function updatePreviewScale() {
    if (!previewContainer || previewContainer.hidden) {
      return;
    }

    var style = window.getComputedStyle(previewContainer);
    var availableWidth = previewContainer.clientWidth -
      parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
    var availableHeight = previewContainer.clientHeight -
      parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
    var scale = Math.min(
      1,
      availableWidth / previewDeviceWidth,
      availableHeight / previewDeviceHeight
    );

    previewContainer.style.setProperty(
      '--builder-device-scale',
      String(Math.max(scale, 0.3))
    );
  }

  function createPreviewFrame() {
    var container = document.createElement('div');
    var slot = document.createElement('div');
    var device = document.createElement('div');
    var url = new URL(window.location.href);

    url.hash = '';
    url.searchParams.set(previewParam, 'mobile');

    container.className = 'builder-mobile-preview';
    container.hidden = true;
    container.style.setProperty('--builder-device-width', previewDeviceWidth + 'px');
    container.style.setProperty('--builder-device-height', previewDeviceHeight + 'px');
    slot.className = 'builder-mobile-preview__slot';
    device.className = 'builder-mobile-preview__device';
    previewFrame = document.createElement('iframe');
    previewFrame.title = 'Mobile-Vorschau';
    previewFrame.src = url.toString();
    previewFrame.addEventListener('load', function () {
      previewFrameReady = true;
      syncPreview();
    });
    device.appendChild(previewFrame);
    slot.appendChild(device);
    container.appendChild(slot);
    body.appendChild(container);
    window.addEventListener('resize', updatePreviewScale);

    return container;
  }

  function setViewport(viewport) {
    var isMobile = viewport === 'mobile';

    if (isMobile && !previewContainer) {
      previewContainer = createPreviewFrame();
    }
    if (previewContainer) {
      previewContainer.hidden = !isMobile;
    }

    body.classList.toggle('builder-viewport--mobile', isMobile);
    viewportButtons.forEach(function (button) {
      button.setAttribute(
        'aria-pressed',
        String(button.dataset.builderViewport === viewport)
      );
    });

    if (isMobile) {
      updatePreviewScale();
      saveActivePreset();
      syncPreview();
    }
  }

  function applyPreviewState(state) {
    state.fonts.forEach(function (font) {
      if (!/^builder-google-font-[a-z0-9-]+$/.test(font.id) ||
        font.href.indexOf('https://fonts.googleapis.com/') !== 0) {
        return;
      }

      var link = document.getElementById(font.id);
      if (!link) {
        link = document.createElement('link');
        link.id = font.id;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }
      if (link.href !== font.href) {
        link.href = font.href;
      }
    });

    setTheme(state.theme);
    Object.keys(state.values).forEach(function (variable) {
      if (typeof state.values[variable] === 'string') {
        applyVariable(variable, state.values[variable]);
      }
    });
  }

  function updateVariable(event) {
    var field = event.target;
    var variable = field.dataset.builderVariable;
    var value = getInputValue(field);

    if (field.dataset.builderColorHex !== undefined && !isColorValue(value)) {
      setStatus('Bitte einen gültigen Farbwert eingeben, zum Beispiel #ffffff oder rgba(...).', true);
      return;
    }

    if (field.dataset.builderColorHex !== undefined) {
      updateColorInputIndicator(field, value);
      var matchingPicker = panel.querySelector(
        '[data-builder-header-color-picker="' + variable + '"]'
      );
      if (matchingPicker) {
        matchingPicker.value = value;
      }
    }

    applyVariable(variable, value);
    syncPaletteReferences(variable);
    saveActivePreset();
    markChanged();

    setStatus('Änderungen werden live angezeigt.');
  }

  var storage = (function () {
    try {
      var candidate = window.localStorage;
      var testKey = '__openfrontend-builder-test__';
      candidate.setItem(testKey, testKey);
      candidate.removeItem(testKey);
      return candidate;
    } catch (error) {
      return null;
    }
  }());

  function writeState() {
    if (!storage) {
      setStatus('Der Browser-Speicher (localStorage) steht nicht zur Verfügung.', true);
      return false;
    }

    try {
      storage.setItem(storageKey, JSON.stringify({
        templates: templates,
        activeTemplateName: activeTemplateName
      }));
      return true;
    } catch (error) {
      setStatus('Die Vorlage konnte nicht im Browser-Speicher gespeichert werden.', true);
      return false;
    }
  }

  function readState() {
    if (!storage) {
      return null;
    }

    try {
      var stored = storage.getItem(storageKey);

      if (stored) {
        return JSON.parse(stored);
      }

      var legacyTemplates = storage.getItem(legacyTemplatesKey);
      var legacyDraft = storage.getItem(legacyDraftKey);

      if (!legacyTemplates && !legacyDraft) {
        return null;
      }

      var draft = legacyDraft ? JSON.parse(legacyDraft) : {};

      return {
        templates: legacyTemplates ? JSON.parse(legacyTemplates) : {},
        activeTemplateName: draft.activeTemplateName || '',
        activeTheme: draft.activeTheme || activeTheme,
        presets: draft.presets || null,
        migrated: true
      };
    } catch (error) {
      setStatus('Die gespeicherten Vorlagen konnten nicht gelesen werden.', true);
      return null;
    }
  }

  function restoreState() {
    var state = readState();

    if (!state) {
      refreshTemplateOptions();
      updateEditorLock();
      return;
    }

    templates = state.templates && typeof state.templates === 'object' ? state.templates : {};

    activeTemplateName = templates[state.activeTemplateName] &&
      templates[state.activeTemplateName].presets
      ? state.activeTemplateName
      : '';

    if (activeTemplateName) {
      var activeTemplate = templates[activeTemplateName];
      presets = clonePresets(activeTemplate.presets);
      activeTheme = presets[activeTemplate.activeTheme] ? activeTemplate.activeTheme : 'standard';
      ensureVariantPreset(activeTheme);
    }

    if (templateName) {
      templateName.value = activeTemplateName;
    }
    if (themeSelect) {
      themeSelect.value = activeTheme;
    }

    setTheme(activeTheme);
    loadPreset(activeTheme);
    refreshTemplateOptions(activeTemplateName);
    updateEditorLock();

    if (state.migrated && writeState()) {
      storage.removeItem(legacyTemplatesKey);
      storage.removeItem(legacyDraftKey);
    }
  }

  function refreshTemplateOptions(selectedName) {
    if (!templateSelect) {
      return;
    }

    while (templateSelect.options.length > 1) {
      templateSelect.remove(1);
    }

    Object.keys(templates).sort().forEach(function (name) {
      var option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      templateSelect.appendChild(option);
    });

    templateSelect.value = selectedName || '';
    updateTemplateButtonState();
  }

  function updateTemplateButtonState() {
    var hasSelection = Boolean(templateSelect && templateSelect.value);

    if (loadTemplateButton) {
      loadTemplateButton.disabled = !hasSelection;
    }
    if (deleteTemplateButton) {
      deleteTemplateButton.disabled = !hasSelection;
    }
    if (exportTemplateButton) {
      exportTemplateButton.disabled = !hasSelection;
    }
  }

  function saveTemplate() {
    var name = templateName ? templateName.value.trim() : '';

    if (!name) {
      setStatus('Bitte zuerst einen Vorlagennamen eingeben.', true);
      if (templateName) {
        templateName.focus();
      }
      return;
    }

    var isNewTemplate = !activeTemplateName;

    if (isNewTemplate && templates[name]) {
      setStatus('Eine Vorlage „' + name + '“ existiert bereits. Bitte laden oder einen anderen Namen wählen.', true);
      return;
    }

    saveActivePreset();
    templates[name] = {
      activeTheme: activeTheme,
      presets: clonePresets(presets)
    };
    activeTemplateName = name;

    if (writeState()) {
      hasUnsavedChanges = false;
      refreshTemplateOptions(name);
      updateEditorLock();
      setStatus('Vorlage „' + name + '“ wurde ' + (isNewTemplate ? 'erstellt.' : 'gespeichert.'));
      showSaveConfirmation('Vorlage „' + name + '“ ' + (isNewTemplate ? 'erstellt und gespeichert' : 'gespeichert'));
    }
  }

  function loadTemplate(name) {
    var template = templates[name];

    if (!template || !template.presets) {
      return;
    }

    saveActivePreset();
    presets = clonePresets(template.presets);
    activeTemplateName = name;
    activeTheme = presets[template.activeTheme] ? template.activeTheme : 'standard';
    ensureVariantPreset(activeTheme);
    themeSelect.value = activeTheme;
    setTheme(activeTheme);
    loadPreset(activeTheme);
    if (templateName) {
      templateName.value = name;
    }
    writeState();
    hasUnsavedChanges = false;
    refreshTemplateOptions(name);
    updateEditorLock();
    setStatus('Vorlage „' + name + '“ wurde geladen.');
  }

  function deleteTemplate(name) {
    var template = templates[name];

    if (!template || !window.confirm('Vorlage „' + name + '“ wirklich löschen?')) {
      return;
    }

    var previousActiveTemplateName = activeTemplateName;
    var isActiveTemplate = activeTemplateName === name;
    delete templates[name];

    if (isActiveTemplate) {
      activeTemplateName = '';
    }

    if (!writeState()) {
      templates[name] = template;
      activeTemplateName = previousActiveTemplateName;
      refreshTemplateOptions(name);
      return;
    }

    if (templateName && templateName.value.trim() === name) {
      templateName.value = '';
    }

    if (isActiveTemplate) {
      hasUnsavedChanges = false;
      resetEditor();
      updateEditorLock();
    }

    refreshTemplateOptions(activeTemplateName);
    setStatus('Vorlage „' + name + '“ wurde gelöscht.');
  }

  function getTemplateExportFilename(name) {
    var safeName = name
      .trim()
      .replace(/[^A-Za-z0-9._-]+/g, '-')
      .replace(/^-+|-+$/g, '');

    return (safeName || 'vorlage') + '.openfrontend-template.json';
  }

  function exportTemplate(name) {
    var template = templates[name];

    if (!template || !template.presets) {
      setStatus('Bitte zuerst eine gespeicherte Vorlage auswählen.', true);
      return;
    }

    var payload = {
      format: templateExportFormat,
      version: templateExportVersion,
      exportedAt: new Date().toISOString(),
      name: name,
      template: {
        activeTheme: template.activeTheme,
        presets: clonePresets(template.presets)
      }
    };
    var blob = new Blob([JSON.stringify(payload, null, 2) + '\n'], {
      type: 'application/json'
    });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');

    link.href = url;
    link.download = getTemplateExportFilename(name);
    link.hidden = true;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 1000);
    setStatus('Vorlage „' + name + '“ wurde exportiert.');
  }

  function isPlainObject(value) {
    return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
  }

  function parseTemplateExport(content) {
    var payload;

    try {
      payload = JSON.parse(content);
    } catch (error) {
      throw new Error('Die Importdatei enthält kein gültiges JSON.');
    }

    if (!isPlainObject(payload) || payload.format !== templateExportFormat) {
      throw new Error('Die Datei ist keine OpenFrontend-Builder-Vorlage.');
    }
    if (payload.version !== templateExportVersion) {
      throw new Error('Diese Version der Vorlagendatei wird nicht unterstützt.');
    }
    if (typeof payload.name !== 'string' || !payload.name.trim() || payload.name.length > 120) {
      throw new Error('Die Vorlagendatei enthält keinen gültigen Namen.');
    }
    if (!isPlainObject(payload.template) || !isPlainObject(payload.template.presets)) {
      throw new Error('Die Vorlagendatei enthält keine gültigen Designwerte.');
    }

    var availablePresets = createPresets();
    var allowedVariables = {};
    var normalizedPresets = {};

    Object.keys(availablePresets).forEach(function (theme) {
      Object.keys(availablePresets[theme]).forEach(function (variable) {
        allowedVariables[variable] = true;
      });
    });

    Object.keys(availablePresets).forEach(function (theme) {
      var importedPreset = payload.template.presets[theme];

      if (!isPlainObject(importedPreset)) {
        throw new Error('Die Vorlagendatei enthält nicht alle benötigten Varianten.');
      }

      Object.keys(importedPreset).forEach(function (variable) {
        if (!allowedVariables[variable]) {
          throw new Error('Unbekannte Designvariable in der Vorlagendatei: ' + variable);
        }
        if (typeof importedPreset[variable] !== 'string') {
          throw new Error('Ungültiger Wert für die Designvariable: ' + variable);
        }
      });

      normalizedPresets[theme] = Object.assign(
        {},
        availablePresets[theme],
        importedPreset
      );
    });

    if (!normalizedPresets[payload.template.activeTheme]) {
      throw new Error('Die Vorlagendatei enthält keine gültige aktive Variante.');
    }

    return {
      name: payload.name.trim(),
      template: {
        activeTheme: payload.template.activeTheme,
        presets: normalizedPresets
      }
    };
  }

  function importTemplate(file) {
    if (!file) {
      return;
    }
    if (file.size > maxImportFileSize) {
      setStatus('Die Importdatei ist größer als 1 MB.', true);
      return;
    }

    file.text().then(function (content) {
      var imported = parseTemplateExport(content);
      var hasExistingTemplate = Object.prototype.hasOwnProperty.call(
        templates,
        imported.name
      );

      if (
        hasExistingTemplate &&
        !window.confirm('Vorlage „' + imported.name + '“ überschreiben?')
      ) {
        setStatus('Der Import wurde abgebrochen.');
        return;
      }

      var previousTemplate = templates[imported.name];
      var previousActiveTemplateName = activeTemplateName;
      templates[imported.name] = imported.template;
      activeTemplateName = imported.name;

      if (!writeState()) {
        if (hasExistingTemplate) {
          templates[imported.name] = previousTemplate;
        } else {
          delete templates[imported.name];
        }
        activeTemplateName = previousActiveTemplateName;
        refreshTemplateOptions(previousActiveTemplateName);
        return;
      }

      loadTemplate(imported.name);
      setStatus('Vorlage „' + imported.name + '“ wurde importiert und geladen.');
    }).catch(function (error) {
      setStatus(error.message || 'Die Vorlagendatei konnte nicht gelesen werden.', true);
    });
  }

  fields.forEach(function (field) {
    var variable = field.dataset.builderVariable;
    field.addEventListener('input', updateVariable);
    field.addEventListener('change', updateVariable);
  });

  if (colorPicker) {
    colorPicker.addEventListener('input', function () {
      var value = colorPicker.value;
      var hexField = panel.querySelector('[data-builder-color-hex]');
      if (hexField) {
        hexField.value = value;
        updateColorInputIndicator(hexField, value);
      }

      applyVariable('background', value);
      saveActivePreset();
      markChanged();
      setStatus('Änderungen werden live angezeigt.');
    });
  }

  headerColorPickers.forEach(function (picker) {
    picker.addEventListener('input', function () {
      var variable = picker.dataset.builderHeaderColorPicker;
      var value = picker.value;
      var hexField = panel.querySelector(
        '[data-builder-variable="' + variable + '"][data-builder-color-hex]'
      );
      if (hexField) {
        hexField.value = value;
        updateColorInputIndicator(hexField, value);
      }
      applyVariable(variable, value);
      saveActivePreset();
      markChanged();
      setStatus('Änderungen werden live angezeigt.');
    });
  });

  colorSources.forEach(function (source) {
    source.addEventListener('change', function () {
      if (source.value) {
        applyPaletteSource(source.dataset.builderColorSource, source.value);
        saveActivePreset();
        markChanged();
      }
      setStatus('Farbpalette wurde angewendet.');
    });
  });

  googleFontInputs.forEach(setupGoogleFontSearch);

  if (themeSelect) {
    themeSelect.addEventListener('change', function () {
      saveActivePreset();
      activeTheme = themeSelect.value;
      ensureVariantPreset(activeTheme);
      setTheme(themeSelect.value);
      loadPreset(activeTheme);
      markChanged();
      setStatus('Variante: ' + themeSelect.options[themeSelect.selectedIndex].text);
    });
    setTheme(themeSelect.value);
    loadPreset(activeTheme);
  }

  if (saveTemplateButton) {
    saveTemplateButton.addEventListener('click', saveTemplate);
  }

  if (templateSelect) {
    templateSelect.addEventListener('change', function () {
      updateTemplateButtonState();
    });
  }

  if (loadTemplateButton) {
    loadTemplateButton.addEventListener('click', function () {
      if (!confirmDiscardChanges()) {
        return;
      }
      loadTemplate(templateSelect ? templateSelect.value : '');
    });
  }

  if (deleteTemplateButton) {
    deleteTemplateButton.addEventListener('click', function () {
      deleteTemplate(templateSelect ? templateSelect.value : '');
    });
  }

  if (exportTemplateButton) {
    exportTemplateButton.addEventListener('click', function () {
      exportTemplate(templateSelect ? templateSelect.value : '');
    });
  }

  viewportButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      setViewport(button.dataset.builderViewport);
    });
  });

  if (isPreviewFrame) {
    window.addEventListener('message', function (event) {
      var state = event.data;

      if (
        event.origin !== window.location.origin ||
        event.source !== window.parent ||
        !state ||
        state.type !== previewMessageType ||
        !presets[state.theme] ||
        !isPlainObject(state.values) ||
        !Array.isArray(state.fonts)
      ) {
        return;
      }

      applyPreviewState(state);
    });
  }

  if (importTemplateButton && importFileInput) {
    importTemplateButton.addEventListener('click', function () {
      if (!confirmDiscardChanges()) {
        return;
      }
      importFileInput.click();
    });
    importFileInput.addEventListener('change', function () {
      var file = importFileInput.files && importFileInput.files[0];
      importFileInput.value = '';
      importTemplate(file);
    });
  }

  if (!isPreviewFrame) {
    window.addEventListener('beforeunload', function (event) {
      if (hasUnsavedChanges) {
        event.preventDefault();
        event.returnValue = '';
      }
    });
  }

  restoreState();
}());
