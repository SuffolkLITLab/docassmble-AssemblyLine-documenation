module.exports = {
  someSidebar: [
    'intro',
    'bootcamp',
    'getting_started',
    'installation',
    'al_project_architecture',
    {
      type: 'category',
      label: 'Generate Code',
      items: [
        'alweaver_overview',
	'customizing_interview',
        'pdfs',
        'document_variables_reference',
        'yaml_anatomy',
      ],
    },
    {
      type: 'category',
      label: 'Content Style Guide',
      items: [
        'style_guide_formatting',
        'style_guide_readability',
        'style_guide_respect'
      ]
    },
    {
      type: 'category',
      label: 'How to write good questions',
      items: [
        'question_style_overview'
      ]
    },
    {
      type: 'category',
      label: 'Coding Style Guide',
      items: [
        'coding_style',
        'coding_style_python',
        'coding_style_yaml',
        'coding_style_yaml_structure',
        'coding_style_yaml_dynamic',
        'coding_style_yaml_translation',
        'coding_style_defense',
        'docs_style_guide'
      ]
    },
    'github',
    'name_formats',
    require('./docs/reference/sidebar.json')
  ],
};
