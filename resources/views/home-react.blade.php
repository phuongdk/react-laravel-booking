<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>My React Blog App</title>
    <link rel="stylesheet" type="text/css" href="{{ secure_asset('css/app.css') }}">
    <link rel="shortcut icon" type="image/jpg" href="{{ asset('favicon.jpg') }}"/>
</head>
<body>
<div id="app"></div>
<script type="text/javascript" src="{{ secure_asset('js/app.js') }}"></script>
</body>
</html>