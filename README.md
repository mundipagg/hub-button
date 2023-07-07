# Hub Button - For External Apps

> If `installId` is defined, hub button works as integrated, showing "view integration". If `installId` isn't defined, hub button works as new integration, showing "Integrate with Pagar.me";
> 
</br>

> If `environment` is defined as `development`, hub button will take you to the `development` environment, otherwise to the `production` environment;

```html
<!DOCTYPE HTML>
<html>
<head>
  <title>Test Hub Button</title>
  <script src="hub.min.js"></script>
</head>
<body>
  <span id="pagarme-hub"></span>
</body>

<script>

// hub config
let config = {
  publicAppKey : "00000000-0000-0000-0000-000000000000",
  redirectUrl : "https://my-service.com/callback",
  language: "pt-BR",
  environment: "production"
  //installId: "00000000-0000-0000-0000-000000000000"
};

// run and create button
Hub(config);

</script>
</html>

```

![Hub Button - by locations](https://i.imgur.com/NaQgFzv.png)
