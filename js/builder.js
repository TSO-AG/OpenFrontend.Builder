(function () {
  'use strict';

  var root = document.documentElement;
  var body = document.body;
  var panel = document.querySelector('[data-builder-panel]');

  if (!panel) {
    return;
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
  var googleFontButtons = panel.querySelectorAll('[data-builder-google-font-apply]');
  var sectionSelect = panel.querySelector('[data-builder-section-select]');
  var themeSelect = panel.querySelector('[data-builder-theme]');
  var templateThemeSelect = panel.querySelector('[data-builder-template-theme]');
  var status = panel.querySelector('[data-builder-status]');
  var templateName = panel.querySelector('[data-builder-template-name]');
  var templateSelect = panel.querySelector('[data-builder-template]');
  var loadTemplateButton = panel.querySelector('[data-builder-load-template]');
  var saveTemplateButton = panel.querySelector('[data-builder-save]');
  var deleteTemplateButton = panel.querySelector('[data-builder-delete]');
  var resetTemplateColorsButton = panel.querySelector('[data-builder-reset-template-colors]');
  var resetDraftButton = panel.querySelector('[data-builder-reset-draft]');
  var exportButton = panel.querySelector('[data-builder-export]');
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
  var storageKey = 'openfrontend-builder-templates';
  var draftStorageKey = 'openfrontend-builder-draft';
  var templates = {};

  function showBuilderSection(sectionName) {
    panel.querySelectorAll('[data-builder-section]').forEach(function (section) {
      section.hidden = section.dataset.builderSection !== sectionName;
    });
  }

  function updateEditorVisibility() {
    showBuilderSection(sectionSelect ? sectionSelect.value : 'setup');
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

  function loadGoogleFont(input) {
    var family = input.value.trim();
    var variable = input.dataset.builderGoogleFont;

    if (!family) {
      setStatus('Bitte zuerst einen Google-Font-Namen eingeben.', true);
      return;
    }

    if (!/^[A-Za-z0-9 .'-]+$/.test(family)) {
      setStatus('Bitte einen gültigen Google-Font-Namen eingeben.', true);
      return;
    }

    var linkId = 'builder-google-font-' + variable;
    var link = document.getElementById(linkId);
    if (!link) {
      link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    link.href = 'https://fonts.googleapis.com/css2?family=' +
      encodeURIComponent(family).replace(/%20/g, '+') +
      ':wght@100;200;300;400;500;600;700;800;900&display=swap';
    var fontValue = "'" + family.replace(/'/g, "\\'") + "', sans-serif";
    applyVariable(variable, fontValue);
    saveActivePreset();
    presets[activeTheme][variable] = fontValue;
    writeDraft();
    saveCurrentTemplate();
    setStatus('Google-Schriftart wird geladen: ' + family);
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
  }

  function clonePresets(source) {
    var copy = {};

    Object.keys(source).forEach(function (theme) {
      copy[theme] = Object.assign({}, source[theme]);
    });

    return copy;
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
      input.value = '';
    });
  }

  function setTheme(theme) {
    body.classList.remove(
      'builder-theme--standard',
      'builder-theme--custom',
      'builder-theme--dark',
      'builder-theme--light'
    );
    body.classList.add('builder-theme--' + theme);
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
    writeDraft();
    saveCurrentTemplate();

    setStatus('Änderungen werden live angezeigt.');
  }

  function readTemplates() {
    try {
      var stored = window.localStorage.getItem(storageKey);
      templates = stored ? JSON.parse(stored) : {};
    } catch (error) {
      templates = {};
      setStatus('Vorlagen konnten nicht geladen werden.', true);
    }
  }

  function writeTemplates() {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(templates));
      return true;
    } catch (error) {
      setStatus('Vorlage konnte nicht gespeichert werden.', true);
      return false;
    }
  }

  function writeDraft() {
    try {
      window.localStorage.setItem(draftStorageKey, JSON.stringify({
        activeTheme: activeTheme,
        activeTemplateName: activeTemplateName,
        presets: clonePresets(presets)
      }));
    } catch (error) {
      setStatus('Aktuelle Änderungen konnten nicht zwischengespeichert werden.', true);
    }
  }

  function readDraft() {
    try {
      var stored = window.localStorage.getItem(draftStorageKey);
      var draft = stored ? JSON.parse(stored) : null;

      if (!draft || !draft.presets) {
        return;
      }

      presets = clonePresets(draft.presets);
      activeTheme = presets[draft.activeTheme] ? draft.activeTheme : activeTheme;
      ensureVariantPreset(activeTheme);
      activeTemplateName = draft.activeTemplateName || '';
      if (!templates[activeTemplateName]) {
        activeTemplateName = '';
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
      updateEditorVisibility();
    } catch (error) {
      setStatus('Aktuelle Änderungen konnten nicht wiederhergestellt werden.', true);
    }
  }

  function resetDraft() {
    if (!window.confirm('Soll der aktuelle Entwurf wirklich zurückgesetzt werden?')) {
      return;
    }

    window.localStorage.removeItem(draftStorageKey);
    activeTemplateName = '';
    if (templateName) {
      templateName.value = '';
    }
    presets = createPresets();
    activeTheme = 'standard';

    if (themeSelect) {
      themeSelect.value = activeTheme;
    }
    if (templateThemeSelect) {
      templateThemeSelect.value = activeTheme;
    }

    setTheme(activeTheme);
    loadPreset(activeTheme);
    refreshTemplateOptions();
    updateEditorVisibility();
    setStatus('Der aktuelle Entwurf wurde zurückgesetzt.');
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
    if (deleteTemplateButton) {
      deleteTemplateButton.disabled = !templateSelect.value;
    }
    if (loadTemplateButton) {
      loadTemplateButton.disabled = !templateSelect.value;
    }
    if (resetTemplateColorsButton) {
      resetTemplateColorsButton.disabled = !activeTemplateName || !templates[activeTemplateName];
    }
  }

  function resetTemplateColors() {
    if (!activeTemplateName || !templates[activeTemplateName]) {
      return;
    }

    if (!window.confirm('Sollen alle Farben dieser Vorlage auf den Standard zurückgesetzt werden?')) {
      return;
    }

    colorVariables.forEach(function (variable) {
      var value = defaults[variable];
      if (value === undefined) {
        return;
      }

      var field = panel.querySelector('[data-builder-variable="' + variable + '"]');
      if (field) {
        setInputValue(field, value);
      }
      applyVariable(variable, value);
    });

    panel.querySelectorAll('[data-builder-color-source]').forEach(function (source) {
      source.value = '';
    });
    function resetPaletteSource(variable, sourceVariable) {
      var source = panel.querySelector('[data-builder-color-source="' + variable + '"]');
      if (source) {
        source.value = sourceVariable || '';
      }
      if (sourceVariable) {
        applyPaletteSource(variable, sourceVariable);
      }
    }
    buttonColorDefinitions.forEach(function (definition) {
      ['text', 'background', 'border'].forEach(function (property) {
        resetPaletteSource(
          definition.prefix + '-' + definition.state + '-' + property + '-color',
          definition[property] === 'underline' || definition[property] === 'transparent'
            ? ''
            : definition[property]
        );
      });
    });
    resetPaletteSource('input-text-color', formColorDefinition.text);
    resetPaletteSource('input-background-color', formColorDefinition.background);
    resetPaletteSource('input-border-color', formColorDefinition.border);
    accordionColorDefinitions.forEach(function (definition) {
      ['text', 'background', 'border'].forEach(function (property) {
        resetPaletteSource(
          definition.prefix + '-' + property + '-color',
          definition[property] || ''
        );
      });
    });
    tabsColorDefinitions.forEach(function (definition) {
      ['text', 'background', 'border'].forEach(function (property) {
        resetPaletteSource(
          definition.prefix + '-' + property + '-color',
          definition[property] || ''
        );
      });
    });

    if (colorPicker) {
      colorPicker.value = defaults.background;
    }
    headerColorPickers.forEach(function (picker) {
      var variable = picker.dataset.builderHeaderColorPicker;
      if (defaults[variable] !== undefined) {
        picker.value = defaults[variable];
      }
    });

    saveActivePreset();
    writeDraft();
    saveCurrentTemplate();
    setStatus('Alle Farben wurden auf den Standard zurückgesetzt.');
  }

  function saveCurrentTemplate() {
    if (!activeTemplateName || !templates[activeTemplateName]) {
      return;
    }

    templates[activeTemplateName] = {
      activeTheme: activeTheme,
      presets: clonePresets(presets)
    };
    writeTemplates();
    refreshTemplateOptions(activeTemplateName);
    updateEditorVisibility();
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

    saveActivePreset();
    templates[name] = {
      activeTheme: activeTheme,
      presets: clonePresets(presets)
    };
    activeTemplateName = name;

    if (writeTemplates()) {
      refreshTemplateOptions(name);
      updateEditorVisibility();
      setStatus('Vorlage „' + name + '“ wurde gespeichert.');
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
    writeDraft();
    refreshTemplateOptions(name);
    updateEditorVisibility();
    setStatus('Vorlage „' + name + '“ wurde geladen.');
  }

  function deleteTemplate() {
    var name = templateSelect ? templateSelect.value : '';

    if (!name || !templates[name]) {
      return;
    }

    delete templates[name];
    if (activeTemplateName === name) {
      activeTemplateName = '';
    }
    if (writeTemplates()) {
      templateName.value = '';
      refreshTemplateOptions();
      updateEditorVisibility();
      setStatus('Vorlage „' + name + '“ wurde gelöscht.');
    }
  }

  function formatScssValue(variable, value) {
    if (variable.indexOf('font-size') !== -1) {
      return value + 'rem';
    }

    if (variable === 'surface-shadow') {
      return getShadowValue(value);
    }

    return value;
  }

  function createScssExport() {
    var lines = [
      '// Generated by the OpenFrontend Design-Builder.',
      '// Edit this file to apply the design to another project.',
      ''
    ];
    function resolveExportColor(preset, variable) {
      var value = preset[variable];
      if (value === undefined || value === '') {
        return 'transparent';
      }
      if (paletteOptions.some(function (option) {
        return option[1] === value;
      })) {
        return preset[value] || 'transparent';
      }
      return value;
    }

    Object.keys(presets).forEach(function (theme) {
      var preset = Object.assign({}, defaults, presets[theme]);
      lines.push('$builder-' + theme + '-primary: ' + formatScssValue('primary', preset.primary) + ';');
      lines.push('$builder-' + theme + '-secondary: ' + formatScssValue('secondary', preset.secondary) + ';');
      lines.push('$builder-' + theme + '-background: ' + formatScssValue('background', preset.background) + ';');
      lines.push('$builder-' + theme + '-text: ' + formatScssValue('text', preset.text) + ';');
      lines.push('$builder-' + theme + '-heading: ' + formatScssValue('heading', preset.heading) + ';');
      lines.push('$builder-' + theme + '-body-font-size: ' + formatScssValue('body-font-size', preset['body-font-size']) + ';');
      lines.push('$builder-' + theme + '-heading-font-size: ' + formatScssValue('heading-font-size', preset['heading-font-size']) + ';');
      lines.push('$builder-' + theme + '-body-line-height: ' + formatScssValue('body-line-height', preset['body-line-height']) + ';');
      lines.push('$builder-' + theme + '-heading-font-family: ' + preset['heading-font-family'] + ';');
      lines.push('$builder-' + theme + '-body-font-family: ' + preset['body-font-family'] + ';');
      lines.push('$builder-' + theme + '-heading-h1-size: ' + preset['heading-h1-size'] + 'rem;');
      lines.push('$builder-' + theme + '-heading-h2-size: ' + preset['heading-h2-size'] + 'rem;');
      lines.push('$builder-' + theme + '-heading-h3-size: ' + preset['heading-h3-size'] + 'rem;');
      lines.push('$builder-' + theme + '-heading-h4-size: ' + preset['heading-h4-size'] + 'rem;');
      lines.push('$builder-' + theme + '-heading-h5-size: ' + preset['heading-h5-size'] + 'rem;');
      lines.push('$builder-' + theme + '-heading-h6-size: ' + preset['heading-h6-size'] + 'rem;');
      lines.push('$builder-' + theme + '-heading-h1-color: ' + preset['heading-h1-color'] + ';');
      lines.push('$builder-' + theme + '-heading-h2-color: ' + preset['heading-h2-color'] + ';');
      lines.push('$builder-' + theme + '-heading-h3-color: ' + preset['heading-h3-color'] + ';');
      lines.push('$builder-' + theme + '-heading-h4-color: ' + preset['heading-h4-color'] + ';');
      lines.push('$builder-' + theme + '-heading-h5-color: ' + preset['heading-h5-color'] + ';');
      lines.push('$builder-' + theme + '-heading-h6-color: ' + preset['heading-h6-color'] + ';');
      lines.push('$builder-' + theme + '-subheadline-color: ' + preset['subheadline-color'] + ';');
      buttonColorDefinitions.forEach(function (definition) {
        ['text', 'background', 'border'].forEach(function (property) {
          var variable = definition.prefix + '-' + definition.state + '-' + property + '-color';
          lines.push('$builder-' + theme + '-' + variable + ': ' + resolveExportColor(preset, variable) + ';');
        });
      });
      lines.push('$builder-' + theme + '-input-text-color: ' + preset['input-text-color'] + ';');
      lines.push('$builder-' + theme + '-input-background-color: ' + preset['input-background-color'] + ';');
      lines.push('$builder-' + theme + '-input-border-color: ' + preset['input-border-color'] + ';');
      accordionColorDefinitions.forEach(function (definition) {
        ['text', 'background', 'border'].forEach(function (property) {
          var variable = definition.prefix + '-' + property + '-color';
          lines.push('$builder-' + theme + '-' + variable + ': ' + resolveExportColor(preset, variable) + ';');
        });
      });
      tabsColorDefinitions.forEach(function (definition) {
        ['text', 'background', 'border'].forEach(function (property) {
          var variable = definition.prefix + '-' + property + '-color';
          lines.push('$builder-' + theme + '-' + variable + ': ' + resolveExportColor(preset, variable) + ';');
        });
      });
      lines.push('$builder-' + theme + '-header-background: ' + preset['header-background'] + ';');
      lines.push('$builder-' + theme + '-header-menu-background: ' + preset['header-menu-background'] + ';');
      lines.push('$builder-' + theme + '-navigation-font-size: ' + preset['navigation-font-size'] + 'rem;');
      lines.push('$builder-' + theme + '-footer-column-1: ' + preset['footer-column-1'] + ';');
      lines.push('$builder-' + theme + '-footer-column-2: ' + preset['footer-column-2'] + ';');
      lines.push('$builder-' + theme + '-footer-column-3: ' + preset['footer-column-3'] + ';');
      lines.push('$builder-' + theme + '-footer-column-4: ' + preset['footer-column-4'] + ';');
      lines.push('$builder-' + theme + '-footer-background: ' + preset['footer-background'] + ';');
      lines.push('$builder-' + theme + '-footer-text-color: ' + preset['footer-text-color'] + ';');
      lines.push('$builder-' + theme + '-footer-font-size-desktop: ' + preset['footer-font-size-desktop'] + 'px;');
      lines.push('$builder-' + theme + '-footer-font-size-mobile: ' + preset['footer-font-size-mobile'] + 'px;');
      lines.push('$builder-' + theme + '-link-color: ' + preset['link-color'] + ';');
      lines.push('$builder-' + theme + '-link-hover-color: ' + preset['link-hover-color'] + ';');
      lines.push('$builder-' + theme + '-button-shape: ' + preset['button-shape'] + ';');
      lines.push('$builder-' + theme + '-input-border-color: ' + preset['input-border-color'] + ';');
      lines.push('$builder-' + theme + '-input-focus-color: ' + preset['input-focus-color'] + ';');
      lines.push('$builder-' + theme + '-surface-color: ' + preset['surface-color'] + ';');
      lines.push('$builder-' + theme + '-surface-shadow: ' + formatScssValue('surface-shadow', preset['surface-shadow']) + ';');
      lines.push('$builder-' + theme + '-image-shape: ' + preset['image-shape'] + ';');
      lines.push('$builder-' + theme + '-input-shape: ' + preset['input-shape'] + ';');
      lines.push('$builder-' + theme + '-table-style: ' + preset['table-style'] + ';');
      lines.push('$builder-' + theme + '-accordion-style: ' + preset['accordion-style'] + ';');
      lines.push('$builder-' + theme + '-tabs-style: ' + preset['tabs-style'] + ';');
      lines.push('$builder-' + theme + '-teaser-style: ' + preset['teaser-style'] + ';');
      lines.push('$builder-' + theme + '-teaser-shape: ' + preset['teaser-shape'] + ';');
      teaserColorDefinitions.forEach(function (definition) {
        ['text', 'background', 'border'].forEach(function (property) {
          var variable = definition.prefix + '-' + property + '-color';
          lines.push('$builder-' + theme + '-' + variable + ': ' + preset[variable] + ';');
        });
      });
      lines.push('');
    });

    lines.push('/* ----------------------------------------------------------------');
    lines.push('  custom.scss-compatible wrapper overrides');
    lines.push('  Copy this section into the project custom.scss.');
    lines.push('-----------------------------------------------------------------*/');
    lines.push('');

    Object.keys(presets).forEach(function (theme) {
      var preset = Object.assign({}, defaults, presets[theme]);
      var wrapperSelector = theme === 'standard' ? '.wrapper' : '.wrapper-bg-' + theme;
      lines.push(wrapperSelector + ' {');
      lines.push('  --bs-primary: ' + preset.primary + ';');
      lines.push('  --bs-secondary: ' + preset.secondary + ';');
      lines.push('  --bs-success: ' + preset.success + ';');
      lines.push('  --bs-danger: ' + preset.danger + ';');
      lines.push('  --bs-warning: ' + preset.warning + ';');
      lines.push('  --bs-info: ' + preset.info + ';');
      lines.push('  --bs-light: ' + preset.light + ';');
      lines.push('  --bs-dark: ' + preset.dark + ';');
      lines.push('  --bs-wrapper-bg-color: ' + preset.background + ';');
      lines.push('  --bs-wrapper-color: ' + preset.text + ';');
      lines.push('  --bs-body-color: ' + preset.text + ';');
      lines.push('  --bs-heading-color: ' + preset.heading + ';');
      lines.push('  --bs-link-color: ' + preset['link-color'] + ';');
      lines.push('  --bs-link-hover-color: ' + preset['link-hover-color'] + ';');
      lines.push('  --bs-body-font-family: ' + preset['body-font-family'] + ';');
      lines.push('  --bs-heading-font-family: ' + preset['heading-font-family'] + ';');
      lines.push('  --bs-body-font-size: ' + preset['body-font-size'] + 'rem;');
      lines.push('}');
      lines.push('');
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(function (heading) {
        lines.push(wrapperSelector + ' ' + heading + ' {');
        lines.push('  color: ' + preset['heading-' + heading + '-color'] + ';');
        lines.push('  font-size: ' + preset['heading-' + heading + '-size'] + 'rem;');
        lines.push('}');
      });
      lines.push('');
      lines.push(wrapperSelector + ' .subheadline,');
      lines.push(wrapperSelector + ' .item-info-subheadline {');
      lines.push('  color: ' + preset['subheadline-color'] + ';');
      lines.push('}');
      lines.push('');

      buttonColorDefinitions.forEach(function (definition) {
        var selector;
        if (definition.prefix === 'link') {
          selector = wrapperSelector + ' a:not(.btn)';
        } else {
          selector = wrapperSelector + ' .btn-' + definition.prefix.replace('button-', '');
        }
        if (definition.state === 'hover') {
          selector += ':hover';
        }
        lines.push(selector + ' {');
        lines.push('  color: ' + resolveExportColor(preset, definition.prefix + '-' + definition.state + '-text-color') + ';');
        lines.push('  background-color: ' + resolveExportColor(preset, definition.prefix + '-' + definition.state + '-background-color') + ';');
        if (definition.prefix === 'link') {
          var textDecoration = resolveExportColor(
            preset,
            definition.prefix + '-' + definition.state + '-border-color'
          );
          lines.push('  text-decoration: ' + (textDecoration === 'transparent' ? 'none' : textDecoration) + ';');
        } else {
          lines.push('  border-color: ' + resolveExportColor(preset, definition.prefix + '-' + definition.state + '-border-color') + ';');
        }
        lines.push('}');
        lines.push('');
      });

      lines.push(wrapperSelector + ' input:not([type="checkbox"]):not([type="radio"]):not([type="color"]),');
      lines.push(wrapperSelector + ' select,');
      lines.push(wrapperSelector + ' textarea {');
      lines.push('  color: ' + resolveExportColor(preset, 'input-text-color') + ';');
      lines.push('  background-color: ' + resolveExportColor(preset, 'input-background-color') + ';');
      lines.push('  border-color: ' + resolveExportColor(preset, 'input-border-color') + ';');
      lines.push('}');
      lines.push('');
      lines.push(wrapperSelector + ' .accordion .accordion-button {');
      lines.push('  color: ' + resolveExportColor(preset, 'accordion-title-text-color') + ';');
      lines.push('  background-color: ' + resolveExportColor(preset, 'accordion-title-background-color') + ';');
      lines.push('  border-color: ' + resolveExportColor(preset, 'accordion-title-border-color') + ';');
      lines.push('}');
      lines.push(wrapperSelector + ' .accordion .accordion-body {');
      lines.push('  color: ' + resolveExportColor(preset, 'accordion-text-text-color') + ';');
      lines.push('  background-color: ' + resolveExportColor(preset, 'accordion-text-background-color') + ';');
      lines.push('  border-color: ' + resolveExportColor(preset, 'accordion-text-border-color') + ';');
      lines.push('}');
      lines.push('');
      lines.push(wrapperSelector + ' .nav-tabs .nav-link.active {');
      lines.push('  color: ' + resolveExportColor(preset, 'tabs-active-text-color') + ';');
      lines.push('  background-color: ' + resolveExportColor(preset, 'tabs-active-background-color') + ';');
      lines.push('  border-color: ' + resolveExportColor(preset, 'tabs-active-border-color') + ';');
      lines.push('}');
      lines.push(wrapperSelector + ' .nav-tabs .nav-link:not(.active) {');
      lines.push('  color: ' + resolveExportColor(preset, 'tabs-inactive-text-color') + ';');
      lines.push('  background-color: ' + resolveExportColor(preset, 'tabs-inactive-background-color') + ';');
      lines.push('  border-color: ' + resolveExportColor(preset, 'tabs-inactive-border-color') + ';');
      lines.push('}');
      lines.push('');
      lines.push(wrapperSelector + ' .object-teaser .wrapper:not(.compact-view) {');
      lines.push('  color: ' + preset['teaser-standard-text-color'] + ';');
      lines.push('  background-color: ' + preset['teaser-standard-background-color'] + ';');
      lines.push('  border: ' + preset['teaser-standard-border-color'] + ';');
      lines.push('}');
      lines.push(wrapperSelector + ' .object-teaser .wrapper.compact-view {');
      lines.push('  color: ' + preset['teaser-compact-text-color'] + ';');
      lines.push('  background-color: ' + preset['teaser-compact-background-color'] + ';');
      lines.push('  border: ' + preset['teaser-compact-border-color'] + ';');
      lines.push('}');
      lines.push('');
    });

    Object.keys(presets).forEach(function (theme) {
      var preset = presets[theme];
      lines.push('body.builder-theme--' + theme + ' {');
      lines.push('  font-family: $builder-' + theme + '-body-font-family;');
      lines.push('  --builder-heading-font-family: #{$builder-' + theme + '-heading-font-family};');
      lines.push('  --builder-header-background: #{$builder-' + theme + '-header-background};');
      lines.push('  --builder-header-menu-background: #{$builder-' + theme + '-header-menu-background};');
      lines.push('  --builder-footer-background: #{$builder-' + theme + '-footer-background};');
      lines.push('  --builder-navigation-font-size: #{$builder-' + theme + '-navigation-font-size};');
      lines.push('  --builder-footer-text-color: #{$builder-' + theme + '-footer-text-color};');
      lines.push('  --builder-footer-font-size-desktop: #{$builder-' + theme + '-footer-font-size-desktop};');
      lines.push('  --builder-footer-font-size-mobile: #{$builder-' + theme + '-footer-font-size-mobile};');
      lines.push('}');
      lines.push('');
      lines.push('body.builder-theme--' + theme + ' h1 { font-size: $builder-' + theme + '-heading-h1-size; }');
      lines.push('body.builder-theme--' + theme + ' h2 { font-size: $builder-' + theme + '-heading-h2-size; }');
      lines.push('body.builder-theme--' + theme + ' h3 { font-size: $builder-' + theme + '-heading-h3-size; }');
      lines.push('body.builder-theme--' + theme + ' h4 { font-size: $builder-' + theme + '-heading-h4-size; }');
      lines.push('body.builder-theme--' + theme + ' h5 { font-size: $builder-' + theme + '-heading-h5-size; }');
      lines.push('body.builder-theme--' + theme + ' h6 { font-size: $builder-' + theme + '-heading-h6-size; }');
      lines.push('body.builder-theme--' + theme + ' h1 { color: $builder-' + theme + '-heading-h1-color; }');
      lines.push('body.builder-theme--' + theme + ' h2 { color: $builder-' + theme + '-heading-h2-color; }');
      lines.push('body.builder-theme--' + theme + ' h3 { color: $builder-' + theme + '-heading-h3-color; }');
      lines.push('body.builder-theme--' + theme + ' h4 { color: $builder-' + theme + '-heading-h4-color; }');
      lines.push('body.builder-theme--' + theme + ' h5 { color: $builder-' + theme + '-heading-h5-color; }');
      lines.push('body.builder-theme--' + theme + ' h6 { color: $builder-' + theme + '-heading-h6-color; }');
      lines.push('');
      lines.push('body.builder-theme--' + theme + '.builder-button-shape--square .btn,');
      lines.push('body.builder-theme--' + theme + '.builder-input-shape--square input,');
      lines.push('body.builder-theme--' + theme + '.builder-input-shape--square select,');
      lines.push('body.builder-theme--' + theme + '.builder-input-shape--square textarea { border-radius: 0; }');
      lines.push('body.builder-theme--' + theme + '.builder-button-shape--pill .btn { border-radius: 50rem; }');
      lines.push('body.builder-theme--' + theme + '.builder-image-shape--circle figure img,');
      lines.push('body.builder-theme--' + theme + '.builder-image-shape--circle .image_container img { border-radius: 50%; }');
      lines.push('body.builder-theme--' + theme + '.builder-table--striped table tbody tr:nth-child(even) { background-color: rgba(0, 0, 0, .035); }');
      lines.push('body.builder-theme--' + theme + '.builder-accordion--flat .accordion-item { border: 0; border-radius: 0; }');
      lines.push('body.builder-theme--' + theme + '.builder-tabs--underline .nav-tabs .nav-link { border-width: 0 0 2px; border-radius: 0; }');
      lines.push('');
      lines.push('body.builder-theme--' + theme + ' {');
      lines.push('  font-size: $builder-' + theme + '-body-font-size;');
      lines.push('  line-height: $builder-' + theme + '-body-line-height;');
      lines.push('}');
      lines.push('');
      lines.push('body.builder-theme--' + theme + ' h1,');
      lines.push('body.builder-theme--' + theme + ' h2,');
      lines.push('body.builder-theme--' + theme + ' h3,');
      lines.push('body.builder-theme--' + theme + ' h4,');
      lines.push('body.builder-theme--' + theme + ' h5,');
      lines.push('body.builder-theme--' + theme + ' h6 {');
      lines.push('  font-size: $builder-' + theme + '-heading-font-size;');
      lines.push('  color: $builder-' + theme + '-heading;');
      lines.push('}');
      lines.push('');
      lines.push('body.builder-theme--' + theme + ' .wrapper {');
      lines.push('  --bs-wrapper-bg-color: #{$builder-' + theme + '-background};');
      lines.push('  --bs-wrapper-color: #{$builder-' + theme + '-text};');
      lines.push('  --bs-body-color: #{$builder-' + theme + '-text};');
      lines.push('  --bs-heading-color: #{$builder-' + theme + '-heading};');
      lines.push('  --bs-link-color: #{$builder-' + theme + '-primary};');
      lines.push('  --bs-primary: #{$builder-' + theme + '-primary};');
      lines.push('  --bs-secondary: #{$builder-' + theme + '-secondary};');
      lines.push('}');
      lines.push('');
      lines.push('body.builder-theme--' + theme + ' {');
      lines.push('  --bs-link-color: #{$builder-' + theme + '-link-color};');
      lines.push('  --bs-link-hover-color: #{$builder-' + theme + '-link-hover-color};');
      lines.push('}');
      lines.push('');
      lines.push('body.builder-theme--' + theme + ' > .mod_article a:not(.btn),');
      lines.push('body.builder-theme--' + theme + ' > main a:not(.btn) {');
      lines.push('  color: $builder-' + theme + '-link-color;');
      lines.push('}');
      lines.push('');
      lines.push('body.builder-theme--' + theme + ' > .mod_article a:not(.btn):hover,');
      lines.push('body.builder-theme--' + theme + ' > main a:not(.btn):hover {');
      lines.push('  color: $builder-' + theme + '-link-hover-color;');
      lines.push('}');
      lines.push('');
      lines.push('body.builder-theme--' + theme + ' > .mod_article input:not([type="checkbox"]):not([type="radio"]):not([type="color"]),');
      lines.push('body.builder-theme--' + theme + ' > .mod_article select,');
      lines.push('body.builder-theme--' + theme + ' > .mod_article textarea,');
      lines.push('body.builder-theme--' + theme + ' > main input:not([type="checkbox"]):not([type="radio"]):not([type="color"]),');
      lines.push('body.builder-theme--' + theme + ' > main select,');
      lines.push('body.builder-theme--' + theme + ' > main textarea {');
      lines.push('  border-color: $builder-' + theme + '-input-border-color;');
      lines.push('}');
      lines.push('');
      lines.push('body.builder-theme--' + theme + ' > .mod_article .card,');
      lines.push('body.builder-theme--' + theme + ' > main .card {');
      lines.push('  background-color: $builder-' + theme + '-surface-color;');
      lines.push('  box-shadow: $builder-' + theme + '-surface-shadow;');
      lines.push('}');
      lines.push('');
    });

    return lines.join('\n');
  }

  function createProjectScssExport() {
    var lines = [
      '/* ----------------------------------------------------------------',
      '  OpenFrontend Design-Builder values',
      '  Generated wrapper overrides for custom.scss',
      '-----------------------------------------------------------------*/',
      ''
    ];
    function resolveColor(preset, variable) {
      var value = preset[variable];
      if (value === undefined || value === '') {
        return 'transparent';
      }
      if (paletteOptions.some(function (option) {
        return option[1] === value;
      })) {
        return preset[value] || 'transparent';
      }
      return value;
    }

    Object.keys(presets).forEach(function (theme) {
      var preset = Object.assign({}, defaults, presets[theme]);
      var selector = theme === 'standard' ? '.wrapper' : '.wrapper-bg-' + theme;

      lines.push('/* Schema ' + theme.charAt(0).toUpperCase() + theme.slice(1) + ' */');
      lines.push(selector + ' {');
      lines.push('  --bs-primary: ' + preset.primary + ';');
      lines.push('  --bs-secondary: ' + preset.secondary + ';');
      lines.push('  --bs-success: ' + preset.success + ';');
      lines.push('  --bs-danger: ' + preset.danger + ';');
      lines.push('  --bs-warning: ' + preset.warning + ';');
      lines.push('  --bs-info: ' + preset.info + ';');
      lines.push('  --bs-light: ' + preset.light + ';');
      lines.push('  --bs-dark: ' + preset.dark + ';');
      lines.push('  --bs-wrapper-bg-color: ' + preset.background + ';');
      lines.push('  --bs-wrapper-color: ' + preset.text + ';');
      lines.push('  --bs-body-color: ' + preset.text + ';');
      lines.push('  --bs-heading-color: ' + preset.heading + ';');
      lines.push('  --bs-link-color: ' + preset['link-color'] + ';');
      lines.push('  --bs-link-hover-color: ' + preset['link-hover-color'] + ';');
      lines.push('  --bs-font-sans-serif: ' + preset['body-font-family'] + ';');
      lines.push('  --bs-body-font-family: ' + preset['body-font-family'] + ';');
      lines.push('  --bs-heading-font-family: ' + preset['heading-font-family'] + ';');
      lines.push('  --bs-body-font-weight: ' + preset['body-font-weight'] + ';');
      lines.push('  --bs-heading-font-weight: ' + preset['heading-font-weight'] + ';');
      lines.push('  --bs-body-font-size: ' + preset['body-font-size'] + 'rem;');
      lines.push('  font-family: ' + preset['body-font-family'] + ';');
      lines.push('  font-size: ' + preset['body-font-size-desktop'] + 'px;');
      lines.push('  font-weight: ' + preset['body-font-weight'] + ';');
      lines.push('');

      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(function (heading) {
        lines.push('  ' + heading + ' {');
        lines.push('    color: ' + preset['heading-' + heading + '-color'] + ';');
        lines.push('    font-family: ' + preset['heading-font-family'] + ';');
        lines.push('    font-size: ' + preset['heading-' + heading + '-desktop'] + 'px;');
        lines.push('    font-weight: ' + preset['heading-font-weight'] + ';');
        lines.push('  }');
      });
      lines.push('');
      lines.push('  .subheadline,');
      lines.push('  .item-info-subheadline {');
      lines.push('    color: ' + preset['subheadline-color'] + ';');
      lines.push('    font-size: ' + preset['subheadline-font-size-desktop'] + 'px;');
      lines.push('  }');
      lines.push('');
      lines.push('  .lead,');
      lines.push('  .lead-text {');
      lines.push('    font-size: ' + preset['lead-text-font-size-desktop'] + 'px;');
      lines.push('  }');
      lines.push('');
      lines.push('  @media (max-width: 767px) {');
      lines.push('    font-size: ' + preset['body-font-size-mobile'] + 'px;');
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(function (heading) {
        lines.push('    ' + heading + ' {');
        lines.push('      font-size: ' + preset['heading-' + heading + '-mobile'] + 'px;');
        lines.push('    }');
      });
      lines.push('    .subheadline,');
      lines.push('    .item-info-subheadline {');
      lines.push('      font-size: ' + preset['subheadline-font-size-mobile'] + 'px;');
      lines.push('    }');
      lines.push('    .lead,');
      lines.push('    .lead-text {');
      lines.push('      font-size: ' + preset['lead-text-font-size-mobile'] + 'px;');
      lines.push('    }');
      lines.push('  }');
      lines.push('');

      buttonColorDefinitions.forEach(function (definition) {
        var buttonSelector = definition.prefix === 'link'
          ? 'a:not(.btn)'
          : '.btn-' + definition.prefix.replace('button-', '');
        var state = definition.state === 'hover' ? ':hover' : '';
        lines.push('  ' + buttonSelector + state + ' {');
        lines.push('    color: ' + resolveColor(preset, definition.prefix + '-' + definition.state + '-text-color') + ';');
        lines.push('    background-color: ' + resolveColor(preset, definition.prefix + '-' + definition.state + '-background-color') + ';');
        if (definition.prefix === 'link') {
          var decoration = resolveColor(preset, definition.prefix + '-' + definition.state + '-border-color');
          lines.push('    text-decoration: ' + (decoration === 'transparent' ? 'none' : decoration) + ';');
        } else {
          lines.push('    border-color: ' + resolveColor(preset, definition.prefix + '-' + definition.state + '-border-color') + ';');
        }
        lines.push('  }');
      });
      lines.push('');

      lines.push('  input:not([type="checkbox"]):not([type="radio"]):not([type="color"]),');
      lines.push('  select,');
      lines.push('  textarea {');
      lines.push('    color: ' + resolveColor(preset, 'input-text-color') + ';');
      lines.push('    background-color: ' + resolveColor(preset, 'input-background-color') + ';');
      lines.push('    border-color: ' + resolveColor(preset, 'input-border-color') + ';');
      lines.push('  }');
      lines.push('');

      lines.push('  .accordion {');
      lines.push('    .accordion-button {');
      lines.push('      color: ' + resolveColor(preset, 'accordion-title-text-color') + ';');
      lines.push('      background-color: ' + resolveColor(preset, 'accordion-title-background-color') + ';');
      lines.push('      border-color: ' + resolveColor(preset, 'accordion-title-border-color') + ';');
      lines.push('    }');
      lines.push('    .accordion-body {');
      lines.push('      color: ' + resolveColor(preset, 'accordion-text-text-color') + ';');
      lines.push('      background-color: ' + resolveColor(preset, 'accordion-text-background-color') + ';');
      lines.push('      border-color: ' + resolveColor(preset, 'accordion-text-border-color') + ';');
      lines.push('    }');
      lines.push('  }');
      lines.push('');

      lines.push('  .nav-tabs {');
      lines.push('    --bs-nav-link-color: ' + resolveColor(preset, 'tabs-inactive-text-color') + ';');
      lines.push('    --bs-nav-tabs-link-active-color: ' + resolveColor(preset, 'tabs-active-text-color') + ';');
      lines.push('    .nav-link.active {');
      lines.push('      color: ' + resolveColor(preset, 'tabs-active-text-color') + ';');
      lines.push('      background-color: ' + resolveColor(preset, 'tabs-active-background-color') + ';');
      lines.push('      border-color: ' + resolveColor(preset, 'tabs-active-border-color') + ';');
      lines.push('    }');
      lines.push('    .nav-link:not(.active) {');
      lines.push('      color: ' + resolveColor(preset, 'tabs-inactive-text-color') + ';');
      lines.push('      background-color: ' + resolveColor(preset, 'tabs-inactive-background-color') + ';');
      lines.push('      border-color: ' + resolveColor(preset, 'tabs-inactive-border-color') + ';');
      lines.push('    }');
      lines.push('  }');
      lines.push('');

      lines.push('  .object-teaser {');
      lines.push('    .wrapper:not(.compact-view) {');
      lines.push('      color: ' + preset['teaser-standard-text-color'] + ';');
      lines.push('      background-color: ' + preset['teaser-standard-background-color'] + ';');
      lines.push('      border: ' + preset['teaser-standard-border-color'] + ';');
      lines.push('    }');
      lines.push('    .wrapper.compact-view {');
      lines.push('      color: ' + preset['teaser-compact-text-color'] + ';');
      lines.push('      background-color: ' + preset['teaser-compact-background-color'] + ';');
      lines.push('      border: ' + preset['teaser-compact-border-color'] + ';');
      lines.push('    }');
      lines.push('  }');
      lines.push('}');
      lines.push('');
    });

    return lines.join('\n');
  }

  async function exportScss() {
    var generatedExport = createProjectScssExport();
    var exportContent;

    try {
      var response = await fetch('css/custom.scss', { cache: 'no-store' });
      if (!response.ok) {
        throw new Error('custom.scss konnte nicht geladen werden.');
      }

      var baseScss = await response.text();
      var standardPreset = Object.assign({}, defaults, presets.standard);
      baseScss = baseScss.replace(
        /(\$font-Montserrat-Ueberschrift:\s*).+?;/,
        '$1' + standardPreset['heading-font-family'] + ';'
      );
      baseScss = baseScss.replace(
        /(\$font-Hind-Fliesstext:\s*).+?;/,
        '$1' + standardPreset['body-font-family'] + ';'
      );
      var generatedBlock = [
        '/* BEGIN OPENFRONTEND DESIGN-BUILDER EXPORT */',
        generatedExport,
        '/* END OPENFRONTEND DESIGN-BUILDER EXPORT */'
      ].join('\n');
      var withoutPreviousExport = baseScss.replace(
        /\/\* BEGIN OPENFRONTEND DESIGN-BUILDER EXPORT \*\/[\s\S]*?\/\* END OPENFRONTEND DESIGN-BUILDER EXPORT \*\/\s*/g,
        ''
      ).trimEnd();
      exportContent = withoutPreviousExport + '\n\n' + generatedBlock + '\n';
    } catch (error) {
      setStatus('Die bestehende custom.scss konnte nicht geladen werden.', true);
      return;
    }

    var blob = new Blob([exportContent], { type: 'text/x-scss;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = (templateName && templateName.value.trim()
      ? templateName.value.trim() + '-custom'
      : 'custom') + '.scss';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setStatus('SCSS-Datei wurde heruntergeladen.');
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
      writeDraft();
      saveCurrentTemplate();
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
      writeDraft();
      saveCurrentTemplate();
      setStatus('Änderungen werden live angezeigt.');
    });
  });

  colorSources.forEach(function (source) {
    source.addEventListener('change', function () {
      if (source.value) {
        applyPaletteSource(source.dataset.builderColorSource, source.value);
        saveActivePreset();
        writeDraft();
        saveCurrentTemplate();
      }
      setStatus('Farbpalette wurde angewendet.');
    });
  });

  googleFontButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var input = panel.querySelector(
        '[data-builder-google-font="' + button.dataset.builderGoogleFontApply + '"]'
      );

      if (input) {
        loadGoogleFont(input);
      }
    });
  });

  if (sectionSelect) {
    sectionSelect.addEventListener('change', function () {
      showBuilderSection(sectionSelect.value);
    });
    showBuilderSection(sectionSelect.value);
  }

  if (themeSelect) {
    themeSelect.addEventListener('change', function () {
      saveActivePreset();
      activeTheme = themeSelect.value;
      ensureVariantPreset(activeTheme);
      setTheme(themeSelect.value);
      loadPreset(activeTheme);
      writeDraft();
      saveCurrentTemplate();
      if (templateThemeSelect) {
        templateThemeSelect.value = activeTheme;
      }
      setStatus('Variante: ' + themeSelect.options[themeSelect.selectedIndex].text);
    });
    setTheme(themeSelect.value);
    loadPreset(activeTheme);
  }

  if (templateThemeSelect) {
    templateThemeSelect.value = activeTheme;
    templateThemeSelect.addEventListener('change', function () {
      if (themeSelect) {
        themeSelect.value = templateThemeSelect.value;
        themeSelect.dispatchEvent(new Event('change'));
      }
    });
  }

  if (saveTemplateButton) {
    saveTemplateButton.addEventListener('click', saveTemplate);
  }

  if (deleteTemplateButton) {
    deleteTemplateButton.addEventListener('click', deleteTemplate);
  }

  if (resetDraftButton) {
    resetDraftButton.addEventListener('click', resetDraft);
  }

  if (resetTemplateColorsButton) {
    resetTemplateColorsButton.addEventListener('click', resetTemplateColors);
  }

  if (templateSelect) {
    templateSelect.addEventListener('change', function () {
      if (deleteTemplateButton) {
        deleteTemplateButton.disabled = !templateSelect.value;
      }
      if (loadTemplateButton) {
        loadTemplateButton.disabled = !templateSelect.value;
      }
    });
  }

  if (loadTemplateButton) {
    loadTemplateButton.addEventListener('click', function () {
      loadTemplate(templateSelect ? templateSelect.value : '');
    });
  }

  if (exportButton) {
    exportButton.addEventListener('click', exportScss);
  }

  readTemplates();
  refreshTemplateOptions();
  readDraft();

  window.addEventListener('beforeunload', function () {
    saveActivePreset();
    writeDraft();
  });
}());
