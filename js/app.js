var toolbarButtons = [
    'bold', 'italic', 'underline', '|', 'formatOL', 'formatUL', '|', 'color',
    'insertTable', 'insertLink', '|', 'insertImage'
  ];

angular.module('froalaApp', ['froala'])
  .value('froalaConfig', {
    placeholderText: 'Enter Text Here',
    toolbarButtons: toolbarButtons,
    toolbarButtonsMD: toolbarButtons,
    toolbarButtonsSM: toolbarButtons,
    toolbarButtonsXS: toolbarButtons,
  })
  .controller('FroalaTestController', function($scope) {
    $scope.htmlContent = '';
  });
