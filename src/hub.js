function Hub(config) {
  this.urlToIntegrate =
    "https://hub.pagar.me/{language}/apps/{publicAppKey}/authorize?redirect={redirectUrl}";
  this.urlToView =
    "https://hub.pagar.me/{language}/apps/{publicAppKey}/edit/{installId}";

  this.urlToIntegratePtBr =
    "https://hub.pagar.me/apps/{publicAppKey}/authorize?redirect={redirectUrl}";
  this.urlToViewPtBr =
    "https://hub.pagar.me/apps/{publicAppKey}/edit/{installId}";

	this.pagarmeLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAgCAYAAAAFQMh/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ODAzOTNBNUFBQzFFODExOTZGQkYzRTY4RUMyNDhGRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQzA4N0Y2MkMxQUExMUU4OTk1QkU2MDk5QUM5OTYzMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQzA4N0Y2MUMxQUExMUU4OTk1QkU2MDk5QUM5OTYzMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg4MDM5M0E1QUFDMUU4MTE5NkZCRjNFNjhFQzI0OEZEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg4MDM5M0E1QUFDMUU4MTE5NkZCRjNFNjhFQzI0OEZEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+pk4v1AAAAa5JREFUeNpi+P//fxMQ3wZiCyBmoDFWAOI7QLwMxPn3HwJAtCUNLVUG4ndQu8ACL/6jAlsaWKoOxB+Q7HjLxMDA8JcBFRwCYi8G6gFDID4DxPxIYv+ZcCjeCsRuVLBUF4hPATEPugQTHk07gdiVAkv1oZayYJNkIqB5FxB7kGGpEdRSDlwKmIgwZDsQ+5FgqRnUUjZ8ipiINGwjEAcSoc4CiE8AMTMhhUwk+GQdEPvjkbcE4uNAzEiMYUwkxt0GII7Eos8aiI+RYhATGQlnGRDrIPHtgfgIqYaQY3EjEN9CSkgHyMpswOLr6X/iwXakYtDhP/ngDak+rkAqBvdTUqSRYvEfIL4LZddQWpaSYvF/JDYXPS1mBWIJKLuHnhaDQB2U3gvECRTZTGKqBoFUIGaEpuwQclM1ORaDgB5StgqhR3YCgVIgvo3EXwPE4bQO6hw87apQWgV1DhGNulBqW5xEQovSk1oWJ5PRnPWh1OIUCtrSXuRanEqFhrw3qRYnU7EX4YnL4mdoghE06MI4odnxlgFNIIyGnTaUhgNIYCY0uMPo0E0FWf4E1JIBCDAASX+haFjXN1cAAAAASUVORK5CYII=";
  
	this.styles = "#pagarme-hub button { background-color: #65A300; border-color:#65A300; border-radius: 4px; border-style: solid; border-width: 2px; cursor: pointer; letter-spacing: .04em; display: inline-block; font-size: 14px; font-weight: 600; font-family: Open Sans,sans-serif; outline: none; padding: 8px 12px; text-transform: uppercase; text-align: center; color: #fff; user-select: none; white-space: normal; transition: all .3s ease-in-out;}#pagarme-hub button:hover, #pagarme-hub button:active, #pagarme-hub button:focus { background-color: #8FE601; border-color: #8FE601;}#pagarme-hub button img { width: 16px;  margin-bottom: -3px;  margin-top: -3px;}";
  
	this.space = "&nbsp;";
  this.elementType = "button";
  this.containerId = "pagarme-hub";
  this.locations = {
    "pt-br": {
      integrate: "Integrar com o Pagar.me",
      view: "Visualizar integração",
      language: "pt-BR",
    },
    "en-us": {
      integrate: "Integrate with Pagar.me",
      view: "View integration",
      language: "en-US",
    },
    "es-es": {
      integrate: "Integrar con Pagar.me",
      view: "Ver integración",
      language: "es-ES",
    },
  };
  this.language = "pt-br";

  this.setup = function (config) {
    if (config.language) {
      this.language = config.language.toLowerCase();
    }

		let url = null

    if (config.installId) {
      url = this.language === "pt-br" ? this.urlToViewPtBr : this.urlToView;
      text = this.locations[this.language].view;
    } else {
      url =
        this.language === "pt-br"
          ? this.urlToIntegratePtBr
          : this.urlToIntegrate;
      text = this.locations[this.language].integrate;
    }

    url = url.replace("{language}", this.locations[this.language].language);
    url = url.replace("{publicAppKey}", config.publicAppKey);
    url = url.replace("{installId}", config.installId);

		console.log(url)

    createButton(text, function () {
      window.location.href = url;
    });
  };

  this.createButton = function (text, func) {
    let container = document.getElementById(this.containerId);
    let button = document.createElement(this.elementType);
    button.innerHTML =
      text + this.space + this.space + this.getImageTag(pagarmeLogo);
    button.onclick = func;
    this.removeAllChilds(container);
    this.createStyles();
    container.appendChild(button);
  };

  this.getImageTag = function (src) {
    return '<img src="' + src + '" />';
  };

  this.removeAllChilds = function (container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  };

  this.createStyles = function () {
    let container = document.getElementById(this.containerId);
    let styles = document.createElement("style");
    styles.innerHTML = this.styles;
    container.appendChild(styles);
  };

  this.setup(config);

  return this;
}
